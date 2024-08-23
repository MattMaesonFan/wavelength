const palabras = [
    ["Mojado", "Seco"],
    ["90's", "80's"],
    ["Algo raro de poseer", "Algo normal de poseer"],
    ["Poco ético para comer", "Ético para comer"],
    ["Esencial", "No esencial"],
    ["Malo para ti", "Bueno para ti"],
    ["Todo el mundo lo hace", "Nadie lo hace"],
    ["Obra Maestra", "Bodrio"],
    ["Picante", "Suave"],
    ["Efectivo", "Inefectivo"],
    ["Película alegre", "Película triste"],
    ["Sin talento", "Talentoso"],
    ["De nicho", "Mainstream"],
    ["Habilidad/Destreza", "Talento"],
    ["Va a vivir hasta 100 años", "No va a vivir hasta 100 años"],
    ["Sobrevalorado", "Infravalorado"],
    ["Actividades populares", "Actividades impopulares"],
    ["Insuficiente", "Demasiado"],
    ["Comida seca", "Comida húmeda"],
    ["Canción triste", "Alegre"],
    ["Difícil de recordar", "Fácil de recordar"],
    ["Liberal", "Conservador"],
    ["Débil", "Poderoso"],
    ["Peor persona viva", "Mejor persona viva"],
    ["De baja calidad", "De buena calidad"],
    ["Popular", "Impopular"],
    ["Efímero", "Longevo"],
    ["Religioso", "Sacrílego"],
    ["Persona inmadura", "Persona madura"],
    ["Mala inversión", "Buena inversión"],
    ["Peligroso", "Seguro"],
    ["Ético", "Poco ético"],
    ["Fantasía", "Ciencia Ficción"],
    ["Tranquilo", "Ruidoso"],
    ["Necesidad", "Deseo"],
    ["Buen ingrediente de pizza", "Mal ingrediente de pizza"],
    ["Opcional", "Obligatorio"],
    ["Es arte", "No es arte"],
    ["Barato", "Caro"],
    ["Da miedo", "Da risa"],
    ["Débil", "Fuerte"],
    ["Higiénico", "Antihigiénico"],
    ["Corto", "Largo"],
    ["Persona a la que podrías dar una paliza", "Persona que te podría dar una paliza"],
    ["Secreto", "De conocimiento público"],
    ["Básico", "Hipster"],
    ["Esperado", "Inesperado"],
    ["Reemplazable", "Irreemplazable"],
    ["Buen actor", "Mal actor"],
    ["Huele bien", "Huele mal"],
    ["Animal aterrador", "Animal bonito"],
    ["Con clase", "Ordinario"],
    ["Buena actriz", "Mala actriz"],
    ["Músico infravalorado", "Músico sobrevalorado"],
    ["Persona agradable", "Persona desagradable"],
    ["Normal", "Raro"],
    ["Para niños", "Para adultos"],
    ["Bueno", "Malvado"],
    ["Históricamente importante", "Históricamente irrelevante"],
    ["Deporte", "Juego"],
    ["Sabio", "Inteligente"],
    ["Película infravalorada", "Película sobrevalorada"],
    ["Placer culpable", "Abiertamente querido"],
    ["Similar", "Idéntico"],
    ["Cuadrado", "Redondo"],
    ["Tradicional", "Radical"],
    ["Desconocido", "Famoso"],
    ["Dictadura", "Democracia"],
    ["Fácil de hacer", "Difícil de hacer"],
    ["Parte del cuerpo útil", "Parte del cuerpo inútil"],
    ["Requiere suerte", "Requiere destreza"],
    ["Horizontal", "Vertical"],
    ["Copia", "Original"],
    ["Útil", "Inútil"],
    ["Modelo a seguir", "Mala influencia"],
    ["Digno de confianza", "Indigno de confianza"],
    ["Fácil de usar", "Difícil de usar"],
    ["Sucio", "Limpio"],
    ["Buen hombre", "Mal hombre"],
    ["Problema local", "Problema global"],
    ["Raro", "Común"],
    ["Buen personaje de Disney", "Mal personaje de Disney"],
    ["Frágil", "Resistente"],
    ["El lado oscuro de la Fuerza", "El lado luminoso de la Fuerza"],
    ["Bien diseñado", "Mal diseñado"],
    ["Se siente bien", "Se siente mal"],
    ["Casual", "Formal"],
    ["Ordinario", "Extraordinario"],
    ["Buena serie", "Mala serie"],
    ["Demasiado pequeño", "Demasiado grande"],
    ["Color poco sexy", "Color sexy"],
    ["Sexy", "No sexy"],
    ["Fácil de matar", "Difícil de matar"],
    ["Buena película", "Mala película"],
    ["Juego sobrevalorado", "Juego infravalorado"],
    ["Héroe", "Villano"],
    ["Bajas calorías", "Altas calorías"],
    ["Perdonable", "Imperdonable"],
    ["Fácil de sentarse encima", "Difícil de sentarse encima"],
    ["Introvertido", "Extrovertido"],
    ["Novedad", "Clásico"],
    ["Inclusivo", "Exclusivo"],
    ["Socialista", "Capitalista"],
    ["A la moda", "Fuera de moda"],
    ["Persona buena", "Persona mala"],
    ["Te beneficia a ti", "Beneficia a todo el mundo"],
    ["El libro fue mejor", "La película fue mejor"],
    ["Palabra fea", "Palabra bonita"],
    ["Libro sobrevalorado", "Libro infravalorado"],
    ["Inútil durante una emergencia", "Útil durante una emergencia"],
    ["Producido en masa", "Artesanal"],
    ["Lo peor", "Lo mejor"],
    ["Tema de conversación fascinante", "Tema de conversación aburrido"],
    ["Buen cómico", "Mal cómico"],
    ["Invento útil", "Invento inútil"],
    ["Flexible", "Inflexible"],
    ["Incoloro", "Colorido"],
    ["Bueno", "Malo"],
    ["Sabe bien", "Sabe mal"],
    ["Comedia", "Drama"],
    ["Querido", "Odiado"],
    ["Fácil de encontrar", "Difícil de encontrar"],
    ["Con poco pelo", "Con mucho pelo"],
    ["Mejor caliente", "Mejor frío"],
    ["Comida rica", "Comida mala"],
    ["Mascota normal", "Mascota exótica"],
    ["Aburrido", "Excitante"],
    ["Película de acción", "Película de aventura"],
    ["Tiene buena reputación", "Tiene mala reputación"],
    ["Vive poco", "Vive mucho"],
    ["Fácil de pronunciar", "Difícil de pronunciar"],
    ["Legal", "Ilegal"],
    ["Bonito", "Feo"],
    ["Azul", "Verde"],
    ["Sin valor", "Con valor"],
    ["Emocionante", "Terrorífico"],
    ["Estúpido", "Brillante"],
    ["Distopía", "Utopía"],
    ["Sobrepagado", "Poco pagado"],
    ["Nombre de gato", "Nombre de perro"],
    ["Estable", "Inestable"],
    ["Habilidad sobrevalorada", "Habilidad infravalorada"],
    ["Saludable", "Malo para la salud"],
    ["Ligeramente adictivo", "Muy adictivo"],
    ["Doloroso", "Indoloro"],
    ["Caliente", "Frío"],
    ["Buena música", "Mala música"],
    ["Trabajo seguro", "Trabajo peligroso"],
    ["Buena costumbre", "Mala costumbre"],
    ["Oscuro", "Iluminado"],
    ["Verdadero", "Falso"],
    ["Amigo", "Enemigo"],
    ["Blando", "Duro"],
    ["Lugar tranquilo", "Lugar ruidoso"],
    ["Hobby aburrido", "Hobby fascinante"],
    ["Temporal", "Permanente"],
    ["Importante", "Sin importancia"],
    ["Pérdida de tiempo", "Buen uso del tiempo"],
    ["Fobia racional", "Fobia irracional"],
    ["Tema serio", "Tema divertido"],
    ["Buen consejo", "Mal consejo"],
    ["Te hace sentir mal", "Te hace sentir bien"],
    ["Sin atractivo", "Atractivo"],
    ["Abrazable", "No abrazable"],
    ["Superhéroe impresionante", "Superhéroe patético"],
    ["Buen personaje", "Mal personaje"],
    ["Esencial", "Prescindible"],
    ["Único", "Común"],
    ["Arriba", "Abajo"],
    ["Buen superpoder", "Mal superpoder"],
    ["Mejor protagonista", "Peor protagonista"],
    ["Buena página de internet", "Mala página de internet"],
    ["Mejor villano", "Peor villano"],
    ["Dulce", "Salado"],
    ["Serie sobrevalorada", "Serie infravalorada"],
    ["Tecnología útil", "Tecnología inútil"],
    ["Mal amigo", "Buen amigo"],
    ["Alto", "Bajo"],
    ["Redondeado", "Puntiagudo"],
    ["Amistad", "Noviazgo"],
    ["Fácil de deletrear", "Difícil de deletrear"],
    ["Desconocido", "Famoso"]
];
const MAX_RULER_VALUE = 31;

// Variable para habilitar/deshabilitar eventos de las marcas
let eventosHabilitados = false;
let jugadorActivo = 1;

// Función que se ejecuta cuando se hace clic en el botón
function iniciarRonda() {
    const tarjetaIzq = document.getElementById('tarjetaIzq');
    const tarjetaDer = document.getElementById('tarjetaDer');
    const goalValueElement = document.getElementById('valorRonda');
    const textInput = document.getElementById('campoTexto');
    const sendButton = document.getElementById('botonCambiarTitulo');

    var indexTheme = getRandomThemeIndex();

    tarjetaIzq.textContent = palabras[indexTheme][0];
    tarjetaDer.textContent = palabras[indexTheme][1];

    var goal = getRandomRulerValue();
    goalValueElement.textContent = goal.toString();

    // Mostrar las opciones de ronda ocultas cambiando el estilo 'display'
    goalValueElement.style.display = 'block';
    tarjetaIzq.style.display = 'block';
    tarjetaDer.style.display = 'block';
    textInput.style.display = 'block';
    sendButton.style.display = 'block';
}

function getRandomThemeIndex(){
    return Math.floor(Math.random() * palabras.length);
}

function getRandomRulerValue(){
    var rulerValue = Math.floor(Math.random() * MAX_RULER_VALUE);
    console.log("EL VALOR DE LA RONDA ES: " + rulerValue.toString());
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

    // Habilitar los eventos de clic en las marcas
    eventosHabilitados = true;
}

// Función que maneja el clic en una marca
function marcarDiv(event) {
    if (eventosHabilitados) {
        const marca = event.currentTarget;
        
        // Verificar si la marca ya ha sido seleccionada por otro jugador
        if (marca.classList.contains('jugador-1') || marca.classList.contains('jugador-2') || marca.classList.contains('jugador-3')) {
            alert("Esta marca ya ha sido seleccionada.");
            return;
        }

        // Asignar la clase según el jugador activo
        if (jugadorActivo === 1) {
            marca.classList.add('jugador-1');
        } else if (jugadorActivo === 2) {
            marca.classList.add('jugador-2');
        } else if (jugadorActivo === 3) {
            marca.classList.add('jugador-3');
        }

        // Cambiar al siguiente jugador
        jugadorActivo = jugadorActivo === 3 ? 1 : jugadorActivo + 1;
    }
}

// Asocia la función al evento de clic del botón
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('botonRonda');
    boton.addEventListener('click', iniciarRonda);

    const botonCambiarTitulo = document.getElementById('botonCambiarTitulo');
    botonCambiarTitulo.addEventListener('click', cambiarTitulo);

    const marcas = document.querySelectorAll('.marca');
    marcas.forEach(function(marca) {
        marca.addEventListener('click', marcarDiv);
    });
});