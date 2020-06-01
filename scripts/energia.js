$(document).ready(function(){
	$("#container-energia .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');
		
		if( $.isNumeric(value)){

			if(inputId == 'eV'){
				$("#kcal").val(value*0.00000000000000000000003829294);
				$("#cal").val(value*0.00000000000000000003829294);
				$("#kWh").val(value*0.000000000000000000000000044504);
				$("#Wh").val(value*0.0000000000000000000000445049);
			}
			else if(inputId == 'kcal'){
				$("#eV").val(value*26114480000000000000000);
				$("#cal").val(value*1000);
				$("#kWh").val(value*0.001162222);
				$("#Wh").val(value*1.162222);
			}
			else if(inputId == 'cal'){
				$("#eV").val(value*26114480000000000000);
				$("#kcal").val(value*0.001);
				$("#kWh").val(value*0.000001162222);
				$("#Wh").val(value*0.001162222);
			}
			else if(inputId == 'kWh'){
				$("#eV").val(value*22469430000000000000000000);
				$("#kcal").val(value*860.4207);
				$("#cal").val(value*860420.7);
				$("#Wh").val(value*1000);
			}
			else if(inputId == 'Wh'){
				$("#eV").val(value*22469430000000000000000);
				$("#kcal").val(value*0.8604207);
				$("#cal").val(value*860.4207);
				$("#kWh").val(value*0.001);
			}


		}
	});
});