import article from './article.js';


let $agregar = document.querySelector('[data-btn-agregar]');
let $tarea = document.querySelector('[data-input]');
const section = document.querySelector('#section');
let $pendiente = document.querySelector('[data-pendiente]');
let $concretado = document.querySelector('[data-concretado]');

let countPendiente = 0;
let countConcretado = 0;
$tarea.focus();

$pendiente.innerText = countPendiente;
$concretado.innerText = countConcretado ;

const tachado = (e)=>{
    let si = e.target.classList.toggle('tachado');
    if(!si){
        countPendiente++;
        countConcretado--;
    }else{
        countPendiente--;
        countConcretado++;
    }
    $concretado.innerText = countConcretado;
    $pendiente.innerText = countPendiente;
}

const eliminar = (e)=>{
    let clase = e.target.parentNode.parentNode.children[0].classList;
    console.log(clase)
    if(clase.length == 5){
        countConcretado--;
    }else{
        countPendiente--;
    }
    e.target.parentNode.parentNode.remove();
    $pendiente.innerText = countPendiente;
    $concretado.innerText = countConcretado;
}

function agregar(e){
    e.preventDefault();
    if($tarea.value){
        section.innerHTML += article($tarea);
        let btn_delete = document.querySelectorAll('[data-delete]');
        btn_delete.forEach(btn=>btn.addEventListener('click',eliminar));
        let text = document.querySelectorAll('[data-text]');
        text.forEach(element=>{element.addEventListener('click',tachado)})
        countPendiente++;
        $tarea.value = ''; 
    }else{
        alert('Debes ingresar una tarea');
    }
    $tarea.focus();
    $pendiente.innerText = countPendiente;
}
$agregar.addEventListener('click', agregar);