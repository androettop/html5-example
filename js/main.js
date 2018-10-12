var listaArt = [];

function guardarArt(listaArt){
  var lista = JSON.stringify(listaArt);
  localStorage.setItem("listaDeArticulos",lista);
}

function addArticulo(listaArt,nomArt,imgArt){
  var art = {
    titulo: nomArt,
    imagen: imgArt
  }
  listaArt.push(art);
  guardarArt(listaArt);
}


function  elimArticulo(pos){
  delete listaArt[pos];
  listaArt = listaArt.filter(x => x != null); //solo deja en la lista todos los x, tal que x no sea nulo
  guardarArt(listaArt);
  var elemArticulo = document.getElementById(pos);
  elemArticulo.remove();
}

function cargarArt(){
  var datos = localStorage.getItem("listaDeArticulos");
  if (datos!=null) {
    listaArt =  JSON.parse(datos);
  } else {
      console.log("no tenes art cargados en, ehhh daa chau");
  }
}

function mostrarArt(nombreArt,img,i){

  var articulos = document.getElementById('articulos');
  var articulo = document.createElement('article');
  var titulo = document.createElement('h2');
  var imagen = document.createElement('img');
  var boton = document.createElement('button');

  boton.classList.add("degradado");
  titulo.innerText=nombreArt;
  imagen.src=img;
  boton.innerText="eliminar art";
  boton.onclick= function(){
      elimArticulo(i);
    }
  imagen.setAttribute('width','100%');
  articulo.id=i;
  articulo.appendChild(titulo);
  articulo.appendChild(imagen);
  articulo.appendChild(boton);
  articulos.prepend(articulo);
}


function mostrarListaDeArt(listaArt) {
  var i=0;
  if (listaArt.length>0) {
    while (i < listaArt.length) {
      mostrarArt(listaArt[i].titulo,listaArt[i].imagen,i);
      i++;
    }
  } else {
     console.log("no tenes art cargados");
  }
}

function accionBoton(){
  var elemTitulo = document.getElementById('titulo');
  var elemImg =document.getElementById('imagen');
  var titulo = elemTitulo.value;
  var imagen = elemImg.files[0];
  var elemFormulario = document.getElementById('formulario');
  var reader  = new FileReader();
  reader.onloadend = function () {
    var imagenUrl = reader.result;
    mostrarArt(titulo,imagenUrl,listaArt.length);
    addArticulo(listaArt,titulo,imagenUrl);
  }
  reader.readAsDataURL(imagen);
  elemFormulario.reset();
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
  ______________________________________








*/
