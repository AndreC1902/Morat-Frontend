const itemsPerPage = 3; // El número de contenedores que se muestran en cada página
let currentPage = 1;  //El número de página actual se almacena en la variable
let data = [];

fetch('http://127.0.0.1:3001/Noticias')
.then(function(response){
    if(response.ok){
        return response.json();
    }
    throw new Error('La respuesta no fue satisfactoria')
}).then(function(result){
    data = result;
    renderData();
    renderPagination();
}).catch(function(error){
    console.error(error);
});

function renderData(dataShow = data){
    let noticiasContainer = document.querySelector('#noticias-container');
    noticiasContainer.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsShow = dataShow.slice(start, end);
    itemsShow.forEach(function(item){
        let noticia = document.createElement('div');
        noticia.classList.add('noticia');

        let ruta = document.createElement("img");
        ruta.src = `/uploads/${item.Ruta}`;
        ruta.style.width = "300px";
        noticia.appendChild(ruta);

        let titulo = document.createElement('h2');
        titulo.textContent = item.Titulo;
        titulo.classList.add('titulo');
        noticia.appendChild(titulo);

        let fecha = document.createElement('p');
        fecha.textContent = `Publicado el ${item.FechaPublicacion}`;
        fecha.classList.add('fecha');
        noticia.appendChild(fecha);

        let autor = document.createElement('p');
        autor.textContent = `Autor: ${item.Autor}`;
        autor.classList.add('autor');
        noticia.appendChild(autor);

        let contenido = document.createElement('p');
        contenido.textContent = item.Contenido;
        contenido.classList.add('contenido');
        noticia.appendChild(contenido);

        let categoria = document.createElement('p');
        categoria.textContent = item.Categoria;
        categoria.classList.add('categoria');
        noticia.appendChild(categoria);

        let etiquetas = document.createElement('p');
        etiquetas.textContent = `Etiquetas: ${item.Etiquetas}`;
        etiquetas.classList.add('etiquetas');
        noticia.appendChild(etiquetas);

        noticiasContainer.appendChild(noticia);
    });
}

function renderPagination() {
const pagination = document.querySelector('#pagination');
pagination.innerHTML = '';

const totalPages = Math.ceil(data.length / itemsPerPage);

for(let i = 1; i <= totalPages; i++) {
    let button = document.createElement('button');
    button.textContent = i;
    button.classList.add('pagination-button');
    button.addEventListener('click', function() {
    currentPage = i;
    renderData();
    renderPagination();
    });
    pagination.appendChild(button);
}
}