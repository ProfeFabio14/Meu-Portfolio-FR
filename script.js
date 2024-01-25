let menuVisivel = false;

function mostrarOcultarMenu() {
    if (menuVisivel) {
        document.getElementById("navegação").classList = "";
        menuVisivel = false;
    } else {
        document.getElementById("navegação").classList = "responsive";
        menuVisivel = true;
    }
}

function selecione() {
    document.getElementById("navegação").classList = "";
    menuVisivel = false;
}

//Função que aplica animações de habilidades
function efeitoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javaScript");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("arduino");
        habilidades[5].classList.add("comunicação");
        habilidades[6].classList.add("trabalho-equipe");
        habilidades[7].classList.add("criatividade");
        habilidades[8].classList.add("dedicação");
        habilidades[9].classList.add("project-management");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efeitoHabilidades();
} 