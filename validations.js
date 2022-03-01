function validarForm(forma) {
    let name = forma.names;
    if (name.value == "" || name.value == "Ingresar Nombre(s)") {
        alert("Proporciona tu nombre");
        name.focus();
        name.select();

        return false;
    }

    alert("Formulario validado");
    return true;

}



function validarForma(forma) {
    let name = forma.names;
    if (name.value == "" || name.value == "Ingresar Nombre(s)") {
        alert("Proporciona tu nombre");
        name.focus();
        name.select();

        return false;
    }

    let apellido = forma.apellidos;
    if (apellido.value == "" || apellido.value == "Ingresar Apellidos") {
        alert("Proporciona tus apellidos");
        apellido.focus();
        apellido.select();

        return false;
    }

    let email = forma.email;
    if (name.value == "" || name.value == "Ingresar un Email") {
        alert("Proporciona un email");
        name.focus();
        name.select();

        return false;
    }

    let puesto = forma.names;
    if (name.value == "" || name.value == "Ingresa un puesto de trabajo") {
        alert("Proporciona un puesto");
        name.focus();
        name.select();

        return false;
    }

    var password = forma.password;
    //Si el largo de la contraseña es menor que 8 entonces debe de proporcionar
    //una contraseña mayor que 8 elementos.
    if (password.value == " " || password.value.length < 8) {
        alert("Debe proporcionar una clave al menos de 8 caracteres");
        password.focus();
        password.select();
        return false;
    }


//Formulario es valido
    alert("Formulario válido, enviando datos al servidor...");
    return true;
}


