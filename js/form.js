var botaoAdicionar = document.querySelector("#adicionar-item");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var item = form.nome.value;
    var quantidade = form.quantidade.value;
    var precoUnitario = form.precoUnitario.value;
    
    var itemTr = document.createElement("tr");
    itemTr.classList.add("item");
    var nomeTd = document.createElement("td");
    var quantidadeTd = document.createElement("td");
    var precoUnitarioTd = document.createElement("td");  
    precoUnitarioTd.classList.add("info-preco-unitario")  
    var totalItemTd = document.createElement("td");
    totalItemTd.classList.add("info-total-item");

    nomeTd.textContent = item;
    quantidadeTd.textContent = quantidade;
    precoUnitarioTd.textContent = precoUnitario;
    totalItemTd.textContent = calculaTotalItem(quantidade, precoUnitario);

    itemTr.appendChild(nomeTd);
    itemTr.appendChild(quantidadeTd);
    itemTr.appendChild(precoUnitarioTd);
    itemTr.appendChild(totalItemTd);

    var tabela = document.querySelector("#tabela-compras");

    tabela.appendChild(itemTr);
    somaLista();
});
