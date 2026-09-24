let nota1tri;
let nota2tri;
let resultado;

function calcular(){
 nota1tri = Number( prompt("digite a nota do primeiro trimestre"));
nota2tri = Number( prompt("digite a nota do segundo trimestre"));

resultado = 180 - (nota1tri + nota2tri);

if(resultado <= 0){
    alert("parabéns você esta aprovado.");
    
}else{
    alert("você ainda precisa" + resultado + "no terceiro tirimestre");
}

}