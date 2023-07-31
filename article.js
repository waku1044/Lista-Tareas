

const article = (tarea) => {
    let btn_delete = document.querySelector('[data-delete]')
    // function borrar(e) {
    //     e.target;
    // }
    console.log(btn_delete)
    // delet.addEventListener('click',borrar)
  return `<article class="d-flex justify-content-around align-items-center mt-1 py-2 flex-wrap">
<p class="p-0 m-0 fw-semibold">${tarea.value}</p>
<div class="opciones">
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-danger" data-delete>Delete</button>

</div>
</article>`;
};

export default article;
