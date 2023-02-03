const h1 = document.querySelector("H1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".pClase");
const pPid = document.querySelector("#pid");
const input = document.querySelector("input");

// MODIFICAR EL DOM O ESCRIBIR   HTML  DESDE  JS   INNERHTML 
p.innerHTML = "helo tilin <br>feo" ;

//PROTEGERNOS  INNERTEX  CONVIERTE TODO A TEXTO 

h1.innerText = "helo tilin <br>feo" ;
// BUSCAR  oleer  UN ATRIBUTO getAttribute("class")
console.log(h1.getAttribute("nombre"));

// MODIDIFCAR  UNA CLASE o atributo 
h1.setAttribute("nombre","vladimir");

//classList.add 
h1.classList.add("guerrero")

// classList.remove

h1.classList.remove("alexis","guerrer");

//h1.classList.toggle

h1.classList.toggle("alexis")
//classList.contains nos edja  saver  si tieen la clase nos devuelve treu  o  false 

h1.classList.contains("alexis")

input.value = 456;
// crear elemnto desde cero 
console.log();


 const img =document.createElement("img");
 img.setAttribute("src","https://i.blogs.es/ea7e11/valorantlaunch/840_560.jpeg")

 pid.append(img);