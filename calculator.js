"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";
    var expressVal = "0";
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;
            if(value=="AC") {
            	displayVal = "0";
            	expressVal = "0";
            	stack = [];
            }
            else if(value==".") {
            	if(displayVal.split(".")[1]==undefined && /^[0-9]+$/.test(displayVal.split(".")[0])) {
					displayVal = displayVal + ".";
            	}
            }       
            else if(/^[0-9]+$/.test(value)){
            	if(displayVal=="0") {
            		displayVal = "";
            	}
            	displayVal = displayVal + value;
            }
            else if(value=="=") {
            	var sum = stack[0];
            	expressVal = expressVal + displayVal;
				stack.push(parseFloat(displayVal));
            	for(var i = 0; i < stack.length; i++) {
            		if(!/^[0-9]+$/.test(stack[i])) {
            			if(stack[i]=="+") {
            				sum = sum + stack[i+1];
            			}
            			else if(stack[i]=="-") {
            				sum = sum - stack[i+1];
            			}
            			else if(stack[i]=="*") {
            				sum = sum * stack[i+1];
            			}
            			else if(stack[i]=="^") {
            				for(var j = 0; j < stack[i+1]-1; j++) {
            					sum = sum * stack[0];
            				}
            			}
            			
            		}

            	}
            	displayVal = sum;
            }
            else {
            	if(displayVal!="0") {
            		if (expressVal=="0") {
            			expressVal = "";
            		}
            		expressVal = expressVal + displayVal + value;
            		
            		if(stack[stack.length-1]=="*" || stack[stack.length-1]=="/" || stack[stack.length-1]=="^") {
            			highPriorityCalculator(stack, displayVal);
            		}
            		else if(stack[stack.length-1]=="!") {
            			factorial(stack);
            		}
            		stack.push(parseFloat(displayVal));
            		stack.push(value);
            		displayVal = "0";

            	}
            }
			document.getElementById('result').innerHTML = displayVal;
			document.getElementById('expression').innerHTML = expressVal;
        };
    }
};
function factorial (x) {
	x.pop();
	var f_num = x.pop();
	var sum = 0
	for(var i=1; i<=f_num; i++) {
		sum = sum * i;
	}
	x.push(sum);

}
function highPriorityCalculator(s, val) {
	var operator = s.pop();
	var num1 = s.pop();
	if(operator=="*") {
		s.push(num1*parseFloat(val));
	}
	else if(operator=="/") {
		s.push(num1/parseFloat(val));
	}
	else {
		s.push(num1^parseFloat(val));
	}
}

function calculator(s) {
    var result = 0;
    var operator = "+";
    for (var i=0; i< s.length; i++) {
        
    }
    return result;
}
