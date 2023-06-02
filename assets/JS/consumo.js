// Função para atualizar o consumo total e a análise de consumo
function atualizarConsumo() {
    // Obtém todos os elementos com a classe "consumo-item"
    const consumoItems = document.getElementsByClassName("consumo-item");
    
    let consumoTotal = 0;

    // Itera sobre os elementos e soma seus valores ao consumo total
    for (let i = 0; i < consumoItems.length; i++) {
        const consumoItem = consumoItems[i];
        const valor = parseFloat(consumoItem.innerText);
        consumoTotal += valor;
    }

    // Atualiza o valor do consumo total
    const consumoTotalElement = document.getElementById("consumo-total");
    consumoTotalElement.innerText = consumoTotal.toFixed(2);

    // Realiza a análise de consumo
    const analiseConsumoElement = document.getElementById("analise-consumo");
    if (consumoTotal < 50) {
        analiseConsumoElement.innerText = "Baixo consumo";
    } else if (consumoTotal < 100) {
        analiseConsumoElement.innerText = "Consumo moderado";
    } else {
        analiseConsumoElement.innerText = "Alto consumo";
    }
}

// Chama a função de atualizar o consumo ao carregar a página
window.addEventListener("load", atualizarConsumo);
