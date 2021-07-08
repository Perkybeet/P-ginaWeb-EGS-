

(function(){
    
    // Propiedades del Lightbox
var propLightbox = {

	imgContainer: document.getElementsByClassName('lightbox'),
	imagen: null,
	imagenSrc: null,
	cuerpoDom: document.getElementsByTagName('body')[0],
	lightbox_container: null,
	imagenAmp: null,
	cerrarimagenAmp: null,
	animacion: 'fade'

}

// Métodos del Lightbox
var metLightbox = {

	inicio: function(){

		for (var i = 0; i < propLightbox.imgContainer.length; i++) {
			propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
		}
	},

	capturaImagen: function(){

		propLightbox.imagen = this;
		metLightbox.lightbox(propLightbox.imagen);

	},

	lightbox: function(imagen){

		propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
		propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
		propLightbox.lightbox_container = document.getElementById('lightbox_container');

		propLightbox.lightbox_container.style.width = '100%';
		propLightbox.lightbox_container.style.height = '100%';
		propLightbox.lightbox_container.style.position = 'fixed';
		propLightbox.lightbox_container.style.zIndex = '1000';
		propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
		propLightbox.lightbox_container.style.top = '0';
		propLightbox.lightbox_container.style.left = '0';

		propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'imagenAmp');
		propLightbox.imagenAmp = document.getElementById('imagenAmp');

		propLightbox.imagenAmp.style.height = '100%';
		propLightbox.imagenAmp.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
		propLightbox.imagenAmp.getElementsByTagName('img')[0].setAttribute('class', 'imagen-imagenAmp');

		if (propLightbox.animacion == 'fade') {
			document.getElementsByClassName('imagen-imagenAmp')[0].style.opacity = 0;

			setTimeout(function () {
				document.getElementsByClassName('imagen-imagenAmp')[0].style.opacity = 1;
			}, 50);
		}

		propLightbox.imagenAmp.innerHTML += '<i id="cerrar_imagenAmp" class="fa fa-times" aria-hidden="true"></i>';
		propLightbox.cerrarimagenAmp = document.getElementById('cerrar_imagenAmp');
		propLightbox.cerrarimagenAmp.addEventListener('click', metLightbox.cerrarimagenAmp);

	},

	cerrarimagenAmp: function(){
		propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
	}

}

metLightbox.inicio();


    
}())

