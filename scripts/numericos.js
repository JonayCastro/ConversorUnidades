$(document).ready(function(){
	$("#container-numericos .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');

		if(value != ''){
			if(inputId == 'decimal'){
				$("#binario").val(Number(value).toString(2));
				$("#octal").val(Number(value).toString(8));
				$("#hex").val(Number(value).toString(16));
			}
			else if(inputId == 'binario'){

				if(/^[0-1]+$/.test(value)){
					$("#decimal").val(parseInt(value, 2));
					$("#octal").val(parseInt(value, 2).toString(8));
					$("#hex").val(parseInt(value, 2).toString(16));
				}else{
					alert("Solo valores 0 y 1");
					$("#binario").val('');
				}
				
			}
			else if(inputId == 'octal'){
				if(/^[0-7]+$/.test(value)){
					$("#decimal").val(parseInt(value, 8));
					$("#binario").val(parseInt(value, 8).toString(2));
					$("#hex").val(parseInt(value, 8).toString(16));
				}else{
					alert("Solo valores entre 0 y 7");
					$("#octal").val('');
				}
				
			}
			else if(inputId == 'hex'){
				if(/^[0-9A-F]+$/.test(value)){
					$("#decimal").val(parseInt(value, 16));
					$("#binario").val(parseInt(value, 16).toString(2));
					$("#octal").val(parseInt(value, 16).toString(8));
				}else{
					alert("Solo valores de A a F y de 0 a 9");
					$("#hex").val('');
				}
				
			}
		}
		
		
		
	});
});