console.log(document.querySelector(".botao-trailer"));

//constantes
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const videoSrc = video.src;

// ()=>{} == Criar função (de forma resumida)
// function nomeFuncao(){} == criar função

// toggle = se definido como false, o token será removido 
// ex: const nome = "joao";
// nome.classList.toggle("joao")
// a joao já existe? sim, então o toggle irá o remover, 
//caso não houvesse "joao", o toggle adicionaria; 
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
