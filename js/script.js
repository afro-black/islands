$(document).ready(function() {
	$('.uti-esconde').click(function(event) {
		/* Act on the event */
		$('.menu-utilizador').addClass('fechar');
		setTimeout(function() {$('.menu-utilizador').addClass('d-none');}, 50);
	});
		$('.uti-lateral').click(function(event) {
			$('.menu-utilizador').toggleClass('d-none');
			/* Act on the event */
			setTimeout(function() {
				$('.menu-utilizador').toggleClass('fechar').css({
				transition: 'transform 0.5s'
			});;
			}, 50);

		});
		$('.re-senha').click(function(event) {
			event.preventDefault();
			/* Act on the event */
			var form = $('.form-mail');
			$(form).addClass('card').removeClass('flipped').siblings().addClass('flipped').removeClass('card');
		});


		$('.v-login').click(function(event) {
			event.preventDefault();
			/* Act on the event */
			var form = $('.form-mail');
			$(form).toggleClass('flipped card').siblings().toggleClass('flipped card');
		});
	
		$('.dados > fieldset').click(function(event) {
			/* Act on the event */
			var clas = $(this).attr('class');
			var irmao = $(this).parent().siblings().attr('class');
			$(this).addClass('fieldsetIsAtive');
			$(this).siblings('fieldset').removeClass('fieldsetIsAtive');
			$('.'+irmao).find('.'+clas).removeClass('d-none');
			$('.'+irmao).find('.'+clas).siblings().addClass('d-none')

		});
		
		function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        	var consult =  $('.img img').hasClass('d-none')
        	$('.img img').removeClass('d-none').parent().addClass('d-none-a');
        	console.log(e.target.result);
            $('.img img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

		$('#file').on('change',function(event) {
			/* Act on the event */
			//$(this).val()
			 readURL(this);
		});


		$('.menu-latera a').click(function(event) {
			/* Act on the event */
			event.preventDefault();	

			var titulo = $(this).html();	
			$(this).parent().addClass('is-ative-menu-lateral').siblings().removeClass('is-ative-menu-lateral');
			
			$('.corpo-form .titulo h1').html(titulo);
			$('.corpo-form').addClass('is-ative-form');
		});
		$('.lista-regis > ul li').click(function(event) {
			/* Act on the event */
			$(this).addClass('is-ative-list-regis').siblings().removeClass('is-ative-list-regis');
			$('.corpo-dash .info').html('');
			var verificar = $('.corpo-dash .info').html();
			if (verificar === '') {
				boolean = true;
				}

		});	


		$('.menu-utilizador a').click(function(event) {
			/* Act on the event */
				event.preventDefault();
				$(this).parent().addClass('is-ative-menu-utili').siblings().removeClass('is-ative-menu-utili');
				var titulo = $(this).html();
				if (titulo === 'perfil') {
					$('head .alterar').attr('href', '../css/perfil.css');
					$('.principal .corpo-dash').remove();
						$(' .contiudo').load('../dashbord/pagina/'+titulo+'.php');
						$('.menu-latera,.lista-regis').hide();
				}else if (titulo ==='home') {
					$('.menu-latera').show();
					$('head .alterar').attr('href','../css/dashbord.css');
					$('.principal .contiudoPerfil').remove();
					$(' .contiudo').load('../dashbord/componente/corpo-index.php');
				}

				
		});		

			$('.contiudo ').on('click', '.tabs ul li', function(event) {
				var tabsAtive = $(this).attr('value');
			$(this).parents('.contiudoPerfil').find('section'+'.'+tabsAtive).removeClass('d-none').siblings('section').addClass('d-none');
			$(this).addClass('tabs-click').siblings().removeClass('tabs-click')

			});
					$('.close-cf').click(function(event) {
			/* Act on the event */		

			$(this).parent().removeClass('is-ative-form');
			$('.menu-latera a').parent().removeClass('is-ative-menu-lateral');
		});

	$('.f-m div').click(function(event) {
		/* Act on the event */
			var ative =$(this).hasClass('ative'); 
			if (ative==false) {
				$(this).parent().find('div.ative').removeClass('ative').addClass('inative');
				$(this).removeClass('inative').addClass('ative');
				
			}
				
	});
	inputClick.input('.input > input','inputFocus','inputErro');
	inputClick.input('.input-l > input','inputFocus-l','inputErro-l');
	
	$('.selecionado').click(function(event) {
		/* Act on the event */
		var selec = $(this);
		var selec_item = $(this).siblings('.item-select');
		var item = $(this).siblings('.item-select li');
		selec_item.show();

		$(selec_item).mouseleave(function(event) {
		/* Stuff to do when the mouse leaves the element */
		$(this).hide();
		});
	});

		$('.item-select li').click(function(event) {
		/* Act on the event */
		var valor = $(this).text();
		var parent = $(this).parents('ul');
		parent.hide();
		parent.siblings('.selecionado').html(valor)

		});




$('.fa-bars').click(function(event) {
	/* Act on the event */
	$(this).parent().toggleClass('menu-l-is-ative menu-l-hide')
	if ($(this).parent().hasClass('menu-l-hide')) {
		$('.menu-l-hide h1 , .menu-l-hide ul a').html('');
	}else{

	}	

});


$('.dados-info fieldset').click(function(event) {
	/* Act on the event */
		$('.corpoModal').removeClass('d-none');
		$('.alert footer .alterar').click(function(event) {
			/* Act on the event */
			var parent = $(this).parent().parent();
			parent.addClass('d-none');
			parent.siblings().removeClass('d-none');
			
		});
		$('.fecharModal').click(function(event) {
			/* Act on the event */console
			var parent = $(this).parent().parent();
			console.log(parent);
			if (parent.hasClass('alert')) {
				var parent = $(this).parents('.corpoModal');
					parent.addClass('d-none');
			} else {
				var parent = $(this).parent().parent();
				parent.addClass('d-none');
				parent.parent().addClass('d-none');
				parent.siblings().removeClass('d-none');
				
			}
			//
			
		});
});


$('.cancel-regis').click(function(event) {
	/* Act on the event */
		event.preventDefault();
		$(this).parents('.form-registo').toggleClass('flipped-2');
		console.log($(this).parents('.form-mail'));

});
$('.login-regis').click(function(event) {
	/* Act on the event */
		event.preventDefault();
	console.log(12);

	$(this).parents('.login-form').siblings('.form-registo').toggleClass('flipped-2');
});

});







