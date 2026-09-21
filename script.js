```javascript
const cartas = [
    {
        nombre: "☀️ El Sol",
        significado: "Claridad, alegría y energía positiva. Es un momento para confiar en tu camino."
    },

    {
        nombre: "🌙 La Luna",
        significado: "Intuición, sueños y emociones profundas. Observa lo que tu mundo interior intenta decirte."
    },

    {
        nombre: "⭐ La Estrella",
        significado: "Esperanza, inspiración y renovación. Hay motivos para mirar hacia adelante con confianza."
    }
];


function revelarCarta() {

    const numero = Math.floor(Math.random() * cartas.length);

    const cartaElegida = cartas[numero];

    document.getElementById("nombreCarta").textContent =
        cartaElegida.nombre;

    document.getElementById("significado").textContent =
        cartaElegida.significado;

    document.getElementById("carta").innerHTML =
        `<div class="dorso">✦</div>`;

}
```
