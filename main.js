let numbersBtns = document.querySelectorAll('.button-number');
let operationsBtns = document.querySelectorAll('.button-operator');
let buttonC = document.getElementById ('c');
let buttonCE = document.getElementById ('ce');
let decimalBtn = document.getElementById('decimal');
let display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let IsNewNumberEntered = false;
let MemoryPendingOperation = '';

for (let i=0; i<numbersBtns.length; i++) {
    let numberBtn = numbersBtns[i];
    numberBtn.addEventListener('click', function (e) {
        pressNumber (e.target.name)
    });
};

for (let i=0; i<operationsBtns.length; i++) {
    let operationBtn = operationsBtns[i];
    operationBtn.addEventListener('click', function (e) {
        doCalculations (e.target.name)
    });
};

decimalBtn.addEventListener('click', makeDecimal);

function pressNumber (number) {
    if(IsNewNumberEntered) {
        display.value = number;
        IsNewNumberEntered = false;
    } else {
        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function doCalculations (op) {
    let localOperationMemory = +display.value;
    
    if(IsNewNumberEntered && MemoryPendingOperation !== "result") {
        display.value = MemoryCurrentNumber;
    } else {
        IsNewNumberEntered = true;
        if (MemoryPendingOperation === "plus") {
            MemoryCurrentNumber += localOperationMemory;  
        } else if (MemoryPendingOperation === "minus") {
            MemoryCurrentNumber -= localOperationMemory;  
        } else if (MemoryPendingOperation === "multiply") {
            MemoryCurrentNumber *= localOperationMemory;  
        } else if (MemoryPendingOperation === "divide") {
            MemoryCurrentNumber /= localOperationMemory;  
        } else {
            MemoryCurrentNumber = +localOperationMemory;  
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };

    if(IsNewNumberEntered && MemoryPendingOperation === "square") {
        display.value = MemoryCurrentNumber ** 2;
    } 
};

function makeDecimal (argument) {
    let localDecimalMemory = display.value;
    
    if(IsNewNumberEntered) {
        localDecimalMemory = "0.";
        IsNewNumberEntered = false;
    } else {
        if(localDecimalMemory.indexOf(".") === -1) {
            localDecimalMemory += "."
        }
    };
    display.value = localDecimalMemory;
};

buttonC.addEventListener('click', function (e) {
    display.value = "0" 
    IsNewNumberEntered = true;
    MemoryCurrentNumber = 0,
    MemoryPendingOperation = "";
});

buttonCE.addEventListener('click', function (e) {
    display.value = "0"
    IsNewNumberEntered = true;
});


