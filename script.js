

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

// let previaQuedan = document.getElementById("previaQuedan");
let desde = document.getElementById("desde");
let inicio = document.getElementById("inicio");
let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let fin = document.getElementById("fin");


// cuando no ha llegado la fecha de inicio
// mostrar cuánto falta para que llegue la fecha de inicio
// codigo comentado en abril 2026 porque ya fue
// if (fechaActual < fechaInicio) {

//     const diferenciaHoyInicio = Math.abs(fechaInicio - fechaActual);
//     const diferenciaDiasHoyInicio = Math.floor(diferenciaHoyInicio / (1000 * 60 * 60 * 24));



//     if (diferenciaDiasHoyInicio > 1) {
//        desde.innerHTML = "quedan " + diferenciaDiasHoyInicio + " días"
//     } else {
//         desde.innerHTML = "queda " + diferenciaDiasHoyInicio + " día"
//     }

    
//     inicio.innerHTML = "para que sea " + fechaInicio.getDate() + " de " + mesNumeroPalabra(fechaInicio.getMonth()) + " de " + fechaInicio.getFullYear();
// }
// si ya pasamos la fecha de inicio
// mostrar cuántos días han pasado desde la fecha de inicio


// calcular la diferencia y redondear hacia arriba
const diasDesde = Math.ceil(Math.abs(fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));

desde.innerHTML = "desde " + fechaInicio.getDate() + " " + mesNumeroPalabra(fechaInicio.getMonth()) + " " + fechaInicio.getFullYear()

if (diasDesde == 1) {
    hanPasado.innerHTML = "ha pasado " + diasDesde + " día";
}
else {
    hanPasado.innerHTML = "han pasado " + diasDesde + " días";
}


const diferenciaFecha = Math.abs(fechaFinal - fechaActual);

// 1000 ms * 60 s * 60 m * 24 h
const diferenciaDias = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));

hasta.innerHTML = "hasta " + fechaFinal.getDate() + " " + mesNumeroPalabra(fechaFinal.getMonth()) + " " + fechaFinal.getFullYear();

if (diferenciaDias > 1) {
    vanQuedando.innerHTML = "quedan " + String(diferenciaDias) + " días";
} else {
    quedan.innerHTML = "queda " + String(diferenciaDias) + " día";
}


