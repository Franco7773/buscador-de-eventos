// Instanciar ambas clases
const Eventbrite = new EventBrite(),
      Ui = new Interfaz();

// Escuchas buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();
  // Leer el texto del input buscar
  let textoBuscador = document.getElementById('evento').value;
  // Leer erl valor del Select
  let categorias = document.getElementById('listado-categorias');
  let categoriaSelect = categorias.options[categorias.options.selectedIndex].value;
  // Revisar que el buscador no se encuentre vacio
  if (textoBuscador !== '') {
  // Cuando sí hay una busqueda
  Eventbrite.obtenerEventos(textoBuscador, categoriaSelect)
    .then(eventos => {
      if (eventos.eventos.events.length > 0) {
        // Si hay eventos, mostrar resultados
        Ui.limpiarResultados();
        Ui.mostrarEventos(eventos.eventos);
      } else {
        // Al no haber eventos, Enviar una alerta
        Ui.mostrarMensaje('¡No hay resultados!', 'alert alert-danger mt-4');
      } 
    })
  } else {
  // Mostrar mensaje para que imprima algo
    Ui.mostrarMensaje('¡Escribe algo en el buscador!', 'alert alert-danger mt-4');
  }
});
