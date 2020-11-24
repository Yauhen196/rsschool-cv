let numbersBtns = document.querySelectorAll('.button-number');
let operationsBtns = document.querySelectorAll('.button-operator');
let buttonC = document.getElementById ('c');
let buttonCE = document.getElementById ('ce');
let decimalBtn = document.getElementById('decimal');
let display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';


for (let i=0; i<numbersBtns.length; i++) {
    let numberBtn = numbersBtns[i];
    numberBtn.addEventListener('click', function (e) {
        pressNumber (e.target.textContent)
    });
};

for (let i=0; i<operationsBtns.length; i++) {
    let operationBtn = operationsBtns[i];
    operationBtn.addEventListener('click', function (e) {
        operations (e.target.textContent)
    });
};

decimalBtn.addEventListener('click', decimal);

function pressNumber (number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function operations (op) {
    let localOperationMemory = display.value;
        
    if(MemoryNewNumber && MemoryPendingOperation !== "=") {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === "+") {
            MemoryCurrentNumber += +localOperationMemory;  
        } else if (MemoryPendingOperation === "-") {
            MemoryCurrentNumber -= +localOperationMemory;  
        } else if (MemoryPendingOperation === "*") {
            MemoryCurrentNumber *= +localOperationMemory;  
        } else if (MemoryPendingOperation === "/") {
            MemoryCurrentNumber /= +localOperationMemory;  
        } else if (MemoryPendingOperation === "X&sup2") {
            MemoryCurrentNumber *= +MemoryCurrentNumber;
        } else {
            MemoryCurrentNumber = +localOperationMemory;  
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
};

function decimal (argument) {
    let localDecimalMemory = display.value;
    
    if(MemoryNewNumber) {
        localDecimalMemory = "0.";
        MemoryNewNumber = false;
    } else {
        if(localDecimalMemory.indexOf(".") === -1) {
            localDecimalMemory += "."
        }
    };
    display.value = localDecimalMemory;
};

buttonC.addEventListener('click', function (e) {
    display.value = "0" 
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0,
    MemoryPendingOperation = "";
});

buttonCE.addEventListener('click', function (e) {
    display.value = "0"
    MemoryNewNumber = true;
});


