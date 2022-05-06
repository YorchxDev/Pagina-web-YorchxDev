// Corre Animaciones AOS
    AOS.init();

// Sticky Nav automatica bb.
// Esto es para saber en que parte de la pagina estas a nivel vertical. Su valor inicial es 0.
let ubicacionPrincipal = window.pageYOffset;


// Esto hace que, al dar scroll, el valor "window.pageYOffset" cambie, y si ese valor es mayor que cero oculta la barra de navegacion.
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

// Con esto se resetea el valor de "ubicacionPrincipal", de tal manera que si haces scroll hacia arriba, se mantiene la barra de navegacion, pero se oculta si haces scroll hacia abajo.
ubicacionPrincipal = desplazamientoActual;
});

// Menu hamburguesa perron.

// Enlaza con los enlaces de la navegacion. En este caso la clase es ".links". Se le asigna la posicion [0].
let enlacesHeader = document.querySelectorAll(".links")[0];
//Esto hace que el icono cambie de color, en este caso blanco y negro.
let semaforo = true;

// Le pone al menu hamburguesa un event listener que al hacer click corre una funcion. Tambien se le asigna la posicion [0].
// Lo que hace la funcion es activar o desactivar una clase. En este caso "menudos".
document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color="#fff";
        semaforo=false;
    }
    else{
        document.querySelectorAll(".hamburger")[0].style.color="#000";
        semaforo=true;
    }
    
    enlacesHeader.classList.toggle("menudos");
});