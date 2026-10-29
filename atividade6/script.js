function site(){
 let nome;
 let mostrar;

 nome = prompt("qual é o meu nome")
 mostrar = document.getElementById('mostrar');

mostrar.innerHTML = `<p>Ola,<mark>${nome}</mark> seja bem vindo</p>`;
}