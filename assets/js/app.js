window.addEventListener("load",function() {

var contenedor= document.getElementById('contenedor');

var cancha=document.createElement("div");
cancha.classList.add("cancha");

var canchaHijo=document.createElement("div");
canchaHijo.classList.add("cancha-hijo");

var arcoUno=document.createElement("div");
arcoUno.classList.add("arco-uno");

var arcoDos=document.createElement("div");
arcoDos.classList.add("arco-dos");


contenedor.appendChild(cancha);
cancha.appendChild(canchaHijo);
canchaHijo.appendChild(arcoUno);
canchaHijo.appendChild(arcoDos);
});
