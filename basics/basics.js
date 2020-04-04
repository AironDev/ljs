
//variables
var fname = 'Airon';
var lname = 'Dev';

// DOM
// document.getElementById('variables').innerHTML = 'full name is '+ lname +' ' +fname;
// document.getElementById('variables').innerHTML = 'full name is '+ lname +' ' +fname;

// Functions
function promptName(){
    var fullName = prompt('Please enter your name here');
    document.getElementById('entered').innerHTML = fullName;
    return fullName;
}

function alertName(){
    alert( document.getElementById('entered').innerHTML);
}

// Arithematic
function incrementDecrement(param){
    var num = document.getElementById('num').value;
    if(param == 'increment'){
        document.getElementById('num').value = ++num;
    }else{
        document.getElementById('num').value = --num;
    }
}

/* 8 hours javascript 2020 */
// Challenge 1: age in days

function checkAgeIndays(){
    let age = document.getElementById('age').value;
    let ageindays = 4309;
    document.getElementById('ageindaysresult').innerHTML = "You are " + ageindays + " days old";
}