$(document).ready(function(){

	$("#container-velocidad .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');
		
		if( $.isNumeric(value)){
			if(inputId == 'kmh'){
				$("#ms").val(value*0.2777778);
				$("#nudos").val(value*0.5399568);
			}
			else if(inputId == 'ms'){
				$("#kmh").val(value*3.6);
				$("#nudos").val(value*1.943844);
			}
			else if(inputId == 'nudos'){
				$("#kmh").val(value*1.852);
				$("#ms").val(value*0.5144444);
			}
		}
	});
});