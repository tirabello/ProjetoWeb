console.log('Calcular orçamento');

// Manipulação do DOM
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#js').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_nao').addEventListener("change", atualizarOrcamento)
document.querySelector('#ambos').addEventListener("change", atualizarOrcamento)
document.querySelector('#prazo').addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let qtde = inputQtde.value 
    let preco = qtde * 130

    let js = document.querySelector('#js').checked
    if(js) preco *= 1.2

    let layout = document.querySelector("#ambos").checked
    if(layout) preco *= 1 + (qtde * .5)

    let prazo = document.querySelector("#prazo").value
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)` //template litereal
    let taxaDeUrgencia = 2 - (prazo * .01);
    preco *= taxaDeUrgencia

    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML = "R$ " + preco.toFixed(2)
    console.log(js)
}

//cada disco *150