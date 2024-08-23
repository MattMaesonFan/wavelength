const CONCEPTOS_IZQ = ["Seco","80's","Algo normal de poseer","Ético para comer","No esencial","Bueno para ti","Nadie lo hace","Bodrio"];
const CONCEPTOS_DER = ["Mojado","90's","Algo raro de poseer","Poco ético para comer","Esencial","Malo para ti","Todo el mundo lo ahce","Obra maestra"];
const MAX_RULER_VALUE = 31






// Función que se ejecuta cuando se hace clic en el botón
function iniciarRonda() {
    const tarjetaIzq = document.getElementById('tarjetaIzq');
    const tarjetaDer = document.getElementById('tarjetaDer');
    const goalValueElement = document.getElementById('valorRonda');
    const botonHide = document.getElementById('botonHide');
    const textInput = document.getElementById('campoTexto');
    const sendButton = document.getElementById('botonCambiarTitulo');

    var indexTheme = getRandomThemeIndex();

    tarjetaIzq.textContent = CONCEPTOS_IZQ[indexTheme];
    tarjetaDer.textContent = CONCEPTOS_DER[indexTheme];

    var goal = getRandomRulerValue();

    goalValueElement.textContent = goal.toString();

    // Mostrar las opciones de ronda ocultas cambiando el estilo 'display'
    goalValueElement.style.display = 'block';

    // Mostrar las tarjetas cambiando el estilo 'display'
    tarjetaIzq.style.display = 'block';
    tarjetaDer.style.display = 'block';

    // Mostrar text input y boton de enviar cambiando el estilo 'display'
    textInput.style.display = 'block';
    sendButton.style.display = 'block';
}

function getRandomThemeIndex(){
    return Math.floor(Math.random() * CONCEPTOS_IZQ.length);
}

function getRandomRulerValue(){
    var rulerValue = Math.floor(Math.random() * MAX_RULER_VALUE);
    console.log("EL VALOR DE LA RONDA ES: "+rulerValue.toString());
    return rulerValue;
}

// Función que esconde todo para empezar a jugar
function hide() {
    const goalValueElement = document.getElementById('valorRonda');
    const nuevoTitulo = document.getElementById('campoTexto');
    const enviarPistaElement = document.getElementById('botonCambiarTitulo');
    goalValueElement.style.display = 'none';
    nuevoTitulo.style.display = 'none';
    enviarPistaElement.style.display = 'none';
}

// Función que cambia el título encima de la regla
function cambiarTitulo() {
    const nuevoTitulo = document.getElementById('campoTexto').value;
    const tituloRegla = document.getElementById('tituloRegla');
    tituloRegla.textContent = nuevoTitulo;
    tituloRegla.style.display = 'block';
    hide();
}

// Asocia la función al evento de clic del botón
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('botonRonda');
    boton.addEventListener('click', iniciarRonda);

    const botonCambiarTitulo = document.getElementById('botonCambiarTitulo');
    botonCambiarTitulo.addEventListener('click', cambiarTitulo);
});