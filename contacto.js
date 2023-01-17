/**************************variables**********************/
let correoForm = document.querySelector("#inputEmail");
let textoForm = document.querySelector("#areaConsulta");
let formulario = document.querySelector("#formulario");
let mostrar = document.querySelector(".mostrar");

/*********************eventos********************/
correoForm.addEventListener("input", function () {

});

textoForm.addEventListener("input", function () {

})


/*******************************incluyendo elementos al DOM*******************************/
const mostrarInfo = formulario.addEventListener("submit", function (c) {
    c.preventDefault();
    if (textoForm.value === "" || correoForm.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'Ha ingresado caracteres invalidos. Por favor intentelo nuevamente.',
            confirmButtonText: 'Entendido',
            footer: '<a href="">¿A que se debe este problema?</a>'
        })
    } else {

        Swal.fire({
            icon: 'info',
            title: '¡Consulta enviada!',
            text: 'Gracias por hacernos llegar tus dudas, te responderemos a la brevedad, a la dirección indicada.',
            confirmButtonText: 'Cerrar'
        });
    }
})
