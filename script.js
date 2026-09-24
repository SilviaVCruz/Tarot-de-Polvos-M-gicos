
const cartas = [
    {
        nombre: "El Sol",
        simbolo: "☀️",
        significado:
            "Claridad, alegría y energía positiva. Es un momento para confiar en tu camino."
    },

    {
        nombre: "La Luna",
        simbolo: "🌙",
        significado:
            "Intuición, sueños y emociones profundas. Observa lo que tu mundo interior intenta decirte."
    },

    {
        nombre: "La Estrella",
        simbolo: "⭐",
        significado:
            "Esperanza, inspiración y renovación. Hay motivos para mirar hacia adelante con confianza."
    }
];

let ultimaCarta = null;

function revelarCarta() {

    let numero;

    do {
        numero = Math.floor(Math.random() * cartas.length);
    } while (numero === ultimaCarta && cartas.length > 1);

    ultimaCarta = numero;

    const cartaElegida = cartas[numero];

    const carta = document.getElementById("carta");
    const nombreCarta = document.getElementById("nombreCarta");
    const significado = document.getElementById("significado");

    const simboloCarta = document.getElementById("simboloCarta");
    const nombreCartaEnCarta =
        document.getElementById("nombreCartaEnCarta");

    // Primero regresamos la carta al dorso
    carta.classList.remove("revelada");

    // Esperamos un poco para que empiece la animación
    setTimeout(() => {

        simboloCarta.textContent = cartaElegida.simbolo;
        nombreCartaEnCarta.textContent = cartaElegida.nombre;

        nombreCarta.textContent = cartaElegida.nombre;
        significado.textContent = cartaElegida.significado;

        // Volteamos la carta
        carta.classList.add("revelada");

    }, 300);
}
