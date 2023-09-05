
const article = (tarea) => {
  return `<article class="d-flex justify-content-around align-items-center mt-1 py-2 flex-wrap col-sm-6 col-md-4">
  <p class="p-0 m-0 fw-semibold overflow-auto
  
  " data-text>${tarea.value}</p>
  <div class="opciones">
  <button class="btn btn-danger" data-delete>Delete</button>
  
  </div>
  </article>`;
};


export default article;
