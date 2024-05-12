//1. Mostrar menú
function showSidebar() {
    //1.1. Consegimos el datos 
    const sidebar = document.querySelector('.sidebar');
    //1.1.1.  LE colocamos un flex
    sidebar.style.display = 'flex';
}

//2. Esconder menú
function hideSidebar() {
    //2.1. Seleccionamos
    const sidebar = document.querySelector('.sidebar');
    //la función que corresponde
    sidebar.style.display = 'none';
}