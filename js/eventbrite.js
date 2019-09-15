class EventBrite {
  constructor() {

    this.token_auth = '56QQMITHJFJ4RMOYRU4D';
    this.ordenar = 'date';
  }
  // Mostrar resultados de la busqueda
  async obtenerEventos(evento, categoria) {

    let respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`); 
    
    let eventos = await respuestaEvento.json(); // Esperar la respuesta del evento y devolverlo como JSON

    return {
      eventos
    };
  }
  // Obtiene las categorias en init()
  async obtenerCategorias() {
    // Consultar las categorias a la REST API de eventBrite
    let respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
    let categorias = await respuestaCategorias.json(); // Esperar la respuesta y devolver un JSON

    return {
      categorias
    };
  }
}
