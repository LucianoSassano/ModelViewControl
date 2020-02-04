import Modelo from "./modelo.js";
import Controlador from "./controlador.js"

const modelo = new Modelo();
const controlador = new Controlador(modelo);

  document.addEventListener("DOMContentLoaded", function () {
    cargarArrayAsistentes(controlador.obtenerAsistentes());
    document.getElementById("formulario").addEventListener("submit", agregarRegistro);
  } );
  
  function agregarRegistro( evento ) {
      evento.preventDefault();
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var edad = document.getElementById("edad").value;
      var persona = [ nombre, email, edad ];
      cargarRegistroTabla(persona);
      evento.target.reset();
  }
  
  
  function cargarArrayAsistentes(asistentes) {
    asistentes.forEach(cargarRegistroTabla);
  }
  
  function cargarRegistroTabla(persona) {
    let attr = ""
    let tabla;
    if (persona[2] > 13 ) {
      tabla = document.getElementById("tabla1").lastElementChild;
      attr = "background-color: red; color: white;"
    } else {
      tabla = document.getElementById("tabla2").lastElementChild;;
      attr = "background-color: pink;"
    }
    
    var fila = document.createElement("tr");
    persona.forEach(function (campo) {
      var celda = document.createElement("td");
      celda.textContent = campo;
      celda.setAttribute("style", attr)
      fila.appendChild(celda);    
    })
  
    tabla.appendChild(fila);
  
  }