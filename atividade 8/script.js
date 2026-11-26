let QNTsorte = 0
let QNTazar = 0
function sorteouazar() {
    let minimo = 1;
    let maximo = 100;
    let dif = maximo - minimo;
    let aleatorio = Math.random();
    let num = minimo + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado')
    
    
    if(num > 50){
        QNTsorte++;
        mostrar.innerHTML = `<p>Sorte: ${QNTsorte}</p><p>Azar: ${QNTazar}<p></p><img src="https://static.wikia.nocookie.net/superpoderes/images/d/df/Trevo_de_quatro_folhas.png/revision/latest?cb=20170421190651&path-prefix=pt-br">`;
    }else{
        QNTazar++;
        mostrar.innerHTML = `<p>Sorte: ${QNTsorte}</p><p>Azar: ${QNTazar}<p></p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SM6FCGCqC04MaDDZjOsVIfN83fcZMDqfRyPZeNUC0A&s=10">`;
    }
}
