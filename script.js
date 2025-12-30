

function mesNumeroPalabra(numero) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[numero - 1];
}   



// fecha de inicio: 11 abril de 2026 a mediodía
// fecha final: 11 abril 2030 a mediodía
const fechaInicio = new Date(2026, 3, 11, 12, 0, 0);
const fechaFinal = new Date(2030, 3, 11, 12, 0, 0);

let fechaActual = new Date();

let previaQuedan = document.getElementById("previaQuedan");
let inicio = document.getElementById("inicio");
let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let fin = document.getElementById("fin");


if (fechaActual < fechaInicio) {

    const diferenciaHoyInicio = Math.abs(fechaInicio - fechaActual);
    const diferenciaDiasHoyInicio = Math.floor(diferenciaHoyInicio / (1000 * 60 * 60 * 24));

    previaQuedan.innerHTML = "quedan " + diferenciaDiasHoyInicio + " días"
    inicio.innerHTML = "para que sea " + fechaInicio.getDate() + " de " + mesNumeroPalabra(fechaInicio.getMonth() + 1) + " de " + fechaInicio.getFullYear();
}
else {

}

const diferenciaFecha = Math.abs(fechaFinal - fechaInicio);

// 1000 ms * 60 s * 60 m * 24 h
const diferenciaDias = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));

dias.innerHTML = "luego quedan " + String(diferenciaDias) + " días";

fin.innerHTML = "para que sea " + fechaFinal.getDate() + " de " + mesNumeroPalabra(fechaFinal.getMonth() + 1) + " de " + fechaFinal.getFullYear();



