// Función que se encarga de desplazar el scroll hasta la sección correspondiente
function friendlyScroll() {
    // Obtiene la parte del path de la URL (por ejemplo, "/planes")
    const path = window.location.pathname;
    // Si es raíz, se asume "inicio"; en caso contrario, se elimina la barra inicial
    const sectionId = path === "/" ? "inicio" : path.substring(1);
    
    console.log(sectionId);
    // Busca la sección con ese id
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Desplaza la vista hasta esa sección de forma suave
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  export default friendlyScroll;