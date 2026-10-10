const inicio = document.querySelector('#inicio')
const valores = document.querySelector('#valores')
const servicos = document.querySelector('#servicos')
const funcionamento = document.querySelector('#funcionamento')
const paginageral = document.querySelector('.start-image')
const fundo = document.querySelector('.fundo')

function menuInicio() {
    fundo.style.backgroundImage = "url('./img/comeia.jpg')";
   paginageral.innerHTML = `
    <div class="start-image">
    <img class="lion" src="img/logo-leoa.png" alt="Imagem 1">
    <img class="agency" src="img/agencia-leoa.png" alt="Imagem 3">
    <img class="woman" src="img/moça-leoa.png" alt="Imagem 2">
    </div>
    `
}

function menuValores() {
    fundo.style.backgroundImage = "url('./img/fundo.azul.jpg')";

    paginageral.innerHTML = `<div class="valores-img">
    <img class="valores-tabela" src="./img/tabela-real.png" alt="Imagem 1">
    <img class="ganhos" src="./img/ganhos.jpeg" alt="Imagem 2">
    <img class="inforblu" src="./img/inforsblu.jpeg" all="tabelablu">
    </div>`
    
}
    
function menuServiços() {
    fundo.style.backgroundImage = "url('./img/gold.03.jpeg')";

    paginageral.innerHTML = `<div class="valores-img">
    <img class="gold-quem" src="./img/gold.quem.jpeg" all="tabelablu">
    </div>`
    


    
}

function menuRegras() {
    fundo.style.backgroundImage = "url('./img/fundo.vermelho.jpg')";
    paginageral.innerHTML = `<div class="start-image">
    <img class="regras" src="./img/regras.live.png" all="Regras">
    <img class="suporte" src="./img/precisa.de.ajuda.png" all="Regras">
    </div>`


}




inicio.addEventListener('click', menuInicio);
valores.addEventListener('click', menuValores);
servicos.addEventListener('click',menuServiços);
funcionamento.addEventListener('click',menuRegras)