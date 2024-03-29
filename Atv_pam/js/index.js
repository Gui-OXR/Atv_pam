//alert("Alerta!");

/*function funcao1()
{
alert("Uma mensagem qualquer");
}*/

/*function Pst0() {
    const list = document.getElementsByTagName("ul")[0];
    list.getElementsByTagName("li")[0].innerHTML = "Substituição por TagName";
}

function Pst1() {
    const list = document.getElementsByTagName("ul")[0];
    list.getElementsByTagName("li")[1].innerHTML = "Substituição por TagName";
}

function Cn() {
    const list = document.getElementsByClassName("example")[0];
    list.getElementsByClassName("child")[0].innerHTML = "Milk";
}*/

/*function mudarCor() {
    document.getElementById('box').style.backgroundColor = 'blue';
}

function destacar(elemento) {
    elemento.style.border = '2px solid green';
}

function removerDestaque(elemento) {
    elemento.style.border = '1px solid #ccc';
}

function mostrarSelecao(selecionado) {
    var mensagem = document.getElementById('mensagem');
    mensagem.innerText = 'Opção selecionada: ' + selecionado.value;
}*/

/*function saudacao() {
    console.log("Olá, mundo!");
}


function soma(a, b) {
    return a + b;
}
var resultado = soma(5, 3);
console.log(resultado);


var Multiplicacao = new Function("a", "b", "return a * b");
var resultado = Multiplicacao(5, 3);
console.log(resultado);


var subtracao = function(a, b) {
    return a - b;
};
var resultado = subtracao(8, 3);
console.log(resultado);


var divisao = (a, b) => a / b;
var resultado = divisao(10, 2);
console.log(resultado);*/

/*function exibirFraseMaiusculas() {
    var frase = document.getElementById('fraseInput').value;
    var fraseMaiusculas = frase.toUpperCase();
    var fraseExibidaElemento = document.getElementById('fraseExibida');
    fraseExibidaElemento.textContent = fraseMaiusculas;
}*/

function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function calcularSoma() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = somarNumeros(numero1, numero2);
    document.getElementById('resultado').textContent = 'A soma é: ' + resultado;
}