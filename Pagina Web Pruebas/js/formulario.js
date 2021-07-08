(function(){
    
    // Propiedades del formaulario

var propForm = {
    
    
    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textoError: null
    
}

// Métodos del formulario

var metForm = {
    
    inicio: function(){
        
        for (var i = 0; i < propForm.elementos.length; i++){
        
            if(propForm.elementos[i].name == 'nombre' || propForm.elementos[i].name == 'email' || propForm.elementos[i].name == 'mensaje'){

                propForm.elementos[i].addEventListener('focus', metForm.focusInput);
                propForm.elementos[i].addEventListener('blur', metForm.blurInput);

            }
        }
        
        propForm.formulario.addEventListener('submit', metForm.validarInput)
    },
    
    focusInput: function(){
    
    this.parentElement.children[1].className = 'label active'
    
    },

    blurInput: function(){
        
        if (this.value == ''){
        
        this.parentElement.children[1].className = 'label'
        
        }
    },
    
    validarInput: function(e){
        
        
         for (var i = 0; i < propForm.elementos.length; i++){
             
             if(propForm.elementos[i].value == ''){
                 
                 e.preventDefault();
                 
                 if (propForm.elementos[i].parentElement.children.length < 3){
                 
                 propForm.error = document.createElement('p');
                 propForm.textoError = document.createTextNode('Por favor, rellene el campo con su ' + propForm.elementos[i].name)
                 propForm.error.appendChild(propForm.textoError);
                 propForm.error.className = 'error';
                 
                 propForm.elementos[i].parentElement.appendChild(propForm.error)
                 
                 }else{
                     
                     if(propForm.elementos[i].parentElement.children.length >= 3){
                         
                         propForm.error = propForm.elementos[i].parentElement.getElementsByTagName('p')[0];
                         propForm.elementos[i].parentElement.removeChild(propForm.error);
                         
                     }
                     
                 }
                     
             }
             
         }
        
        
    }
      
}

metForm.inicio();
    
}())