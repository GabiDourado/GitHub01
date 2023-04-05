document.addEventListener("click",showcolor);
/*elemento - quando - ação*/
document.getElementById("botao").addEventListener("click", exibenome);
document.getElementById("soma").addEventListener("click", somando);
document.getElementById("subtracao").addEventListener("click", subtraindo);
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
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let subtrai = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById("resultado1").innerHTML = "= " + subtrai;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}