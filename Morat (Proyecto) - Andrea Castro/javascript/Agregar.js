const form = document.getElementById('form-container');
const token = localStorage.getItem('token');
const contenedorError = document.querySelector('#error-container');

console.log('Mensaje Cualquiera', form);

form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const RutaInput = document.getElementById("Imagen");
    const TituloInput = document.getElementById('Titulo');
    const FechaPublicacionInput = document.getElementById('FechaPublicacion');
    const ContenidoInput = document.getElementById('Contenido');
    const AutorInput = document.getElementById('Autor');
    const CategoriaInput = document.getElementById('Categoria');
    const EtiquetasInput = document.getElementById('Etiquetas');

    const formData = new FormData();
    formData.append("ruta", RutaInput.files[0]);
    formData.append("titulo", TituloInput.value);
    formData.append("fechaP", FechaPublicacionInput.value);
    formData.append("contenido", ContenidoInput.value);
    formData.append("autor", AutorInput.value);
    formData.append("categoria", CategoriaInput.value);
    formData.append("etiquetas", EtiquetasInput.value);

    try{
        const response = await fetch("http://127.0.0.1:3001/Noticias", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
            body: formData
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
    }catch(error){
        console.error("Hubo un error al agregar el registro:", error);
    }
});