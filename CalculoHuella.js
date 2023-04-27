// Obtener el formulario y los elementos que se utilizarán
var formulario = document.getElementById('formulario');
var opciones = document.getElementsByName('opciones');
var opciones1 = document.getElementsByName('opciones1');

var opciones2 = document.getElementsByName('opciones2');
var opciones3 = document.getElementsByName('opciones3');
var opciones4 = document.getElementsByName('opciones4');
var opciones5 = document.getElementsByName('opciones5');
var opciones6 = document.getElementsByName('opciones6');
var opciones7 = document.getElementsByName('opciones7');
var opciones8 = document.getElementsByName('opciones8');
var opciones9 = document.getElementsByName('opciones9');
var opciones10 = document.getElementsByName('opciones10');
var opciones11 = document.getElementsByName('opciones11');
var opciones12 = document.getElementsByName('opciones12');
var opciones13 = document.getElementsByName('opciones13');
var opciones14 = document.getElementsByName('opciones14');
var opciones15 = document.getElementsByName('opciones15');
var opciones16 = document.getElementsByName('opciones16');
var opciones17 = document.getElementsByName('opciones17');
var opciones18 = document.getElementsByName('opciones18');
var opciones19 = document.getElementsByName('opciones19');
var opciones20 = document.getElementsByName('opciones20');
var opciones21 = document.getElementsByName('opciones21');
var opciones22 = document.getElementsByName('opciones22');
var opciones23 = document.getElementsByName('opciones23');
var opciones24 = document.getElementsByName('opciones24');
var opciones25 = document.getElementsByName('opciones25');
var opciones26 = document.getElementsByName('opciones26');
var opciones27 = document.getElementsByName('opciones27');
var opciones28 = document.getElementsByName('opciones28');
var opciones29 = document.getElementsByName('opciones29');

var total = document.getElementById('total');
var promedio = document.getElementById('promedio');

function mostrarsuma(){
	var suma = 0;
	for (var i = 0; i < opciones.length; i++) {
		if (opciones[i].checked) {
			suma += parseFloat(opciones[i].value);
		}
	}
	for(var j=0;j<opciones1.length;j++){
		if(opciones1[j].checked){
			suma+=parseFloat(opciones1[j].value);
		}
	}

    
	for(var i=0;i<opciones2.length;i++){
		if(opciones2[i].checked){
			suma+=parseFloat(opciones2[i].value);
		}
	}


	for(var i=0;i<opciones3.length;i++){
		if(opciones3[i].checked){
			suma+=parseFloat(opciones3[i].value);
		}
	}


    for(var i=0;i<opciones4.length;i++){
		if(opciones4[i].checked){
			suma+=parseFloat(opciones4[i].value);
		}
	}
    

    for(var i=0;i<opciones5.length;i++){
		if(opciones5[i].checked){
			suma+=parseFloat(opciones5[i].value);
		}
	}


    for(var i=0;i<opciones6.length;i++){
		if(opciones6[i].checked){
			suma+=parseFloat(opciones6[i].value);
		}
	}


    for(var i=0;i<opciones7.length;i++){
		if(opciones7[i].checked){
			suma+=parseFloat(opciones7[i].value);
		}
	}


    for(var i=0;i<opciones8.length;i++){
		if(opciones8[i].checked){
			suma+=parseFloat(opciones8[i].value);
		}
	}


    for(var i=0;i<opciones9.length;i++){
		if(opciones9[i].checked){
			suma+=parseFloat(opciones9[i].value);
		}
	}
    
    for(var i=0;i<opciones10.length;i++){
		if(opciones10[i].checked){
			suma+=parseFloat(opciones10[i].value);
		}
	}

    for(var i=0;i<opciones11.length;i++){
		if(opciones11[i].checked){
			suma+=parseFloat(opciones11[i].value);
		}
	}


    for(var i=0;i<opciones12.length;i++){
		if(opciones12[i].checked){
			suma+=parseFloat(opciones12[i].value);
		}
	}

    for(var i=0;i<opciones13.length;i++){
		if(opciones13[i].checked){
			suma+=parseFloat(opciones13[i].value);
		}
	}


    for(var i=0;i<opciones14.length;i++){
		if(opciones14[i].checked){
			suma+=parseFloat(opciones14[i].value);
		}
	}


    for(var i=0;i<opciones15.length;i++){
		if(opciones15[i].checked){
			suma+=parseFloat(opciones15[i].value);
		}
	}


    for(var i=0;i<opciones16.length;i++){
		if(opciones16[i].checked){
			suma+=parseFloat(opciones16[i].value);
		}
	}


    for(var i=0;i<opciones17.length;i++){
		if(opciones17[i].checked){
			suma+=parseFloat(opciones17[i].value);
		}
	}


    for(var i=0;i<opciones18.length;i++){
		if(opciones18[i].checked){
			suma+=parseFloat(opciones18[i].value);
		}

	}

	for(var i=0;i<opciones19.length;i++){
		if(opciones19[i].checked){
			suma+=parseFloat(opciones19[i].value);
		}

		for(var i=0;i<opciones20.length;i++){
			if(opciones20[i].checked){
				suma+=parseFloat(opciones20[i].value);
			}
			for(var i=0;i<opciones21.length;i++){
				if(opciones21[i].checked){
					suma+=parseFloat(opciones21[i].value);
				}
		
			}
			for(var i=0;i<opciones22.length;i++){
				if(opciones22[i].checked){
					suma+=parseFloat(opciones22[i].value);
				}
		
			}
			for(var i=0;i<opciones23.length;i++){
				if(opciones23[i].checked){
					suma+=parseFloat(opciones23[i].value);
				}
		
			}
			for(var i=0;i<opciones24.length;i++){
				if(opciones24[i].checked){
					suma+=parseFloat(opciones24[i].value);
				}
		
			}
			for(var i=0;i<opciones25.length;i++){
				if(opciones25[i].checked){
					suma+=parseFloat(opciones25[i].value);
				}
		
			}
			for(var i=0;i<opciones26.length;i++){
				if(opciones26[i].checked){
					suma+=parseFloat(opciones26[i].value);
				}
		
			}
			for(var i=0;i<opciones27.length;i++){
				if(opciones27[i].checked){
					suma+=parseFloat(opciones27[i].value);
				}
		
			}
			for(var i=0;i<opciones28.length;i++){
				if(opciones28[i].checked){
					suma+=parseFloat(opciones28[i].value);
				}
		
			}
			for(var i=0;i<opciones29.length;i++){
				if(opciones29[i].checked){
					suma+=parseFloat(opciones29[i].value);
				}
		
			}
	
		}

	}
	
	// Mostrar la suma en el campo de resultado
	total_value = suma.toFixed(6);

	// Calcular el promedio y mostrarlo
	var promedioValor = total_value /22;
    promedio_value = promedioValor.toFixed(6);


    alert("La suma es"+total_value);
    alert("La huella ecologica es es"+promedio_value);
	if(total_value<=1.6 )
	{
		alert("¡¡Bien hecho!! Si obtuviste menos de 1.6 hectáreas vives dentro de los límites naturales del planeta: ¡eres un ejemplo a seguir"+totalvalue);
	}
	else{
		console.log("Si obtuviste una Huella Ecológica mayor a 1.8 hectáreas, significa que tu estilo de vida es completamente insostenible. Si todo el mundo consumiera los mismos recursos que consumes tú, sería necesario otro planeta Tierra que nos apoye para mantener a toda la población.");
	}
	

	}

