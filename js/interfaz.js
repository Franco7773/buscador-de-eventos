class Interfaz {
  constructor() {
    this.init(); // Inicializa la APP al instanciar
    // Resultado de Eventos 
    this.resultado = document.getElementById('resultado-eventos');
  }
  init() {

    this.imprimirCategorias();
  }
  // Imprimir categorias
  imprimirCategorias() {

    let listaCategorias = Eventbrite.obtenerCategorias()
    .then(categorias => {
      
        let cats = categorias.categorias.categories;
        // Seleccionar el Select de categorias
        let selectCategoria = document.querySelector('#listado-categorias');
        // Recorremos el Array y luego impimimos los Options
        cats.forEach(cat => {
          
          let opcion = document.createElement('option');
          opcion.value = cat.id;
          opcion.appendChild(document.createTextNode(cat.name_localized));
          
          selectCategoria.appendChild(opcion);
        });
      });
  }
  // Lee la respuesta de la API e imprime los resultados
  mostrarEventos(eventos) {
    // Agregar los eventos a una variable
    let listaEventos = eventos.events;
    // Recorrer los eventos y crear su Template
    listaEventos.forEach(evento => {

      this.resultado.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-img">
              <img class="img-fluid mb-2" src="${evento.logo !== null? evento.logo.url : ''}" alt="${evento.name}"</img>
            </div>
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center">${evento.name.text}</h2>
                <p class="lead text-info">Información del evento</p>
                <p class="">${evento.description.text.substring(0, 270)}...</p>
                
                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  // Limpiar los resultados previos
  limpiarResultados() {

    this.resultado.innerHTML = '';
  }
  // Método para imprimir mensajes
  mostrarMensaje(msj, clases) {

    let div = document.createElement('div');
    div.classList = clases; // Agregar clases
    div.appendChild(document.createTextNode(msj)); // Agregar texto
    // Inyectar en un padre HTML
    document.getElementById('buscador').appendChild(div);
    this.limpiarMsj();
  }
  // Desaparece el msj en caso de que Exista
  limpiarMsj() {
    
    setTimeout(() => {

      document.querySelector('#buscador > .alert').remove();
    }, 3000);
  }
}
