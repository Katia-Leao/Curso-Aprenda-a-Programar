var numero = 27;
var primo = `Sim, o número ${numero} é primo`

if(numero == 1){
    primo = `Não, o número ${numero} não é primo`
}else if (numero == 2){
    primo = `Sim, o número ${numero} é primo`
}else {for (var i = 2; i < numero; i++){
   // console.log(`${numero} % ${i} = ${numero % i}`)
      if (numero % i === 0){
        primo = `o número ${numero} não é primo`
    }}} console.log (primo)