//1. Seleccionamos los items del slider 
let items = document.querySelectorAll('.seccion2 .slider .list .item');
//2. Seleccioamos los botones
let next = document.getElementById('next');
let prev = document.getElementById('prev');
//3. Seleccionamos todos los elementos de la miniatura
let thumbnails = document.querySelectorAll('.seccion2 .thumbnail .item');

//4. Configuramos parámetros
let countItem = items.length;
let itemActive = 0;
//4.1. Evento para pasar al siguiente slider
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    //4.1.1. Colocamos la función que hará el cambio
    showSlider();
}
//4.2. Función para retroceder
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    //4.2.1. Colocamos la función que hará el cambio
    showSlider();
}
