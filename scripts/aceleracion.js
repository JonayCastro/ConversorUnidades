$(document).ready(function(){

	$("#container-aceleracion .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');
		
		if( $.isNumeric(value)){
			if(inputId == 'ms2'){
				$("#ps2").val(value*3.28084);
				$("#gravedad").val(value*0.101972);
				$("#gal").val(value*100);
			}
			else if(inputId == 'ps2'){
				$("#ms2").val(value*0.304800);
				$("#gravedad").val(value*0.0310810);
				$("#gal").val(value*30.4800);
			}
			else if(inputId == 'gravedad'){
				$("#ms2").val(value*9.80665);
				$("#ps2").val(value*32.1740);
				$("#gal").val(value*980.665);
			}
			else if(inputId == 'gal'){
				$("#ms2").val(value*0.01);
				$("#ps2").val(value*0.0328084);
				$("#gravedad").val(value*0.00011972);
			}
		}
	});
});