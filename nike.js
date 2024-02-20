// selecionando o elemento do carrossel
const carousel = document.querySelector(".carousel");
// selecionando os botões de progresso
const btnsProgress = document.querySelectorAll(".shoes-wrapper i");
// obtendo a largura do slide
const slideWidth = carousel.querySelector(".slide").offsetWidth;

// iterando sobre cada botão de progresso
btnsProgress.forEach(btn => {
    // adicionando um evento de clique a cada botão
    btn.addEventListener("click", () => {
        // deslocando o carrossel para a esquerda ou direita com base no botão clicado
        carousel.scrollLeft += btn.id === "nike-left" ? -slideWidth : slideWidth;
    })
})
