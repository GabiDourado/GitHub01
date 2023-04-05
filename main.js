document.addEventListener("click",showcolor);
/*elemento - quando - ação*/
document.getElementById("botao").addEventListener("click", exibenome);
document.getElementById("soma").addEventListener("click", somando);
document.getElementById("subtracao").addEventListener("click", subtraindo);
document.getElementById("multiplicacao").addEventListener("click", multiplicando);
document.getElementById("divisao").addEventListener("click", dividindo);
function showcolor()
{
    document.body.style.backgroundColor = "yellow";
}
function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}
function somando ()
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let soma = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").innerHTML = "= " + soma;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
function subtraindo ()
{
    let numeroo1 = document.getElementById("numero1").value;
    let numeroo2 = document.getElementById("numero2").value;
    let subtrai = parseFloat(numeroo1) - parseFloat(numeroo2);
    document.getElementById("resultado1").innerHTML = "= " + subtrai;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}
function multiplicando ()
{
    let numerooo1 = document.getElementById("numero-1").value;
    let numerooo2 = document.getElementById("numero-2").value;
    let multiplica = parseFloat(numerooo1) * parseFloat(numerooo2);
    document.getElementById("resultado-1").innerHTML = "= " + multiplica;
    document.getElementById("numero-1").value = "";
    document.getElementById("numero-2").value = "";
}
function dividindo ()
{
    let numeroooo1 = document.getElementById("num-1").value;
    let numeroooo2 = document.getElementById("num-2").value;
    let divide = parseFloat(numeroooo1) / parseFloat(numeroooo2);
    document.getElementById("result-1").innerHTML = "= " + divide;
    document.getElementById("num-1").value = "";
    document.getElementById("num-2").value = "";
}