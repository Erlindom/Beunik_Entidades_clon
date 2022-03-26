// Efecto nav

const nav = document.querySelector(".navegacion");
const menu_btn = document.querySelector(".hamburger");


window.addEventListener("scroll", function(){
    nav.classList.toggle("scroll_nav", window.scrollY > 0);
})

menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    nav.classList.toggle("is-active");
})

document.querySelectorAll(".nav_links, .logo").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    nav.classList.remove("is-active");
}))
