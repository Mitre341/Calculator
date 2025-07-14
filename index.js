

let numOneinput = document.getElementById('numOne');
let numTwoinput = document.getElementById('numTwo');
let result = document.getElementById('result'); 
let submit = document.getElementById('btn');
let subtract = document.getElementById('btn1');
let multiply = document.getElementById('btn2');
let divide = document.getElementById('btn3');


submit.addEventListener('click', function() {;
    let numOne = parseInt(numOneinput.value);
    let numTwo = parseInt(numTwoinput.value);

    let sum = numOne + numTwo;
    result.innerText = ` ${numOne} + ${numTwo} = ${sum}`;
    });


    
subtract.addEventListener('click', function() {;
    let numOne = parseInt(numOneinput.value);
    let numTwo = parseInt(numTwoinput.value);

    let sum = numOne - numTwo;
    result.innerText = ` ${numOne} - ${numTwo} = ${sum}`;
    });

multiply.addEventListener('click', function() {;
    let numOne = parseInt(numOneinput.value);
    let numTwo = parseInt(numTwoinput.value);

    let sum = numOne * numTwo;
    result.innerText = ` ${numOne} * ${numTwo} = ${sum}`;
    });

divide.addEventListener('click', function() {;
    let numOne = parseInt(numOneinput.value);
    let numTwo = parseInt(numTwoinput.value);

    let sum = numOne / numTwo;
    result.innerText = ` ${numOne} / ${numTwo} = ${sum}`;
    });

