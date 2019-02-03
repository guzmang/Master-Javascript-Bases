'use strict'

// Bucle while

var year = 2018;

while(year <= 2050) {
	// ejecuta esto
	console.log("Estamos en el año: " + year);

	if(year == 2030) {
		break;	// salgo del bucle
	}

	year++;
}

// Do while

var years = 30;

do {
	alert("SOLO CUANDO SEA MAYOR A 25");
	years--;
} while(years > 25)