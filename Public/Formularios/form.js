setInterval(actualizar,1000);   

   
//Fecha de turnos

var btnCerrarForm;
var actualizado;
var formularioCierre;
var servicioElegido;
var mitadForm2;
var datosForm;
var fechaForm;
let dateButton;
let contenedorCalendario;
let calendario;
let fechaSelecta;
let formulario;
let btnTurnos;
let itemsForm;
let dataTurno;
let divDate;
let validacion;
let diaOcupado;

function actualizar(){

 btnCerrarForm = document.getElementById("cerrar-form");
 formularioCierre = document.querySelector("#contenedor-formulario");
 servicioElegido = document.querySelector("#servicio-elegido");
 espacioServicio = document.querySelector("#espacio-servicio");
 mitadForm2 = document.querySelector("#mitad-form-2");
fechaSelecta = document.querySelector("#fechaSelecta");
calendario = document.querySelector("#calendario");
formulario = document.querySelector("#form-turnos");
btnTurnos = document.querySelector("#envia-datos");
divDate = document.querySelector("#date");

 if (btnCerrarForm != null && btnCerrarForm != undefined){

fechaForm = document.querySelector("#fecha-form");
   
 btnCerrarForm.addEventListener('click', cerrar); 

dateButton = document.querySelector("#date");

dateButton.addEventListener('click', defineCalendario);

contenedorCalendario = document.querySelector('#contenedor-calendario');


 if (espacioServicio.innerHTML != servicioElegido.value){

 espacioServicio.innerHTML = servicioElegido.value;

 let servicioFinal = servicioElegido.value;

 if (servicioFinal == 'Yoga'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form1.png)";

 }else if (servicioFinal == 'Reiki Usui'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form2.png)";

 }else if (servicioFinal == 'Karuna Reiki'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form2.png)";

 }else if (servicioFinal == 'Tarot'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form5.png)";
 
 }else if (servicioFinal == 'Cuencos Tibetanos'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form3.png)";
 
 }else if (servicioFinal == 'Reeducacion Grafica'){

    mitadForm2.style.backgroundImage = "url(../Formularios/img-form/img-form4.png)";
   
 }

}
}
if (btnTurnos != null && btnTurnos != undefined){

   btnTurnos.addEventListener('click', recopilarYEnviar);

}

}

//FUNCIONES DE OPERACION DEL FORMULARIO


//CIERRE DEL FORM
function cerrar(){
    
    formularioCierre.style.display = 'none';
}


//FUNCIONES DEL CALENDARIO

function defineCalendario(){

if (calendario == undefined || calendario == null){

traeCalendario();   

inicioCalendario();


}else{

   offOnCalendario();

}    


}

function traeCalendario(){

   calendario = new XMLHttpRequest();
   calendario.open('GET', '../Pages/Servidor.php?calendario=1');
   calendario.setRequestHeader('content-type', 'application/X-WWW-form-urlencoded');
   calendario.onload = function (){

     contenedorCalendario.innerHTML = calendario.responseText;
   }
calendario.send();

contenedorCalendario.style.display = 'flex';
}

function offOnCalendario(){

if (contenedorCalendario.style.display === 'flex'){

   contenedorCalendario.style.display = 'none';
}else{

   contenedorCalendario.style.display = 'flex';
   

}
}


function recopilarYEnviar(e){

e.preventDefault();

let f = new FormData(formulario);

 dataTurno = [nombre = f.get('Nombre'), apellido = f.get('Apellido') , dni = f.get('Dni') , email = f.get('Email'), celular = f.get('Celular'), servicio = f.get('Servicio'), fecha = fechaSelecta.innerHTML, hora = f.get('Hora')];


 enviarForm(dataTurno);
}

function validarFormulario(){



}

function enviarForm(x){
 

var enviar = new XMLHttpRequest();
    enviar.open('GET', `Servidor.php?Registrar=1&Nombre=${x[0]}&Apellido=${x[1]}&Dni=${x[2]}&Email=${x[3]}&Celular=${x[4]}&Servicio=${x[5]}&Fecha=${x[6]}&Hora=${x[7]}`);
    enviar.setRequestHeader('content-type', 'application/X-WWW-form-urlencoded');
    enviar.onload = function (){

   console.log(enviar.responseText);

}

enviar.send();

}


function comprobarDias(x){

diaSelecto = document.querySelectorAll('.dias');

   var enviar = new XMLHttpRequest();
       enviar.open('GET', `Servidor.php?Comprobar=1&Fecha=${x}`);
       enviar.setRequestHeader('content-type', 'application/X-WWW-form-urlencoded');
       enviar.onreadystatechange = function (){
   
if (this.responseText.length != 0 && this.responseText != undefined){


diaOcupado = enviar.responseText.substr(8,2);

console.log(enviar.responseText);
console.log(diaOcupado);

setTimeout(tacharDias(diaOcupado),2000);

 function tacharDias(x){


   for (i=0; i < diaSelecto.length; i++){

     
        if (diaSelecto[i].innerHTML == diaOcupado){
      
            diaSelecto[i].style.color = 'red';
    
            
         console.log(diaSelecto[i]);

      }


}

 }
 
  

}

   
 }
   
   enviar.send();

}