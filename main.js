document.addEventListener("click",showcolor);
/*elemento - quando - ação*/
document.getElementById("botao").addEventListener("click", exibenome);
document.getElementById("soma").addEventListener("click", somando)
function showcolor()
{
    document.body.style.backgroundColor = "#c8a2c8";
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
    document.getElementById("resultado").innerHTML = "=" + numero1 + numero2;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}