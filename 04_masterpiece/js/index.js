// Crear una clase que cargue una imágen y que se muestre en la página.

const rutaImagen = "./images/ciberpunk-pixel.jpg";

class Imagen {
  _ruta;

  constructor(ruta) {
    this._ruta = ruta;
  }

  cargarImagen() {
    const img = document.createElement("img");
    img.src = this._ruta;
    document.body.appendChild(img);
  }
}

const imagen = new Imagen(rutaImagen);
imagen.cargarImagen();
