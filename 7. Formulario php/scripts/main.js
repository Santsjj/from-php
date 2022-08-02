'use strict';
//Se pueden crear contenedores, se guardan datos
/* 
1. Var = global
2. Let = local
3. const = constantes
*/

const btnValidar= document.getElementById('validar');
//console.log(btnValidar);
//al addEventListener 2 parametros
btnValidar.addEventListener('click', function(e) {

    e.preventDefault();
    let form = document.getElementById("dataform");
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
});
