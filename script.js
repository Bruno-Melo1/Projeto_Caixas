const caixas = document.querySelectorAll('.box')

// Criar Caixa

function criarCaixa(){
    let divBox = document.createElement('div')
    divBox.innerText = 'Interaja...'
    divBox.style.transition = '0.7s'
    divBox.classList.add('box')
    divBox.classList.add('container')
    adicionarEventoCaixa(divBox)
    return divBox
}

// Botão Adicionar

const addBox = document.querySelector('#add-box')
addBox.addEventListener('click', () => {
    let boxes = document.querySelector('#boxes')
    let box = criarCaixa()
    boxes.appendChild(box)
})

// Eventos das caixas

const adicionarEventoCaixa = ((caixa) => {
    caixa.addEventListener('mouseenter', (event) =>{
        // 1- Quando o mouse entrar,
        // o texto deve mudar para 'Entrou!'
        // e a caixa deve ser verde
        let box = event.target
        box.innerText = 'Entrou!'
        box.style.color = 'white'
        box.style.backgroundColor = 'black'
    })
    caixa.addEventListener('mouseleave', (event) =>{
        // 2- Quando o mouse sair,
        // o texto deve mudar para 'saiu!'
        // e a caixa deve ser azul
        let box = event.target
        box.innerText = 'Saiu!'
        box.style.color = 'black'
        box.style.backgroundColor = 'Aqua'
    })
    caixa.addEventListener('click', (event) =>{
        // 3. Quando clicarem uma vez, o texto deve mudar para 
        // "Clicou!" e mudar a cor para roxo
        let box = event.target
        box.innerText = 'Clicou!'
        box.style.color = 'white'
        box.style.backgroundColor = 'green'
    })
    caixa.addEventListener('dblclick', (event) =>{
        // 4. Quando clicarem duas vezes,
        //a caixa deve voltar para o modelo inicial.
        let box = event.target
        box.innerText = 'Interaja...'
        box.style.color = 'black'
        box.style.backgroundColor = 'white'
    })
})
caixas.forEach(adicionarEventoCaixa)