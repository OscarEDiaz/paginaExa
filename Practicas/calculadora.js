// Acceder a elementos del documento
function suma(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var resultado = n1 + n2;

    document.getElementById('result').value = resultado;
}

function random(){
    var x = 0;
    x = Math.floor(Math.random() * (7 - 1) ) + 1;
    document.getElementById('result').value = x;
}

console.log(x);