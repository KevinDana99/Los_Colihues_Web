
//main

let main = document.querySelector('.fa-bars');
let menu = document.querySelector('#menu');
let boxMain = document.querySelector('#box-main');
let mainInter;
  main.addEventListener('click', mostrarMenu);



function mostrarMenu(){

if (menu.style.visibility === 'hidden'){

  dameMain();

  menu.style.visibility = 'visible';
  menu.style.transform = 'translateX(0%)';
  menu.style.transition = 'ease 300ms';

}else{
 
  menu.style.transform = 'translateX(100%)';
  menu.style.visibility = 'hidden'; 
  menu.style.transition = 'ease 300ms';
}



}

function dameMain(){

  boxMain.innerHTML = '<i class="fas fa-bars" id="mainInter"></i>';
  mainInter = document.querySelector('#mainInter');
   mainInter.addEventListener('click', mostrarMenu);
}

//portada

let portada = document.querySelector("#box-slider");
var c = 1;



setInterval(cambiaImagen,10000);

function cambiaImagen(){


if (c < 5){


 

  c++;
    

}else{

  c = 1;

}
    

portada.style.backgroundImage = 'url(../Img/portada' + c + '.png)';


}

let btnActivo = document.querySelector("#btn-activado");

btnActivo.style.backgroundColor = "white";
btnActivo.style.color = "#FFBD72";


let btnTurno = document.querySelectorAll(".btn-turno");
let espacioForm = document.querySelector('#espacio-form');

for (s=0;s<btnTurno.length;s++){

btnTurno[s].addEventListener('click', dameForm);


}


function dameForm(){

let form = new XMLHttpRequest();
    form.open("GET", "../Formularios/registra-turno.html");
    form.setRequestHeader("content-type", "application/X-WWW-form-urlencoded");
    form.onload = function (){

    espacioForm.innerHTML = form.responseText;

    actualizar();
   
  }

  form.send();  


}
