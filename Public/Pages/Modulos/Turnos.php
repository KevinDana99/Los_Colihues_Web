<?php

class Turno extends Conexion{

protected $nombre;
protected $apellido;
protected $dni;
protected $celular;
protected $email;
protected $servicios;
public $fecha;
protected $hora;
public $fecha_ocupada;

function Turno(){

if(isset($_GET['Nombre'])){$this->nombre = addslashes($_GET['Nombre']);}
if(isset($_GET['Apellido'])){$this->apellido = addslashes($_GET['Apellido']);}
if(isset($_GET['Dni'])){$this->dni = addslashes($_GET['Dni']);}
if(isset($_GET['Celular'])){$this->celular = addslashes($_GET['Celular']);}
if(isset($_GET['Email'])){$this->email = addslashes($_GET['Email']);}
if(isset($_GET['Servicio'])){$this->servicios = addslashes($_GET['Servicio']);}
if(isset($_GET['Hora'])){$this->hora= addslashes($_GET['Hora']);}
if(isset($_GET['Fecha'])){$this->fecha = addslashes($_GET['Fecha']);

$date = date_create($this->fecha);
$this->fecha = date_format($date,"Y/m/d");

}

}


function comprobar_turno($x){

$c = new Conexion();

$conexion = mysqli_connect($c->host,$c->user,$c->pass,$c->db);    
$sql = "SELECT Fecha FROM Turnos WHERE Fecha = '$x'";
$res = mysqli_query($conexion,$sql);
$encontrados = mysqli_affected_rows($conexion);


if ($encontrados == 0){


}else{

if ($encontrados == 10){

for ($i=0; $i < $fila=mysqli_fetch_row($res); $i++){


$this->fecha_ocupada = $fila[0]; 

}

echo $this->fecha_ocupada;
            
}

}
}

function registrar_turno(){

$c = new Conexion();

$conexion = mysqli_connect($c->host,$c->user,$c->pass,$c->db);    
$sql = "INSERT INTO turnos (Nombre,Apellido,Celular,Dni,Email,Servicios,Fecha,Hora) VALUES ('$this->nombre','$this->apellido',$this->celular,$this->dni,'$this->email','$this->servicios','$this->fecha','$this->hora')";
$res = mysqli_query($conexion,$sql);

}

}

?>