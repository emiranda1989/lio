// obtener boton validar 
const btnValidar = document.getElementById("btnvalidar");
const contenedorErrores = getElementById("contenedor de errores");

btnValidar. addEventListener("click", () => {


// limpiar contenedores 

contenedorErrores= innerHtml = "";

// obtener canal del campo nombre 

const nombre = document.getElementById("nombre").value;

const correo = document.getElementById("correo").value;

const carrera = document.getElementById("carrera").value;

const semestre  = document.getElementById("semestre").value;

const promedio = document.getElementById("promedio").value;

const fechaNacimiento = document.getElementById("fechaNacimiento").value;

//  arreglo vacio va almacenar los errores de los usuarios

let errores = [];

// validacion
// validacion nombre vacio

if (nombre == "") {
    errores.push ("DebeS ingresar el nombre");
}
const regexCorreo  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if ( correo == "") {
    errores.push ("Debes ingresar un correo electronico ");

}else if (!regexCorreo.test(correo)){
    errores.push ("El correo es invalido");
}

if (carrera ===""){
    errores.push ("Debes ingresar una carrera");
}

if (semestre ===""){
    errores.push ("Debes ingresar semestre");

}

if (promedio ===""){
    errores.push ("Debes ingresar un promedio");
}else if (parceFloat (promedio)< 1 || parceFloat (promedio)< 7) {
    errores.push ("El promedio debe estar entre 1.0 y 7.0");
}

if (fechaNacimiento === ""){
    errores.push (" Debes seleccionar una fecha nacimiento");
}

if (errores.length > 0){
    contenedorErrores.innerHtml = `
    
    <ul> 
        ${errores.map(error => `<li>${error} </li>`).join("")} 
    </ul>

`;

return;
}

// crear un objeto 

const alumno ={
    nombre,
    correo,
    carrera,
    semestre,
    promedio,
    fechaNacimiento,
};


// Guardar en localstorage 

localStorage.setItem (
    "alumno",
    JSON.stringify (alumno)
);

window.location.href = "perfil.html"


});