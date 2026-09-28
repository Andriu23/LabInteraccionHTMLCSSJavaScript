document.getElementById('rojo').innerHTML = 'Adiós';
document.getElementsByClassName('azul')[0].style.color = 'orange';

const titulo = document.getElementById('rojo');
const boton = document.getElementById('btn');

boton.addEventListener('click', (event) => {
    titulo.style.color = 'brown';
})


const footer = document.querySelector('footer');
const anadir = document.getElementById('Bienvenido');

anadir.addEventListener('click', () => {

    const parrafo = document.createElement('p');

    const texto = document.createTextNode(
        'Esta actividad es la manipulación del DOM'
    );

    parrafo.appendChild(texto);
    footer.appendChild(parrafo);

});


