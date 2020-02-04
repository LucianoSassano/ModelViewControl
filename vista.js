import Controlador from "./controlador";

class Vista {
  constructor(controlador) {
      this.controlador = controlador;
  }
  init() {
    document.addEventListener("DOMContentLoaded", function() {
      this.render(this.controlador.obtenerAsistentes());
      document
        .getElementById("formulario")
        .addEventListener("submit", agregarRegistro);
    });
  }
  render(asistentes) {
    asistentes.forEach(persona) => {
        

    }
  }
  agregarRegistro(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var persona = [nombre, email, edad];
    controlador.agregar(persona);
    this.render(controlador.obtenerAsistentes());
    evento.target.reset();
  }
}

export default Vista