
# addEventListener
-escuchamos directamente  los eventos  en  js  sin escuchas desde  html 

es  un escuchador de evento 

funciona -->

addEvenListener("ingresamos el evento a escuchas" , ingresmos  la funcion que ejecutamos )

# primero selecionamos el selector html  "btn "  luego le decimos cual de todos  los eventos queremos escuchar es  decir  'click ' y despues  debe saber que funcion va a llamar   para ejecutar  sin  parentecis  'btnonclick'

btn.addEventListener("click",btnOnClick)


 ## funcion  credad  que  va ejecutar   cuando  le  da click 
function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}


###             FORMLARIOS 

# se ejecuta el codigo pero la  pagina  por defecto se recarga   debido a  que  siempre  el  ultimo  btn  que encuentre lo toma  como un submit  

### -- para  evitar eso  tenemos  que  llamar una de sus  propiedad EVENT  event.prevendefault





const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

# TOMAMOS  EL EVENTO DE SUBMIT 

-- form.addEventListener("submit",sumarInput);

        function sumarInput(event) {
        event.preventDefault();
        const sumaInputs = input1.value + input2.value;
        pResult.innerText = "Resultado: " + sumaInputs;
        }