

function adivinarEdad(){
let inputNombre =document.querySelector('input');
let URL = "https://api.agify.io?name="+inputNombre.value;
console.log(inputNombre.textContent);
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        mostrarEdad(respuesta.age);
    })
    .catch(error => console.log('-'))
}


function mostrarEdad(age){
    let result=document.querySelector('.result');
    result.textContent=age;
    console.log('Edad adivinada: '+age);
}

