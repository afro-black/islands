<?php 
	require_once '../config/get.php';
	require_once '../config/get.php';
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Island Tur | Unica</title>
	 <link rel="stylesheet" href="../css/css.css">
	  <link class="alterar" rel="stylesheet" href="../css/perfil.css">
	 <link class="alterar" rel="stylesheet" href="../css/dashbord.css">
	<link  rel="stylesheet" href="../css/font-awesome.min.css">
	<script  src="../js/jquery-3.1.1.min.js" charset="utf-8"></script>
	<script src="../js/_funcao.js" charset="utf-8" ></script>
	<script src="../js/script.js" charset="utf-8" ></script>

<body>
	<?php getHome() ?>
	<section class="corpoLoad d-none">
			<span class="loader load-double"></span>
		aguarde
	</section>
		<section class="corpoModal d-none">
		<div class="alert">
				<section >
					<i class="fa fa-exclamation-triangle"></i>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dignissimos, asperiores. Mollitia dolores quas 
					</p>
				</section>
				<footer>
						<button class="btn-confirmar alterar">alterar</button>
						<button class="btn-cancel fecharModal">cancelar</button>
				</footer>
			</div>
			<div class="corpo-modal d-none">
				<header>Alterar contato</header>
				<section class="modal-dados">
					<div class="label-input input">
						<label>telemovel</label>
						<input type="text" >
					</div>
					<div class="label-input input">
						<label>telefone</label>
						<input type="text" >
					</div>
					<div class="label-input input">
						<label>e-mail*</label>
						<input type="text" >
					</div>
				</section>
				<footer>
						<button class="btn-registar">alterar</button>
						<button class="btn-cancel fecharModal">cancelar</button>
				</footer> 
			</div>

	</section>
	<div class="notification">
				<hgroup>
					<i class="fa fa-close"></i>
				</hgroup>
				<div class="noti-contiudo icon-info">
					<!-- icon de alert: icon-info, icon-alert -->
					<i class="fa"></i>

					<p>
					<span>titulo</span>
					Lorem ipsum dolor sit amet, consectetur
					</p>
				</div>
			</div>
</body>
</html>
