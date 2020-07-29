var oneBtn = document.getElementById("calc-one");
var twoBtn = document.getElementById("calc-two");
var threeBtn = document.getElementById("calc-three");
var fourBtn = document.getElementById("calc-four");
var fiveBtn = document.getElementById("calc-five");
var sixBtn = document.getElementById("calc-six");
var sevenBtn = document.getElementById("calc-seven");
var eightBtn = document.getElementById("calc-eight");
var nineBtn = document.getElementById("calc-nine");
var zeroBtn = document.getElementById("calc-zero");

var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var plusminusBtn = document.getElementById("calc-plus-minus");
var percentageBtn = document.getElementById("calc-percentage");
var displayValElement = document.getElementById("calc-display-val");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];




var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    
    if(displayVal === '0') {
        displayVal = '';}

    displayVal += btnText;
    displayValElement.innerText = displayVal;
   

}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = 0;
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(" "));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
    
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}
plusminusBtn.onclick = () => {
   
    if(!displayVal.includes('-'))
        displayVal =  '-' + displayVal;
    displayValElement.innerText = displayVal;
}
percentageBtn.onclick = () => {
    pendingVal = displayVal;
    displayVal = pendingVal * 0.01;
    displayValElement.innerText = displayVal;

}
decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;

}


