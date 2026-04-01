

function mesNumeroPalabra(numero) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[numero];
}   



// fecha de inicio: 11 abril de 2026 a mediodía
// fecha final: 11 abril 2030 a mediodía
const fechaInicio = new Date(2026, 2, 11, 11, 0, 0);
const fechaFinal = new Date(2030, 2, 11, 11, 0, 0);

let fechaActual = new Date();

let previaQuedan = document.getElementById("previaQuedan");
let inicio = document.getElementById("inicio");
let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let fin = document.getElementById("fin");


// cuando no ha llegado la fecha de inicio
// mostrar cuánto falta para que llegue la fecha de inicio
if (fechaActual < fechaInicio) {

    const diferenciaHoyInicio = Math.abs(fechaInicio - fechaActual);
    const diferenciaDiasHoyInicio = Math.floor(diferenciaHoyInicio / (1000 * 60 * 60 * 24));

    if (diferenciaDiasHoyInicio > 1) {
       previaQuedan.innerHTML = "quedan " + diferenciaDiasHoyInicio + " días"
    } else {
        previaQuedan.innerHTML = "queda " + diferenciaDiasHoyInicio + " día"
    }

    
    inicio.innerHTML = "para que sea " + fechaInicio.getDate() + " de " + mesNumeroPalabra(fechaInicio.getMonth()) + " de " + fechaInicio.getFullYear();
}
// si ya pasamos la fecha de inicio
// mostrar cuántos días han pasado desde la fecha de inicio
else {

    // calcular la diferencia y redondear hacia arriba
    const diasDesde = Math.ceil(Math.abs(fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));
    console.log(diasDesde);

    if (diasDesde == 1) {
        previaQuedan.innerHTML = "ha pasado " + diasDesde + " día desde";
    }
    else {
        previaQuedan.innerHTML = "han pasado " + diasDesde + " días desde";
    }

    inicio.innerHTML = fechaInicio.getDate() + " " + mesNumeroPalabra(fechaInicio.getMonth()) + " " + fechaInicio.getFullYear();



}

const diferenciaFecha = Math.abs(fechaFinal - fechaActual);

// 1000 ms * 60 s * 60 m * 24 h
const diferenciaDias = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));

dias.innerHTML = "quedan " + String(diferenciaDias) + " días para";

fin.innerHTML = fechaFinal.getDate() + " " + mesNumeroPalabra(fechaFinal.getMonth()) + " " + fechaFinal.getFullYear();



