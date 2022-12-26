/**************************variables**********************/
let correoForm = document.querySelector("#inputEmail");
let textoForm = document.querySelector("#areaConsulta");
let formulario = document.querySelector("#formulario");
let mostrar = document.querySelector(".mostrar");

/*********************eventos********************/
correoForm.addEventListener("input", function(){
    //console.log(correoForm.value);
    /*if (correoForm.value === ""){
        alert("Ingrese un dato valido.");
    }*/
});

textoForm.addEventListener("input", function(){
    //console.log(textoForm.value);
    /*if(textoForm.value === ""){
        alert("Ingrese caracteres validos.");
    }*/
})


/*******************************incluyendo elementos al DOM*******************************/
const mostrarInfo = formulario.addEventListener("submit", function(c){
    c.preventDefault();
    if(textoForm.value === "" || correoForm.value === ""){
        alert("Ingrese caracteres validos.");
    }else {
    mostrar.innerHTML = `<h4>Gracias por tu compra. Enviaremos los detalles a "${correoForm.value}".
    Con respecto a tu consulta "${textoForm.value}" tambien será respondida al mismo correo. </h4>`
}
})













//mostrar.innerHTML = `<h4>Gracias por tu compra. Enviaremos los detalles a "${correoForm.value}".
//    Con respecto a tu consulta "${textoForm.value}" tambien será respondida al mismo correo. </h4>`