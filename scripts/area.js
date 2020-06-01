$(document).ready(function(){

	$("#container-area .unidad").keyup(function(){
		var value = $(this).val();
		var inputId = $(this).attr('id');
		if( $.isNumeric(value)){
			if(inputId == 'km2'){
				$("#hectareas").val(value*100);
				$("#m2").val(value*1000);
				$("#cm2").val(value*10000000);
				$("#mm2").val(value*1000000000000);
				$("#mi2").val(value*0.3861022);
				$("#acres").val(value*247.1054);
				$("#yd2").val(value*1195990);
				$("#ft2").val(value*10763910);
				$("#in2").val(value*1550003000);
			}
			
			else if(inputId == 'hectareas'){
				$("#km2").val(value*0.01);
				$("#m2").val(value*10000);
				$("#cm2").val(value*1000000000);
				$("#mm2").val(value*10000000000);
				$("#mi2").val(value*0.003861022);
				$("#acres").val(value*2.471054);
				$("#yd2").val(value*11959.9);
				$("#ft2").val(value*107639.1);
				$("#in2").val(value*15500030);
			}
			else if(inputId == 'm2'){
				$("#km2").val(value*0.000001);
				$("#hectareas").val(value*0.0001);
				$("#cm2").val(value*10000);
				$("#mm2").val(value*1000000);
				$("#mi2").val(value*0.0000003861022);
				$("#acres").val(value*0.0002471054);
				$("#yd2").val(value*1.19599);
				$("#ft2").val(value*10.76391);
				$("#in2").val(value*1550.003);
			}
			else if(inputId == 'cm2'){
				$("#km2").val(value*0.0000000001);
				$("#hectareas").val(value*0.00000001);
				$("#m2").val(value*0.0001);
				$("#mm2").val(value*100);
				$("#mi2").val(value*0.00000000003861022);
				$("#acres").val(value*0.00000002471054);
				$("#yd2").val(value*0.000119599);
				$("#ft2").val(value*0.001076391);
				$("#in2").val(value*0.1550003);
			}
			else if(inputId == 'mm2'){
				$("#km2").val(value*0.000000000001);
				$("#hectareas").val(value*0.0000000001);
				$("#m2").val(value*0.000001);
				$("#cm2").val(value*0.01);
				$("#mi2").val(value*0.0000000000003861022);
				$("#acres").val(value*0.0000000002471054);
				$("#yd2").val(value*0.00000119599);
				$("#ft2").val(value*0.00001076391);
				$("#in2").val(value*0.001550003);
			}
			else if(inputId == 'mi2'){
				$("#km2").val(value*2.589988);
				$("#hectareas").val(value*258.9988);
				$("#m2").val(value*2589988);
				$("#cm2").val(value*25899880000);
				$("#mm2").val(value*2589988000000);
				$("#acres").val(value*640);
				$("#yd2").val(value*3097600);
				$("#ft2").val(value*27878400);
				$("#in2").val(value*4014490000);
			}
			else if(inputId == 'acres'){
				$("#km2").val(value*0.004046856);
				$("#hectareas").val(value*0.4046856);
				$("#m2").val(value*4046856);
				$("#cm2").val(value*40468560);
				$("#mm2").val(value*4046856000);
				$("#mi2").val(value*0.0015625);
				$("#yd2").val(value*4840);
				$("#ft2").val(value*43560);
				$("#in2").val(value*6272640);
			}
			else if(inputId == 'yd2'){
				$("#km2").val(value*0.0000008361274);
				$("#hectareas").val(value*0.00008361274);
				$("#m2").val(value*0.8361274);
				$("#cm2").val(value*8361.274);
				$("#mm2").val(value*836127.4);
				$("#mi2").val(value*0.0000003228306);
				$("#acres").val(value*0.0002066116);
				$("#ft2").val(value*9);
				$("#in2").val(value*1296);
			}
			else if(inputId == 'ft2'){
				$("#km2").val(value*0.00000009290304);
				$("#hectareas").val(value*0.000009290304);
				$("#m2").val(value*0.09290304);
				$("#cm2").val(value*929.0304);
				$("#mm2").val(value*92903.04);
				$("#mi2").val(value*0.00000003587006);
				$("#acres").val(value*0.00002295684);
				$("#yd2").val(value*0.1111111);
				$("#in2").val(value*144);
			}
			else if(inputId == 'in2'){
				$("#km2").val(value*0.00000000064516);
				$("#hectareas").val(value*0.000000064516);
				$("#m2").val(value*0.00064516);
				$("#cm2").val(value*6.4516);
				$("#mm2").val(value*645.16);
				$("#mi2").val(value*0.0000000002490977);
				$("#acres").val(value*0.0000001594225);
				$("#yd2").val(value*0.0007716049);
				$("#ft2").val(value*0.006944444);
			}
		}
	});

});