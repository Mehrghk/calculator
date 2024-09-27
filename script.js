let total = "0";
let runningTotal = 0;
let previousOperator;
const totalNumber = document.querySelector(".total-Equasion");

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rewrite();
}

function handleNumber(number){
    if(total === '0'){
        total = number;
    } else {
        total += number;
    }
    
}

function handleMath(value){
    if(total === '0'){
        //do nothing
        return;
    } 

    const intTotal = parseInt(total);
    if(runningTotal === 0){
        runningTotal = intTotal;
    } else {
        flushOperation(intTotal);
    }

    previousOperator = value;
    total = '0';
    // console.log(runningTotal);
}

function flushOperation(intTotal){
    if(previousOperator === '+'){
        runningTotal += intTotal;
    } else if( previousOperator === '-'){
        runningTotal -= intTotal;
    } else if( previousOperator === '⨯'){
        runningTotal *= intTotal;
    } else if( previousOperator === '/'){
        runningTotal /= intTotal;
    }
}
function handleSymbol(symbol){
    switch (symbol) {
        case 'C':
            total = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(total));
            previousOperator = null;
            total =  + runningTotal;
            console.log(total);

            runningTotal = 0;
            // rewrite();
            break;
        case '←':
            if (total.length === 1){
                total = '0';
            } else {
                total = total.substring(0 , total.length -1);
            }
            break;
        case '+':        
        case '-':        
        case '⨯':        
        case '/':        
            handleMath(symbol);
            break;   

    }
}

function initialize(){
    document.querySelector('.calculator-body')
        .addEventListener('click', function(event){
            buttonClick(event.target.innerText);
        });
}

function rewrite(){
    totalNumber.innerText = total;
}
initialize();