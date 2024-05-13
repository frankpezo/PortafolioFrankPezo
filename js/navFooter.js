//1. Seleccionamos el header y el footer
const header = document.querySelector('header');
const footer = document.querySelector('footer');

//2. Ingresamos el contenido de cada uno
//2.1. Header
header.innerHTML = `
<nav>
<div class="logo">Fonki</div>
<!-- Menú responsive-->
<ul class="sidebar">
    <li onclick="hideSidebar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24"
                viewBox="0 -960 960 960" width="24">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg></a></li>
    <li><a class="active" href="inicio.html" >Inicio</a></li>
    <li><a href="proyectos.html">Proyectos</a></li>
    <li><a href="sobreMi.html">Sobre mí</a></li>
    <li><a href="contacto.html">Contacto</a></li>


</ul>

<!-- Menú normal-->
<ul class="menu">
    <li class="hideOnMobile "><a class="active" href="inicio.html">Inicio</a></li>
    <li class="hideOnMobile"><a href="proyectos.html">Proyectos</a></li>
    <li class="hideOnMobile"><a href="sobreMi.html">Sobre mí</a></li>
    <li class="hideOnMobile"><a href="contacto.html">Contacto</a></li>
    <li class="menu-button" onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                height="24" viewBox="0 -960 960 960" width="24">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg></a></li>
</ul>
</nav>
`
//2.2. El footer
footer.innerHTML = `
<ul>
<li>FONKI</li>
<li>Derechos reservados &copy; 2024 | Frank Pezo</li>
</ul>
`


//3. Active page del menú normal 
//3.1. cargamos la locación 
var activePage = window.location.href;
//3.2. seleccionamos  los items
var navLinks = document.querySelectorAll('header nav .menu .hideOnMobile a');
//3.2.1. Realizmos un forEach para recorrer el item 
navLinks.forEach(function (link) {
    if (link.href === activePage) {
        //Agregamos el active
        link.classList.add('active');
    } else {
        //Eliminamos el active
        link.classList.remove('active');
    }
});

//4. Seleccionamos lo items del menú responsive
var navResponiveLink = document.querySelectorAll('header nav .sidebar li a');
//4.1. Realizmos un forEach para recorrer el item 
navResponiveLink.forEach(function (link) {
    if (link.href === activePage) {
        //Agregamos el active
        link.classList.add('active');
    } else {
        //Eliminamos el active
        link.classList.remove('active');
    }
});