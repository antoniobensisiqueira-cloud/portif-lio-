 let  numero
 let resultado
function parouimpar(){
      numero = Number(prompt("informe um numero: "));
    
      resultado = numero % 2;
      
      if(resultado == 0){
        alert(" O número " + numero + " é par.");
      }else{
        alert("O número " + numero + " é ímpar");
      }
    
}