// <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

### onclick nos  permite escuchar el evento   o la accion del click  en el boton 

<input id="calculo2" placeholder="Escribe algo aquí" />

###  onchenge nos  perimite escuchar  cuando termian es escribir   un  input 

### -si queremos el valor  ingresado  lo pedimos con value 

 # 1-creamos  una variable input1  
const input1 =0;

### 2- manipulamos el html  "seleccionamos el elemto html  por  id calculo2  con "documnet.queryselector("ingresamos la claseo .calcular o por id #calculo2")

const input1 = document.querySelector("#calculo2");

input1.value 
# EJEMPLO

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  # Escribimos  la respuenta  con  innerText
  pResult.innerText = "Resultado: " + sumaInputs;
}