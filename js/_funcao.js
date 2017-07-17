
var inputClick = function(){
	var _inputNormal = function(clas,isfocus,erro){
		$(clas).focus(function(){
		$(this).addClass(isfocus);
	}).blur(function(event) {
		/* Act on the event */
		$(this).removeClass(isfocus);
		var input = $(this).val();
		if (input =='') {

			$(this).addClass(erro);	
		}else{
			$(this).removeClass(erro);		
		}
	});;				
	}
	return{
		input:_inputNormal	
	};
}();

