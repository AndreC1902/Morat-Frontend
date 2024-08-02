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
    let noticiasContainer = document.querySelector('#noticias-containerLi');
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
        fecha.textContent = `Publicado el ${item.FechaPublicacion} por ${item.Autor}`;
        fecha.classList.add('fecha');
        noticia.appendChild(fecha);

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

        let id = document.createElement('p');
        id.textContent = `ID: ${item._id}`;
        id.classList.add('id');
        noticia.appendChild(id);

        let btnActualizarNoticia = document.createElement('a');
        btnActualizarNoticia.href = '/FormAc.html?Mode=UPD&id=' + item._id;
        btnActualizarNoticia.textContent = 'Actualizar Noticia';
        btnActualizarNoticia.classList.add('btnActualizar-N');
        noticia.appendChild(btnActualizarNoticia);

        let linkDelete = botonEliminar(item);
        noticia.appendChild(linkDelete);

        noticiasContainer.appendChild(noticia);
    });
}

/* Eliminar */
function elminarRegistro(id){
    const token = localStorage.getItem('token');
    if(!token){
        console.log('No existe Token');
        return;
    }

    fetch(`http://localhost:3001/Noticias/${id}`, {
        method: 'DELETE', 
         headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + token // Asegurarse de enviar el token de autenticación si es necesario
        }
    }).then(response => {
        if (response.ok) {
        console.log(`Registro con ID ${id} eliminado exitosamente`);
        location.reload();
    }else{
        console.error('Error al eliminar el registro', error);
    }
}).catch(error =>{
    console.error('Error en la peticion', error);
})

}

function botonEliminar(item){
    
    let linkDelete = document.createElement('a');
    linkDelete.href = "#";
    linkDelete.textContent = "Eliminar Registro";
    linkDelete.classList.add('btnEliminar-N');
    let idregistro = item._id;
    linkDelete.setAttribute('dataId', idregistro);
    linkDelete.addEventListener('click', (event) => {
        event.preventDefault();
        let idregistro = event.target.getAttribute('dataId');
        elminarRegistro(idregistro);
    })
    return linkDelete;
}
/* Termina Eliminar */

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