document.addEventListener('DOMContentLoaded', () => {
    var imagenes = document.querySelectorAll('.carrusel img');
    var indiceActual = 0;
    var intervalo = setInterval(cambiarImagen, 3000);

    function cambiarImagen() {
        imagenes[indiceActual].classList.remove('activo');
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add('activo');
    }
});