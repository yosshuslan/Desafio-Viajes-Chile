//tooltip

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//evento

$("#enviarDatos").click(function(){
    alert('datos enviados correctamente...');
});

