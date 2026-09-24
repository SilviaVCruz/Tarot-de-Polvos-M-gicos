
const cartas = [
    {
        nombre: "El Sol",
        imagen: "el-sol.jpg",
        significado:
            "Claridad, alegría y energía positiva. Esta carta habla de vitalidad, confianza, éxito y de la posibilidad de ver una situación con mayor claridad."
    },

    {
        nombre: "La Luna",
        imagen: "la-luna.jpg",
        significado:
            "Intuición, sueños y emociones profundas. La Luna invita a observar aquello que no resulta evidente y a escuchar la propia percepción."
    },

    {
        nombre: "La Estrella",
        imagen: "la-estrella.jpg",
        significado:
            "Esperanza, inspiración y renovación. Representa confianza, recuperación y la posibilidad de mirar hacia adelante con una nueva perspectiva."
    }
];

let ultimaCarta = -1;

function revelarCarta() {

    let numero;

    do {
        numero = Math.floor(Math.random() * cartas.length);
    } while (numero === ultimaCarta && cartas.length > 1);

    ultimaCarta = numero;

    const cartaElegida = cartas[numero];

    const carta = document.getElementById("carta");
    const imagenCarta = document.getElementById("imagenCarta");
    const nombreCarta = document.getElementById("nombreCarta");
    const significado = document.getElementById("significado");

    imagenCarta.src = cartaElegida.imagen;
    imagenCarta.alt = "Carta del Tarot " + cartaElegida.nombre;

    nombreCarta.textContent = cartaElegida.nombre;
    significado.textContent = cartaElegida.significado;

    carta.classList.add("revelada");
}
