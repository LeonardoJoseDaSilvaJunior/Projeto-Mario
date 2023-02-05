// Declarando as constantes
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const videoSrc = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    modal.classList.add("aberto");
    video.setAttribute("src", videoSrc)
})
botaoFecharModal.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src","");
})
