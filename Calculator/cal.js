// global variables....
var operatorSelector = '';
var number1 = '';
var number2 = '';
var operatorClicked = false;
var deletebuttons = false;
var clearbutton = false;

// get numbers....
function number(num) {
    if (operatorClicked == false) {
        number1 = number1 + num;
        console.log('number1: ', number1)
    }
    else {
        number2 = number2 + num;
        console.log('number1: ', number2)
    }
    var output = document.getElementById("input");
    output.value += num;
}

// get operator....
function operator(symbol){
    console.log("opr" + symbol)
    operatorClicked = true;
    operatorSelector = symbol;
    var output = document.getElementById("input");
    output.value += symbol;
    operatordisable(Operator);
}

// delete number one by one....
function deletebutton() {
    var inputField = document.getElementById("input");
    let value = inputField.value;
    value = value.slice(0, -1);
    inputField.value = value;


    if (operatorClicked == false) {
        number1 = value;
        console.log("n1" + number1);
    }
    else {
        if (number2 == "") {
            // kyuki operator abhi true hai...
            operatorClicked = false // false hai
            operator_able(Operator);
            console.log("opr " + operatorSelector);
        }
        else {
            number2 = number2.slice(0, -1);
            console.log("n2 " + number2)
        }
    }
}

// switch case.
function equal() {
    var output = document.getElementById("input");

    // equal button sabse phle click ho toh....
    if (number1 == "") {
        alert('please add 1st number also')
        total = 0
    }
    if (number2 == "") {
        alert('please add operatoe and  2nd number also')
        total = 0
    }


    let user1 = parseFloat(number1);
    let user2 = parseFloat(number2);
    let total = 0;
    switch (operatorSelector) {
        
        case "+":
            total = user1 + user2;
            console.log("total..." + total)
            break
        case "-":
            total = user1 - user2;
            console.log("total..." + total)
            break
        case "*":
            total = user1 * user2;
            console.log("total..." + total)
            break
        case "/":
            total = user1 / user2;
            if (user2 == 0) {
                alert("can't divided by zero")
                total = "";
            }
            console.log("total..." + total)
            break
        default:
            console.log("invalid operator")
    }
    output.value = total;
    number1 = total;
    number2 = ''
    // beacause operatorClicked is true
    operatorClicked = false;
    operator_able(Operator);
}


// clear function
function clearResult(){
    var output = document.getElementById("input");
    output.value = "";
    operator_able(Operator);
    number1 = output.value
    console.log("nn1 " + number1)
}

// funcion for operator disabled..
var Operator = document.querySelectorAll(" .operator")

function operatordisable(x){
    for (opr of x){
        // console.log(opr)
        opr.style.pointerEvents = "none"
    }
}

function operator_able(x){
    for (opr of x){
        // console.log(opr)
        opr.style.pointerEvents = "auto"
    }
}