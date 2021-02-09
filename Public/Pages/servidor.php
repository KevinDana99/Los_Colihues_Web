<?php

//dameCalendario

if (isset($_GET['calendario'])){

require ('../CalendarioWebbers/calendar.html');
    
}

//Registra turnos

if (isset($_GET['Registrar'])){

    require ("Modulos/Conexion.php");
  
    require ("Modulos/Turnos.php");
    
    $t = new Turno();
    
    $t->registrar_turno();

}

//comprueba turnos

if (isset($_GET['Comprobar'])){

    require ("Modulos/Conexion.php");
  
    require ("Modulos/Turnos.php");
    
    $tu = new Turno();
    
    $tu->comprobar_turno($tu->fecha);

}


?>