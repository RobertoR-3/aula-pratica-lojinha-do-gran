var qtd =[0,0,0];//quantidade de cada peroduto//
var valorProduto =[45.00,39.90,49.90];//valor unitário de cada produto//
var ValorTotal =[0,0,0];//valor total de cada produto//

function adicionarItem (item) {
    var quantidade= document.getElementById("quantidade"+ item);
    qtd[item] = qtd[item]+1;//calculo que adiciona +1 a quantidade//
    quantidade.innerHTML = qtd[item];//exibe o valor da quantidade an tela//

    var total = dcoument.getElementById ("total" + item);
    valorTotal[item] = Number,parseFloat( valorProduto[item])* qtd[item];//multp o valor unitario pela qtd//
    total.innerHTML= ValorTotal[item].toFixed(2); //exibe o valor do produto na tela//

    valorCompra();
}
function removerItem(item){
    if(qtd[item]>0){
        var quantidade= document.getElementById("quantidade"+ item);
        qtd[item] = qtd[item]-1;//retira um item//
        quantidade.innerHTML = qtd[item];//exibe o valor da qtd na tela//

        var total = dcoument.getElementById ("total" + item);
        valorTotal[item] = Number,parseFloat( valorProduto[item])* qtd[item];//multp o valor unitario pela qtd//
        total.innerHTML= ValorTotal[item].toFixed(2); //exibe o valor do produto na tela//

        valorCompra();
    }



}
function valorCompra(){
    var ValorTotalCompra = Document.getElementById('ValorTotalCompra');
    var valor =0;
    for(var i=0; i<valorTotal.lenght; i++){
        valor +=valorTotal[i];
    }
    ValorTotalCompra.innerHTML =valor.toFixed(2);
}
