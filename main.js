document.addEventListener("click",showcolor);
/*elemento - quando - ação*/
document.getElementById("botao").addEventListener("click", exibenome);
function showcolor()
{
    document.body.style.backgroundColor = "red";
}
function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}