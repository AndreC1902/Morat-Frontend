const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const mode = urlParams.get('Mode');
const URL = 'http://localhost:3001/Noticias/' + id;
const form = document.querySelector('#form-container');
const token = localStorage.getItem('token');

const TituloInput = document.querySelector('#Titulo');
const FechaPublicacionInput = document.querySelector('#FechaPublicacion');
const ContenidoInput = document.querySelector('#Contenido');
const AutorInput = document.querySelector('#Autor');
const CategoriaInput = document.querySelector('#Categoria');
const EtiquetasInput = document.querySelector('#Etiquetas');
   
const contenedorError = document.querySelector('#error-container'); //ERROR IMPORTANTE FIJATEEE
    
console.log(id);
console.log(mode);
console.log('Token: ', token);       

if(mode === 'UPD'){
    console.log(URL);
    fetch(URL)
    .then(function(response){
    if(response.ok){
        return response.json();
    }
    throw new Error('La respuesta no fue satisfactoria');
    }).then(function(data){
        console.log(data);
        let IdElement = document.querySelector('#Id');
        IdElement.value = data._id;

        let TituloElement = document.querySelector('#Titulo');
        TituloElement.value = data.Titulo;

        let FechaPElement = document.querySelector('#FechaPublicacion');
        FechaPElement.value = data.FechaPublicacion;

        let ContenidoElement = document.querySelector('#Contenido');
        ContenidoElement.value = data.Contenido;

        let AutorElement = document.querySelector('#Autor');
        AutorElement.value = data.Autor;

        let CategoriaElement = document.querySelector('#Categoria');
        CategoriaElement.value = data.Categoria;

        let EtiquetasElement = document.querySelector('#Etiquetas');
        EtiquetasElement.value = data.Etiquetas;
    })
    .catch(function(error){
        console.error(error);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const titulo = TituloInput.value; 
        const fechaP = FechaPublicacionInput.value; 
        const contenido = ContenidoInput.value; 
        const autor = AutorInput.value; 
        const categoria = CategoriaInput.value; 
        const etiquetas = EtiquetasInput.value; 

        fetch(URL, {
            method: 'PUT',
            headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({titulo, fechaP, contenido, autor, categoria, etiquetas})
        })
        .then(response => {
            if(!response.ok){
                throw new Error('La respuesta no fue correcta');
            }
            return response.json();
        })
        .then(data =>{
            window.location.href = 'Listado.html';
        })
        .catch(error => {
            console.log('Error:', error);
            contenedorError.textContent = 'Error no se pudo actualizar el registro';
        });   
    });    
}