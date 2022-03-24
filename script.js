function criarProduto(arrayProdutos){
    const lista = document.querySelector('.lista-de-produtos')
    lista.innerHTML = ''
    for (let i = 0; i < arrayProdutos.length; i++){
        const li = document.createElement('li')
        li.classList.add('item')
        li.id = `${arrayProdutos[i].id}`
        
        const img = document.createElement('img')
        img.src = arrayProdutos[i].imagem

        const tag = document.createElement('span')
        tag.innerText = arrayProdutos[i].tag

        const titulo = document.createElement('h3')
        titulo.innerText = arrayProdutos[i].titulo

        const descricao = document.createElement('p')
        descricao.innerText = arrayProdutos[i].descricao
        descricao.classList.add('descricao')

        const preco = document.createElement('p')
        preco.innerText = arrayProdutos[i].preco
        preco.classList.add('preco')

        const adicionar = document.createElement('a')
        adicionar.innerText = 'adicionar ao carrinho'
        
        

        li.appendChild(img)
        li.appendChild(tag)
        li.appendChild(titulo)
        li.appendChild(descricao)
        li.appendChild(preco)
        li.appendChild(adicionar)

        lista.appendChild(li)
    }
}

criarProduto(data)

function filtrarProdutos(event){
    const newData = []
    const item = event.target
    const arrayItens = document.getElementsByClassName('item-nav')

    if(item.dataset.tag === 'Todos'){
        criarProduto(data)
    } else{
        for (let i = 0; i<data.length; i++){
            if(data[i].tag === item.dataset.tag){
                newData.push(data[i])
            }
        }
        criarProduto(newData)
    }

    for (let i = 0; i < arrayItens.length; i++){
        arrayItens[i].classList.remove('ativo')
    }
    item.classList.add('ativo')
}

const listaItens = document.getElementById('listNav')
listaItens.addEventListener('click', filtrarProdutos)

function encontrarProduto(){
    const inputValor = document.getElementById('inputBusca')
    const newData = []

    for (let i = 0; i<data.length; i++){
        if(data[i].tag.toLowerCase() == inputValor.value.toLowerCase() || data[i].titulo.toLowerCase() == inputValor.value.toLowerCase()){
            newData.push(data[i])
        }
    }

    criarProduto(newData)
}

const botaoBusca = document.getElementById('botaoBusca')
botaoBusca.addEventListener('click', encontrarProduto)