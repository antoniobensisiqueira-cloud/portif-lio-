let QNTsorte = 0
let QNTazar = 0
function sorteouazar() {
    let minimo = 1;
    let maximo = 100;
    let dif = maximo - minimo;
    let aleatorio = Math.random();
    let num = minimo + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('mostrar')
    
    

    if(num > 50){
        QNTsorte++;
        mostrar.innerHTML = `<p>Sorte: ${QNTsorte}</p><p>Azar: ${QNTazar}</p><img src="https://www.google.com/imgres?q=sorte&imgurl=https%3A%2F%2Fimg.magnific.com%2Fvetores-gratis%2Fclover-do-dia-de-sao-patricio_24911-115871.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.magnific.com%2Fbr%2Ffotos-vetores-gratis%2Fsimbolo-da-sorte&docid=v9Y3mxY7rxswbM&tbnid=ghnirfoRpg89qM&vet=12ahUKEwiywo2bvqWYAxWKqZUCHR5PDDQQnPAOegUIqAIQAA..i&w=740&h=740&hcb=2&ved=2ahUKEwiywo2bvqWYAxWKqZUCHR5PDDQQnPAOegUIqAIQAA" height=100 widith=100>`;
    }else{
        QNTazar++;
        mostrar.innerHTML = `<p>Sorte: ${QNTsorte}</p><p>Azar: ${QNTazar}</p><img src="https://www.google.com/imgres?q=dado%20de%2020%20mostrando%20resultado%201&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F60%2F6f%2F12%2F606f12df92ae5c6d5735c4de0cf248fa.jpg&imgrefurl=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F15833036183983359%2F&docid=g7nBYSNVyc-pQM&tbnid=LQqiOnj9fIuKRM&vet=12ahUKEwjckOjGvqWYAxUfpZUCHZsOM5YQnPAOegQIOBAA..i&w=735&h=830&hcb=2&ved=2ahUKEwjckOjGvqWYAxUfpZUCHZsOM5YQnPAOegQIOBAA" height=100 widith=100>`;
    }
}

function FundoAudio(){

}