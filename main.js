document.addEventListener("DOMContentLoaded", function(){

    let iconeNoite = document.getElementById("icone-lua");
    let iconeDia = document.getElementById("icone-sol");
    let pagina = document.querySelector("body");


    let ancorasHeader = document.querySelectorAll(".header_link_texto");
    let menuHeader = document.querySelector(".header_links");
    let menuHamburguer = document.querySelector(".menu_hamburguer");

    iconeNoite.addEventListener("click", function(){
        pagina.classList.add("dark-mode");

        ancorasHeader.forEach(link => {
            link.classList.add("dark-mode-fontes");
        })
    })

    iconeDia.addEventListener("click", function(){
        pagina.classList.remove("dark-mode");

        ancorasHeader.forEach(link => {
            link.classList.remove("dark-mode-fontes");
        } )
    })

    menuHamburguer.addEventListener("click", function(){
        menuHeader.classList.toggle("header_links_ativo");
    })



})




