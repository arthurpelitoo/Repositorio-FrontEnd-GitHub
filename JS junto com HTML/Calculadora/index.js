//Caching
const resultArea = document.getElementById("result-area");
const buttonsSci = document.getElementById("buttons-sci");
const calc = document.getElementById("calc");

//Números
function numberOneClick(){
    const button = document.getElementById("one");
    resultArea.value += button.textContent.trim();
}

function numberTwoClick(){
    const button = document.getElementById("two");
    resultArea.value += button.textContent.trim();
}

function numberThreeClick(){
    const button = document.getElementById("three");
    resultArea.value += button.textContent.trim();
}

function numberFourClick(){
    const button = document.getElementById("four");
    resultArea.value += button.textContent.trim();
}

function numberFiveClick(){
    const button = document.getElementById("five");
    resultArea.value += button.textContent.trim();
}

function numberSixClick(){
    const button = document.getElementById("six");
    resultArea.value += button.textContent.trim();
}

function numberSevenClick(){
    const button = document.getElementById("seven");
    resultArea.value += button.textContent.trim();
}

function numberEightClick(){
    const button = document.getElementById("eight");
    resultArea.value += button.textContent.trim();
}

function numberNineClick(){
    const button = document.getElementById("nine");
    resultArea.value += button.textContent.trim();
}

function numberZeroClick(){
    const button = document.getElementById("zero");
    resultArea.value += button.textContent.trim();
}

//Simbolos
function sumClick(){
    const button = document.getElementById("sum");
    resultArea.value += button.textContent.trim();
}

function minusClick(){
    const button = document.getElementById("minus");
    resultArea.value += button.textContent.trim();
}

function multClick(){
    resultArea.value += "*";
}

function divisionClick(){
    const button = document.getElementById("division");
    resultArea.value += button.textContent.trim();
}

function parenthesisOpenClick(){
    if(buttonsSci.style.opacity > 0){
        const button = document.getElementById("parenthesis-open");
        resultArea.value += button.textContent.trim();
    }
}

function parenthesisCloseClick(){
    if(buttonsSci.style.opacity > 0){
        const button = document.getElementById("parenthesis-close");
        resultArea.value += button.textContent.trim();
    }
}

function commaClick(){
    resultArea.value += ".";
}

function percentClick(){
    const button = document.getElementById("percent");
    resultArea.value += button.textContent.trim();
}

function resultClick(){
    const result = eval(resultArea.value);
    resultArea.value = result;
}

function acClick(){
    resultArea.value = "";
}

function delClick(){
    var currentValue = resultArea.value;
    if (currentValue.length > 0) {
        var resultValue = currentValue.substring(0, currentValue.length - 1);
        resultArea.value = resultValue;
    }
}

function sciClick(){
    if(buttonsSci.style.opacity == 0){
        buttonsSci.style.opacity = 1;
        calc.style.width = "1000px";
    }else{
        buttonsSci.style.opacity = 0;
        calc.style.width = "680px";
    }
}
