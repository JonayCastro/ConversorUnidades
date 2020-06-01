$(document).ready(function(){

	$("#container-trigonometricas .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');
		
		if( $.isNumeric(value)){
			if(inputId == 'diametro'){
				$("#radio").val(value/2);
				$("#circunferencia").val(value*Math.PI);
			}
			else if(inputId == 'radio'){
				$("#diametro").val(value*2);
				$("#circunferencia").val((value*2)*Math.PI);
			}
			else if(inputId == 'circunferencia'){
				$("#diametro").val(value/Math.PI);
				$("#radio").val((value/Math.PI)/2);
			}
		}
	});
});