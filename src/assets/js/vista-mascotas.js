let menuList = document.querySelectorAll('.menu-list li')
function activeLink(){
    menuList.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}

menuList.forEach((item) =>
item.addEventListener('click', activeLink));


function toggleSecciones(seccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
      seccion.classList.add('hidden');
    });

    // Mostrar solo la sección deseada
    var seccionAMostrar = document.getElementById(seccion);
    if (seccionAMostrar) {
      seccionAMostrar.classList.remove('hidden');
    }
}
  
  