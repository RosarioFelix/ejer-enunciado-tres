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
var centro=document.createElement("div");
centro.classList.add("centro");

for (var i = 0; i<=2;i++){
  var pelota=document.createElement("div");
  pelota.classList.add("pelota");
  canchaHijo.appendChild(pelota);
}
contenedor.appendChild(cancha);
cancha.appendChild(canchaHijo);
canchaHijo.appendChild(arcoUno);
canchaHijo.appendChild(arcoDos);
canchaHijo.appendChild(centro);

var pelota = document.getElementsByClassName('pelota');
pelota[0].style.top="50px";
pelota[0].style.left="100px";
pelota[1].style.top="20px";
pelota[1].style.left="230px";
pelota[2].style.bottom="50px";
pelota[2].style.right="100px";
}
);
