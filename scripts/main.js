var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/golden-adulto.jpg') {
        miImage.setAttribute('src', 'images/golden-cachorros.jpg');
    } else {
        miImage.setAttribute('src', 'images/golden-adulto.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = miNombre + ' Tiene un Golden';
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = nombreAlmacenado + ' Tiene un Golden';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}