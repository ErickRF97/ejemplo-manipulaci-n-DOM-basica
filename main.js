const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event){
  console.log({event});
  event.preventDefault();
 const sumaInputs=Number(input1.value) + Number(input2.value);
   resultado.innerText = "Resultado: " + sumaInputs;

}



