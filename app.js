// Header Navbar Mobile
import navbar from "./modules/navbar.js"
const btnMenu = document.querySelector("#btnMenu")
btnMenu.addEventListener('click', navbar)

// Optimización del evento scroll
import transparent from "./modules/scroll.js"
let isTicking = false;
window.addEventListener('scroll', () => { 
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            transparent();
            isTicking = false;
        });
        isTicking = true;
    }
});

/*

import friendlyScroll from "./modules/friendly.js"

  document.querySelectorAll("#main_nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const url = this.getAttribute("href");
      history.pushState(null, "", url);
      friendlyScroll();
    });
  });


  window.addEventListener("popstate", friendlyScroll);

  // Al cargar la página, desplaza el scroll a la sección indicada en la URL
  friendlyScroll();

  */

// Ejecutar al cargar para estado inicial
transparent();

// Cambiar las URLs de forma dinámica

document.querySelectorAll("[href^='https://somosnap.com']").forEach(link => {
    link.href = link.href.replace("https://somosnap.com", `${window.location.origin}`);
})

document.querySelectorAll("[src^='assets/']").forEach(img => {
    img.setAttribute("src", img.getAttribute("src").replace("assets/", `${window.location.origin}/assets/`));
})
document.querySelectorAll("[content^='assets/']").forEach(meta => {
    meta.setAttribute("content", meta.getAttribute("content").replace("assets/", `${window.location.origin}/assets/`));
})
document.querySelectorAll("[content^='https://somosnap.com']").forEach(meta => {
    meta.setAttribute("content", meta.getAttribute("content").replace("https://somosnap.com", `${window.location.origin}`));
})