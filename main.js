const numbersBtns = document.querySelectorAll('.button-number');
const operationsBtns = document.querySelectorAll('.button-operator');
const buttonC = document.getElementById ('c');
const buttonCE = document.getElementById ('ce');
const decimalBtn = document.getElementById('decimal');
const display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let IsNewNumberEntered = false;
let MemoryPendingOperation = '';

for (let i = 0; i < numbersBtns.length; i++) {
    const numberBtn = numbersBtns[i];
    numberBtn.addEventListener('click', function (e) {
        pressNumber (e.target.value)
    });
};

for (let i = 0; i < operationsBtns.length; i++) {
    const operationBtn = operationsBtns[i];
    operationBtn.addEventListener('click', function (e) {
        doCalculations (e.target.value)
    });
};

decimalBtn.addEventListener('click', makeDecimal);
buttonC.addEventListener('click', clearAll);
buttonCE.addEventListener('click', clearLast);

function pressNumber (number) {
    if (IsNewNumberEntered) { 
        display.value = number;
        IsNewNumberEntered = false;
    } else {
        (display.value === "0") ? display.value = number :
         display.value += number;
    };
};

function doCalculations (op) {
    const localOperationMemory = +display.value;
    
    if (IsNewNumberEntered && MemoryPendingOperation !== "=") {
        display.value = MemoryCurrentNumber;
    } else {
        IsNewNumberEntered = true;
        (MemoryPendingOperation === "+") ? MemoryCurrentNumber += localOperationMemory :
        (MemoryPendingOperation === "-") ? MemoryCurrentNumber -= localOperationMemory :
        (MemoryPendingOperation === "X") ? MemoryCurrentNumber *= localOperationMemory :
        (MemoryPendingOperation === "/") ? MemoryCurrentNumber /= localOperationMemory :
        MemoryCurrentNumber = localOperationMemory;

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };

    if (IsNewNumberEntered && MemoryPendingOperation === "^2") {
        display.value = MemoryCurrentNumber ** 2;
    } 
};

function makeDecimal () {
    let localDecimalMemory = display.value;

    if (IsNewNumberEntered) {
        localDecimalMemory = "0.";
        IsNewNumberEntered = false;
    } else {
        if (localDecimalMemory.indexOf(".") === -1) {
            localDecimalMemory += ".";
        }
    };
    display.value = localDecimalMemory;
};

function clearAll () {
    display.value = "0" 
    IsNewNumberEntered = true;
    MemoryCurrentNumber = 0,
    MemoryPendingOperation = "";
};

function clearLast () {
    display.value = "0"
    IsNewNumberEntered = true;
};


