//console.log("Hola mundo este es un mensaje en consola");

//let links= document.querySelectorAll("a");

//links.forEach(function(links){
//    console.log(links);
//});

/*let celdas = document.querySelectorAll("td");

    
celdas.forEach(function(td){
      td.addEventListener;
    });

    */

/*
let celdas= document.querySelectorAll("td");


celdas.forEach(function(td){
td.addEventListener('click', function(){
  console.log("Click");

})
})
*/

//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");


//recorrer los elementos de la clase
links.forEach(function (link) {

  //agregar el evento click a cada uno de los elementos
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");

    //quitarle las clases de animacion que tiene actualmente


    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");


    //agregar clases para animar la salida

    content.classList.add("animate__backOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "/boletines";

    }, 600);


    return false;


  })
})
