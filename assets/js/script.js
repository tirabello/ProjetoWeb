console.log('Calcular orçamento');

//Manipulação do DOM (document object movel)
var inputQtde = document.querySelector('#qtde')
//query selector busca o documento.
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#js').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_nao').addEventListener("change", atualizarOrcamento)
document.querySelector('#prazo').addEventListener("change", atualizarOrcamento)


function atualizarOrcamento(){
    let qtde = inputQtde.value
    let preco = qtde * 100

    let js = document.querySelector('#js').checked
    if(js == true){
        preco *= 1.1
    }
    let layout = document.querySelector('#layout_sim').checked
    if(layout) preco *= 1 + (qtde *.1)

    let prazo = document.querySelector('#prazo').value
    let labelPrazo = document.querySelector('#label[for=prazo]')
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)` //template literal
    
    let taxaDeUrgencia = 1 - (prazo *.01)
    preco *= taxaDeUrgencia
    
    let output = document.querySelector('#secao-planos form output')
    output.innerHTML = "R$" + preco.toFixed(2)
    console.log(js);
}

// qtde * 100
// 10% se tiver JS
// 10% por pagina de layout
// prazo + 20% por semana
//Let escopo local / var escopo global
