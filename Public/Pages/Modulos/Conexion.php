<?php

class Conexion{

protected $host;
protected $db;
protected $user;
protected $pass;

function Conexion(){

$this->host = 'localhost';
$this->db = 'los_colihues';
$this->user = 'root';
$this->pass = '';

}

}