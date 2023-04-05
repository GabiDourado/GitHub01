document.addEventListener("click",showcolor);
/*elemento - quando - ação*/
document.getElementById("botao").addEventListener("click", exibenome);
document.getElementById("soma").addEventListener("click", somando)
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
    document.getElementById("resultado").innerHTML = "=" + parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}