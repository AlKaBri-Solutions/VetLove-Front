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


document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("filtro");
  const filas = document.querySelectorAll("#tabla-mascotas-body tbody tr");

  input.addEventListener("input", function() {
      const filtro = input.value.toLowerCase();
      filas.forEach(function(fila) {
          const textoFila = fila.textContent.toLowerCase();
          if (textoFila.includes(filtro)) {
              fila.style.display = "";
          } else {
              fila.style.display = "none";
          }
      });
  });
})

document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("filtro-cli");
  const filas = document.querySelectorAll("#tabla-mascotas-body tbody tr");

  input.addEventListener("input", function() {
      const filtro = input.value.toLowerCase();
      filas.forEach(function(fila) {
          const textoFila = fila.textContent.toLowerCase();
          if (textoFila.includes(filtro)) {
              fila.style.display = "";
          } else {
              fila.style.display = "none";
          }
      });
  });
})
  
  