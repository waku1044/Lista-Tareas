function mostrarTareas(){
    return fetch('http://localhost:3000/lista')
    .then(response=>response.json())
}

export const api = {
    mostrarTareas,
}