function crearArt(nombreArt,img){

  var articulos = document.getElementById('articulos');
  var articulo = document.createElement('article');
  var titulo = document.createElement('h2');
  var imagen = document.createElement('img');
  var linea = document.createElement("hr");

  titulo.innerText=nombreArt;
  imagen.src=img;
  imagen.setAttribute('width','100%');

  articulo.appendChild(titulo);
  articulo.appendChild(imagen);
  articulos.appendChild(articulo);
  articulos.appendChild(linea);
}

function accionBoton(){

  var titulo = document.getElementById('titulo').value;
  var imagen = document.getElementById('imagen').files[0];

  var reader  = new FileReader();
  reader.onloadend = function () {
    var imagenUrl = reader.result;
    crearArt(titulo,imagenUrl);
  }

  reader.readAsDataURL(imagen);

}



/*
  var parrafo = document.createElement('p'); // este es para crear un elemento de tipo p
  var elemento = ...;
  var parrafo = ...;
  elemento.appendChild(parrafo); // y esto es para agregar un "parrafo" en elemento.

  elemento.innerText = "mi texto"; //cambia el texto dentro del elemento por "mi texto";

  ________________________________

  Crear un elemento article.
  Crear un elemento h1
  crear un elemento img
  crear un elemento p

  meter el h1,img,p dentro de article

  meter article, dentro de articulos
*/
