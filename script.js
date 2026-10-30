function mesNumeroPalabra(numero) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[numero];
}

// fecha de inicio: 11 marzo de 2026 a mediodía
// fecha final: 11 marzo 2030 a mediodía
const fechaInicio = new Date(2026, 2, 11, 12, 0, 0);
const fechaFinal = new Date(2030, 2, 11, 12, 0, 0);

let fechaActual = new Date();

let desde = document.getElementById("desde");

// mostrar cuántos días han pasado desde la fecha de inicio
// calcular la diferencia y redondear hacia arriba
const diasDesde = Math.ceil((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));

desde.innerHTML = "desde " + fechaInicio.getDate() + " " + mesNumeroPalabra(fechaInicio.getMonth()) + " " + fechaInicio.getFullYear()

if (diasDesde == 1) {
    hanPasado.innerHTML = "ha pasado " + diasDesde + " día";
}
else {
    hanPasado.innerHTML = "han pasado " + diasDesde + " días";
}

// sin Math.abs, para que sea negativa cuando ya pasó la fecha final
const diferenciaFecha = fechaFinal - fechaActual;

// 1000 ms * 60 s * 60 m * 24 h
const diferenciaDias = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));

hasta.innerHTML = "hasta " + fechaFinal.getDate() + " " + mesNumeroPalabra(fechaFinal.getMonth()) + " " + fechaFinal.getFullYear();

if (diferenciaFecha <= 0) {
    vanQuedando.innerHTML = "ya no queda nada";
} else if (diferenciaDias > 1) {
    vanQuedando.innerHTML = "quedan " + String(diferenciaDias) + " días";
} else if (diferenciaDias == 1) {
    vanQuedando.innerHTML = "queda " + String(diferenciaDias) + " día";
} else {
    vanQuedando.innerHTML = "queda menos de un día";
}
