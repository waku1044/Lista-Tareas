import article from './article.js';

let $agregar = document.querySelector('[data-btn-agregar]');
let $tarea = document.querySelector('[data-input]');
const section = document.querySelector('#section')

function agregar(e){
    e.preventDefault();
    // console.log(e.target.innerText);
    if($tarea.value){
        console.log($tarea.value)
        section.innerHTML += article($tarea);
    }else{
            alert('Debes ingresar una tarea');
    }
    $tarea.value = ''
}
$agregar.addEventListener('click', agregar)