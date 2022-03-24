const containerProd = document.getElementById('containerProdutos')
const prodCarrinho = []

if (prodCarrinho.length == 0){
    const listaDasCompras = document.querySelector('.adicionados')
    const h2 = document.createElement('h2')
    h2.innerText = 'Carrinho vazio'
    h2.classList.add('estilo1')
    const p = document.createElement('p')
    p.innerText = 'Adicione itens'
    p.classList.add('estilo2')

    listaDasCompras.appendChild(h2)
    listaDasCompras.appendChild(p)

}

function atualizarCarrinho(){
    const listaDasCompras = document.querySelector('.adicionados')
    
    if (prodCarrinho.length == 0){

    }else{
        listaDasCompras.innerHTML = ''
        for(let i = 0; i < prodCarrinho.length; i++){
            const itemdedentro = document.createElement('li')
            itemdedentro.classList.add('itemAdicionado')

            const img = document.createElement('img')
            img.src = prodCarrinho[i].imagem

            const divInfos = document.createElement('div')
            divInfos.classList.add('lado')

            const h3 = document.createElement('h3')
            h3.classList.add('lado')
            h3.innerText = prodCarrinho[i].titulo

            const span = document.createElement('span')
            span.classList.add('lado')
            span.innerText = prodCarrinho[i].preco

            const remover = document.createElement('a')
            remover.classList.add('lado')
            remover.innerText = 'remover produto'
            remover.style.fontWeight = 'bold'
            //remover.id = 'btnremover'
            remover.addEventListener('click', () => {
                listaDasCompras.removeChild(itemdedentro)
                //console.log(prodCarrinho[i].id)
                prodCarrinho.splice(
                    prodCarrinho.findIndex(
                        (produto) => produto.id === prodCarrinho[i].id),
                        1
                    )
            })
            

            divInfos.appendChild(h3)
            divInfos.appendChild(span)
            divInfos.appendChild(remover)

            itemdedentro.appendChild(img)
            itemdedentro.appendChild(divInfos)

            listaDasCompras.appendChild(itemdedentro)

        }


    }
    resumoDaCompra()
}

const resumo = document.createElement('div')
function resumoDaCompra(){
    //provavelmente aqui é pra ter uma innerhtml = ''    
    if (prodCarrinho.length !== 0){
        resumo.innerHTML = ''
        const carrinho = document.querySelector('.carrinho')
        resumo.classList.add('resumoDaCompra')

        const qtdDiv = document.createElement('div')
        qtdDiv.classList.add('infos')
        resumo.appendChild(qtdDiv)

        const qtdNome = document.createElement('span')
        qtdNome.classList.add('resumoNomes')
        qtdNome.innerText = 'Quantidade:'
        qtdDiv.appendChild(qtdNome)

        const qtdNum = document.createElement('p')
        qtdNum.classList.add('resumoNumeros')
        qtdNum.innerText = `${prodCarrinho.length}`
        qtdDiv.appendChild(qtdNum)

        const precoDiv = document.createElement('div')
        precoDiv.classList.add('infos')
        resumo.appendChild(precoDiv)

        const precoNome = document.createElement('span')
        precoNome.classList.add('resumoNomes')
        precoNome.innerText = 'Preço:'
        precoDiv.appendChild(precoNome)

        const precoNum = document.createElement('p')
        precoNum.classList.add('resumoNumeros')

            const arrayPrecos = []            
            for(let i = 0; i<prodCarrinho.length; i++){
            arrayPrecos.push(prodCarrinho[i].num)
            }
            const somaTotal = arrayPrecos.reduce((previousValue, currentValue) => previousValue + currentValue) 
            
        precoNum.innerText = `${'R$'+somaTotal+'.00'}`
        precoDiv.appendChild(precoNum)

        carrinho.appendChild(resumo)
    }
}


function pegarProd(id){
    data.forEach(item => {
        if (item.id == id){
            prodCarrinho.push(item)
        }
    })
    atualizarCarrinho()
}

function adcCarrinho(event){
    let click = event.target
    let card = click.closest('.item')
    
    if (click.innerHTML == 'adicionar ao carrinho'){
        pegarProd(card.id)
    }
    
}

containerProd.addEventListener('click', adcCarrinho)
