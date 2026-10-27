let count = document.getElementById('count')
let plus = document.getElementById("plus")
let reset = document.getElementById('reset')
let mul = document.getElementById('mul')

value = 0

plus.onclick = function(){
    value ++;
    count.innerHTML = value
}


minus.onclick = function(){
    value --;
    if (value> 0)
    count.innerHTML = value
}

reset.onclick = function(){
    value = 0
    count.innerHTML = value
}

mul.onclick = function(){
}
// ------------------------------
function addNumber(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    document.getElementById("display").value =
        eval(document.getElementById("display").value);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
