//Armado del calendario
let parteInferior;
let cambioMes; 
let cambioAño; 
let opcionesMes;
let mes;
let año;
let mesOpcion;
let mesFinal;
let diaActual = new Date().getDate();
let mesActual = new Date().getMonth();
let añoActual = new Date().getFullYear();
let opcionesAño;
let añoOpcion;
let añoFinal;
let primerDia;
let dias; 
let diaSelecto;

setInterval(actualiza,1000);

function inicioCalendario(){

setTimeout(actualizaCalendario,1000);

}

function actualizaCalendario(){

parteInferior = document.querySelector("#parte-dias");

mesFinal = mesActual;
añoFinal = añoActual;

dias = diasEnUnMes(mesFinal,añoFinal);

var date = new Date(añoFinal, mesFinal, 1);

primerDia = date.getDay();

crearDias();

}



function actualiza(){

     parteInferior = document.querySelector("#parte-dias");
     opcionesMes = document.querySelector("#opciones-mes");
     mes = document.querySelector("#mes");
     año = document.querySelector("#año");
     mesOpcion = document.querySelectorAll(".mes-opcion");
     opcionesAño = document.querySelector("#opciones-año");
     añoOpcion = document.querySelectorAll(".año-opcion");
    
if (calendario !== null && calendario !== undefined){

    cambioMes = document.querySelector("#cambioMes");
     cambioAño = document.querySelector("#cambioAño");

    cambioMes.addEventListener('click', cambiarMes);
    cambioAño.addEventListener('click', cambiarAño);
  
   //DAR NUMERO DE DIAS ACTUAL
seleccionarDias();

}

}


function cambiarAño(){

    if (opcionesAño.style.display === 'flex'){

        opcionesAño.style.display = 'none';
    
    }else{
    
        opcionesAño.style.display = 'flex';
    
        
    for (a=0; a < añoOpcion.length; a++){
    
        añoOpcion[a].addEventListener('click',seleccionarAño);
       
       }
}


}

function seleccionarAño(e){

opcionesAño.style.display = 'none';

año.innerHTML = e.target.innerHTML;

añoFinal = parseInt(año.innerHTML);

}


function cambiarMes(){

if (opcionesMes.style.display === 'flex'){

    opcionesMes.style.display = 'none';

}else{

    opcionesMes.style.display = 'flex';

    
for (m=0; m < mesOpcion.length; m++){

    mesOpcion[m].addEventListener('click',seleccionarMes);
   
   }
}

}

function seleccionarMes(e){

opcionesMes.style.display = 'none';

mes.innerHTML = e.target.innerHTML;

numerarMes(e.target.innerHTML);
}

function numerarMes(m){

if (m == 'Enero'){

 mesFinal = 0;

}else if (m == 'Febrero'){

 mesFinal = 1;   

}else if (m == 'Marzo'){

    mesFinal = 2;   
}else if (m == 'Abril'){

    mesFinal = 3;   
   }else if (m == 'Mayo'){

    mesFinal = 4;   
   }else if (m == 'Junio'){

    mesFinal = 5;   
   }else if (m == 'Julio'){

    mesFinal = 6;   
   }else if (m == 'Agosto'){

    mesFinal = 7;   
   }else if (m == 'Septiembre'){

    mesFinal = 8;   
   }else if (m == 'Octubre'){

    mesFinal = 9;   
   }else if (m == 'Noviembre'){

    mesFinal = 10;   
   }else if (m == 'Diciembre'){

    mesFinal = 11;   
   }


dias = diasEnUnMes(mesFinal,añoFinal);
var date = new Date(añoFinal, mesFinal, 1);

   
primerDia = date.getDay();

crearDias();

}

function crearDias(){

//SE CREAN LOS DIAS

parteInferior.innerHTML = ' ';
    

for (i=0; i < primerDia; i++){

    var objeto2 = document.createElement('div');
        
        objeto2.setAttribute('class', 'dias-disabled');

        parteInferior.appendChild(objeto2);
            
    }
    

   for (c = 1 ; c < dias +1; c++){
           
    var objeto = document.createElement('div');


comprobarDias(c + '-' + (mesFinal+1) + '-' +añoFinal);       
            

if (diaActual == c && mesActual == mesActual){

    objeto.setAttribute('class', 'dias dia-hoy');

}else{

    objeto.setAttribute('class', 'dias');


}

    var textoObjeto = document.createTextNode(c);    
            
        objeto.appendChild(textoObjeto);
        parteInferior.appendChild(objeto);
            
    }
    
}


function seleccionarDias(){

 diaSelecto = document.querySelectorAll('.dias');   

   for (i=0; i <= diaSelecto.length; i++){
 
 if (diaSelecto[i] != undefined && diaSelecto[i] != null){

if (diaSelecto[i].style.color == 'red'){

    diaSelecto[i].addEventListener('click', noEnviarDia);

    function noEnviarDia(){

        console.log('no envio');

    }

}else{

    diaSelecto[i].addEventListener('click', enviarDia);

}

}
   
}

}





function enviarDia(e){


fechaSelecta.innerHTML = e.target.innerHTML + '-0' + (mesFinal +1) + '-' + añoFinal;
offOnCalendario();

}


function diasEnUnMes(mes, año) {

    return new Date(año, mes +1, 0).getDate();
    
}
