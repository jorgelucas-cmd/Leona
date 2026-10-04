const inicio = document.querySelector('#inicio')
const valores = document.querySelector('#valores')
const servicos = document.querySelector('#servicos')
const funcionamento = document.querySelector('#funcionamento')
const paginageral = document.querySelector('.start-image')

function menuInicio() {
   paginageral.innerHTML = `
    <div class="start-image">
    <img class="lion" src="img/logo-leoa.png" alt="Imagem 1">
    <img class="agency" src="img/agencia-leoa.png" alt="Imagem 3">
    <img class="woman" src="img/moça-leoa.png" alt="Imagem 2">
    </div>
    `
}
function menuValores() {`

    <div class="start-image">
    <img class="lion" src="img/logo-leoa.png" alt="Imagem 1">
    <img class="agency" src="img/agencia-leoa.png" alt="Imagem 3">
    <img class="woman" src="img/moça-leoa.png" alt="Imagem 2">
    </div>
    `
}

inicio.addEventListener('click', menuInicio);