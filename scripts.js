/*
objetivo: quando clicar no botão, mostrar o formulario e a máscara 
1- qual botão clicar ?
2- qual formulario?
3- qual máscara?
4- o que mostrar?
   - trazer formulario para a esquerda para direita 
   - centralizar o formulario na tela
   - exibir a máscara de fundo 
*/

const formulario = document.querySelector(".formulario");
const mascaraFormulario = document.querySelector(".mascara-formulario");
const botaoFaleConosco = document.querySelector(".logo-header a:nth-child(3)");

function mostraform() {
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%)";
    mascaraFormulario.style.visibility = "visible";
}

function esconderform() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translate(0)";
    mascaraFormulario.style.visibility = "hidden";
}






