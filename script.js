


function irPara(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}




const entrada = document.getElementById("comando");
const saida = document.getElementById("saida");


const comandos = {

    ajuda:
    "COMANDOS: ajuda, sobre, projetos, doom, limpar, data",

    sobre:
    "Bem-vindo ao meu portfólio digital!",

    projetos:
    "8 projetos disponíveis. Acesse a seção MEUS PROJETOS.",

    doom:
    "Preparando DOOM.EXE... Use o botão INICIAR JOGO.",

    data:
    new Date().toLocaleString("pt-BR"),

    limpar:
    ""

};


entrada.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const comando = entrada.value.trim().toLowerCase();

        if (!comando) return;


        const linha = document.createElement("p");

        linha.textContent = "visitante@hell:~$ " + comando;

        saida.appendChild(linha);


        if (comando === "limpar") {

            saida.innerHTML = "";

        } else {

            const resposta = document.createElement("p");

            resposta.textContent =
                comandos[comando] || "COMANDO NÃO ENCONTRADO.";

            saida.appendChild(resposta);


            if (comando === "doom") {
                irPara("doom");
            }

            if (comando === "projetos") {
                irPara("projetos");
            }

            if (comando === "sobre") {
                irPara("sobre");
            }

        }


        entrada.value = "";

        saida.scrollTop = saida.scrollHeight;

    }

});




function iniciarDoom() {

    const tela = document.getElementById("telaJogo");
    const jogo = document.getElementById("jogo");

    tela.classList.add("ativa");

    if (!jogo.getAttribute("src")) {

        

        jogo.src = "https://www.retrogames.cz/play_414-DOS.php";

    }

    tela.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function fecharDoom() {

    const tela = document.getElementById("telaJogo");
    const jogo = document.getElementById("jogo");

    tela.classList.remove("ativa");

    jogo.src = "";

}
