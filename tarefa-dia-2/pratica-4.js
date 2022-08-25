var produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
var produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
var produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

var produtos = [produtoA, produtoB, produtoC]

for (var i = 0; i < produtos.length; i++){
    
  if(produtos[i].internacional == true){
    console.log(`o ${produtos[i].nome} é internacional e seu valor com imposto de 20% é R$` + produtos[i].valor * 1.2)
   } else {
    console.log(`o ${produtos[i].nome} é nacional e seu valor com imposto de 12% é R$` + produtos[i].valor * 1.12)}
}
