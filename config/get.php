<?php
function getHome(){
	$url = $_GET['url'];

	$url = explode('/', $url);
	$url[0] = ($url[0] == NULL ? 'index' : $url[0]);
		if(file_exists('../dashbord/'.$url[0].'.php') and $url[0] =='index'){
			 require_once('../dashbord/pagina/'.$url[0].'.php');
		}else{
			 require_once('../dashbord/pagina/404.php');
		}
}


function setHeader(){
	require_once('../dashbord/componente/header.php');	
}

function setMenuLateral(){
	require_once('../dashbord/componente/menu-lateral.php');	
}


function setHome(){
	require_once('../dashbord/componente/corpo-index.php');
}
function setmenuUser(){
	require_once('../dashbord/componente/menu-user.php');
}
function setRegisto(){
	require_once('../dashbord/componente/lista-regis.php');
}
?>   