(function(){
    
    // Porpiedades de parallax

var propParallax = {
    
    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null
    
}



// Métodos de parallax


var metParallax = {
    
    
    inicio: function(){
        
        window.addEventListener('scroll', metParallax.scrollParallax);
        
    },
    
    scrollParallax: function(){
    
        propParallax.recorrido = window.pageYOffset;
    
        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

        if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){
            
            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
            
        }else{
            
            propParallax.seccion.style.backgroundY = 0;
            
            
        }
        
            
        
    }
    
}

metParallax.inicio();
    
}())