var mathSigns = ['*', '/', '-', '+'];

function insertNumber(valueToBeInserted){
	
	var mathExpresion = document.getElementById('screen'),	    
	    mathExpresionArray = mathExpresion.value.split(''),
		arrayOfExceptions = ['00','000'],
		flagOutExceptions = 0,
	    newMathExpresion,
		i;
	
	
	//  check if the last element is a mathematichal sign  and if the number to be inserted is 00 or 000
	for( i = 0; i < mathSigns.length; i++ ){
		if(mathExpresionArray[mathExpresionArray.length-1] === mathSigns[i] ){
			if(valueToBeInserted === arrayOfExceptions[0] || valueToBeInserted === arrayOfExceptions[1]){
				flagOutExceptions = 1;
			}
		}
	}
	
	// if the last element is a mathematical sign  insert  single zero
	if(flagOutExceptions === 1){
		
		mathExpresion.value += 0;
	// if the last element is a zero skip the number to be inserted
	}else if(mathExpresionArray[mathExpresionArray.length-1] === '0'){
		
		// // if the value to be inserted is a number different to 00 and 000 insert that number
		if(valueToBeInserted === arrayOfExceptions[0] || arrayOfExceptions === arrayOfExceptions[1]){
		   
		   return;
		}else{
			
			mathExpresion.value += valueToBeInserted;
		}
		
    // if the last element is '(' or ')' then insert only a single zero if the value to be inserted is 00 or 000
	}else if(mathExpresionArray[mathExpresionArray.length-1] == '('){
		
		if(valueToBeInserted === '000' || valueToBeInserted === '00'){
			
			mathExpresion.value += 0;
		}else{
			
			mathExpresion.value += valueToBeInserted;
		}
		
	}else if(mathExpresionArray[mathExpresionArray.length-1] == ')'){
		
		if(valueToBeInserted === '000' || valueToBeInserted === '00'){
			
			mathExpresion.value += ('*' + 0);
		}else{
			
			mathExpresion.value += ( '*' + valueToBeInserted);
		}
	} else{
		
		mathExpresion.value +=  valueToBeInserted;
	}
	
	console.log(mathExpresionArray);
	console.log(mathExpresionArray[mathExpresionArray.length-1])
};

function insertSign(valueToBeInserted){
	
	var screenId = document.getElementById('screen'),
	    screenValue = screenId.value,
		screenValueArray = screenValue.split(''),
		lastElement = screenValueArray[screenValueArray.length-1],
		condition = (lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '/');
	
	if(screenValueArray.length === 0){
		
		return;
	}
	if(condition){
		
		screenValueArray[screenValueArray.length-1] = valueToBeInserted;
		screenId.value=screenValueArray.join('');
		return;
	}
	
	screenId.value = screenValue + valueToBeInserted;
	
}

function sqrt(){
	
	var mathExpresion = document.getElementById('screen'),
        mathExpresionArray = mathExpresion.value.split(''),
	    newMathExpresion;
		
	if(mathExpresionArray.length > 1){
			
		newMathExpresion = eval(mathExpresion.value);
		newMathExpresion =Math.sqrt(newMathExpresion);
	}else{
		
		newMathExpresion = Math.sqrt(mathExpresion.value);
	}
    
	mathExpresion.value = newMathExpresion;
};

function laPatrat(){
	var mathExpresion = document.getElementById('screen'),
        mathExpresionArray = mathExpresion.value.split(''),
	    newMathExpresion;
		
	if(mathExpresionArray.length > 1){
			
		newMathExpresion = eval(mathExpresion.value);
		newMathExpresion *= newMathExpresion;
	}else{
		
		newMathExpresion = mathExpresion.value * mathExpresion.value;
	}
    
	mathExpresion.value = newMathExpresion;
};

function positiveNegative(){
	var mathInput = document.getElementById('screen'),
	    mathExpresion=mathInput.value,
		mathExpresionArray = mathExpresion.split(""),
	    mathExpresionArrayLastElem = 0,
		mathExpresionArrayFirstElem = 0,
		newMathExpresion,
		checkLastElem,
		i;
	
	if(mathExpresion.length <= 1){
		
		newMathExpresion = -mathExpresion;
	    mathInput.value = newMathExpresion;
	}else{
		for(i=0; i < mathSigns.length; i++){
			if(mathSigns[i] === mathExpresionArray[mathExpresionArray.length - 1]){
				mathExpresionArrayLastElem = 1;
			}
			
			if(mathSigns[i] === mathExpresionArray[0]){
				mathExpresionArrayFirstElem = 1;
			}
		}
		
		if(mathExpresionArrayLastElem === 1 && mathExpresionArrayFirstElem === 0){
			
			newMathExpresion = "-"+mathExpresion+"";
		}else if(mathExpresionArrayLastElem !== 1 && mathExpresionArrayFirstElem === 0){
			
			newMathExpresion = "-("+mathExpresion+")";
		}else{
			
			if(mathExpresionArray[mathExpresionArray.length - 1] == ")"){
				mathExpresionArray.pop();
		        mathExpresionArray.shift();
			    mathExpresionArray.shift();
			}else{
				mathExpresionArray.shift()
			}
			
			newMathExpresion = mathExpresionArray.join("");
		}
		
	    mathInput.value = newMathExpresion;
	}
};

function equal(){
	
	var mathExpresion=document.getElementById('screen'),
	    mathExpresionValue = mathExpresion.value,
	    newMathExpresion=eval(mathExpresionValue);
		
	mathExpresion.value = newMathExpresion;
};

function resetValue(){
	
	document.getElementById('mathInput').reset();
};

function dot(){

	var mathExpresion = document.getElementById('screen'),
	    mathExpresionArray = mathExpresion.value.split(''),
	    temporaryArray = [],
		arrayWithIndexOfMathSigns = [],
		newMathExpresion,
		signsInScreenValue = 0,
		dotPresentInCurrentNumber = 0,
		lastElementOfArray = 0,
		countMathSigns = 0,
		i,
		j;
		
		// check if in the math value there are mathematical sings
		for(i = 0; i < mathExpresionArray.length; i++){
			for(j = 0; j < mathSigns.length; j++){
				if(mathExpresionArray[i] === mathSigns[j]){
					
					// flag out if in the math value there are mathematical sings
					signsInScreenValue = 1;
					
					// count how many mathematical sings ther are
					countMathSigns += 1;
					
					//  save the index values of the mathematical signs in a new array
					// this array will be used later on to stop the user of inserting multiple dots
					arrayWithIndexOfMathSigns.push(i);
				}
			}			
		}
		
		// check if there is only a simple number
		if(signsInScreenValue === 0 && mathExpresionArray[mathExpresionArray.length-1] !== '.'){			
			
			// check if there is a dot already in out number
			for(i = 0; i < mathExpresionArray.length; i++){
			    if(mathExpresionArray[i] === '.'){
			    	dotPresentInCurrentNumber = 1; 
			    }
		    }
			
			// insert the dot if there isn't one 
			if(dotPresentInCurrentNumber === 0){
				newMathExpresion = mathExpresion.value + '.';	
                mathExpresion.value = newMathExpresion;
			}
			
		// check if a mathematical sign is present 
		}else if(signsInScreenValue === 1 && mathExpresionArray[mathExpresionArray.length-1] !== '.'){
			
			// create an array with the values after the last mathematical sign
			temporaryArray = mathExpresionArray.slice(arrayWithIndexOfMathSigns[arrayWithIndexOfMathSigns.length-1]);	
			
			//check if the last element is a mathematical sign
			for(i = 0; i < mathSigns.length; i++){
			    if(mathSigns[i] === mathExpresionArray[mathExpresionArray.length-1]){
			    	lastElementOfArray = 1; 
			    }
		    }
			
			// check if there is a dot in the temporary array
			for(i = 0; i < temporaryArray.length; i++){
				if(temporaryArray[i] === '.'){
					lastElementOfArray = 1;
				}
			}
			
			if(lastElementOfArray === 0){
				newMathExpresion = mathExpresion.value + '.';	
                mathExpresion.value = newMathExpresion;
			}
		}				
};
 
function parenthesis(parenthesis){
	
	var mathExpresion = document.getElementById('screen'),
	    mathExpresionArray = mathExpresion.value.split(''),
	    arrayOfParenthesis = ['(',')'],
	    newMathExpresion,
		mathSign = 0,
		numberOfOpenParenthesis = 1,
		numberOfCloseParenthesis = 1,
		lastElementisNumber = false,
		lastElementIsMathSign = false,
		i;
	
	for( i = 0; i < mathExpresionArray.length; i++ ){
		
		//  store te number of parenthesis that are opened and closed
		if(mathExpresionArray[i] === arrayOfParenthesis[0]){
			numberOfOpenParenthesis+=1;
		}		
		if(mathExpresionArray[i] === arrayOfParenthesis[1]){
			numberOfCloseParenthesis+=1;
		}
	}
	
	// if there isn't an opened parenthesis the close one will not be inserted
	if(numberOfOpenParenthesis === 0 && parenthesis === arrayOfParenthesis[1]){
		return;
	}	
	
	// there can't be more closed parenthesis that are opened 	
	if(numberOfCloseParenthesis >= numberOfOpenParenthesis && parenthesis === arrayOfParenthesis[1]){
		return;
	}
	
	if(mathExpresionArray.length === 0){
		
		mathExpresion.value += parenthesis;	
	}else{
		
		for( i = 0; i < mathSigns.length; i++){
			if(mathExpresionArray[mathExpresionArray.length-1] !== mathSigns[i]){
				lastElementisNumber = true;
			}			
			if(mathExpresionArray[mathExpresionArray.length-1] === mathSigns[i]){
				lastElementIsMathSign = true;
			}
		}
		
		
		if(lastElementisNumber && parenthesis === arrayOfParenthesis[0]){
			
			// if the last element is not is not a mathematical sign use the multiplication sign
			if(!lastElementIsMathSign){
				
				mathExpresion.value += ('*'+ parenthesis);	
			}else{
				
				mathExpresion.value += parenthesis;
			}
			
		}else{
			mathExpresion.value += parenthesis;	
		}
		
	}
};

// deletes the last element from the mathematical expression
function rubber(){
    var mathExpresion = document.getElementById('screen'),
	    mathExpresionArray = mathExpresion.value.split(''),
        mathExpresionLength = mathExpresion.value.length - 1,
    	newMathExpresion = mathExpresionArray.slice(0, mathExpresionLength);
    
    mathExpresion.value = newMathExpresion.join('');
};
