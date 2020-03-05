let department = document.getElementById("depart");
let cargoEmpresa = document.getElementById("cargoEmpresa");
let nomina = document.getElementById("nomina");

department.addEventListener("change", e => {
    let valorSeleccionado = e.srcElement.value;

    if (valorSeleccionado != "Departamento") {
        nomina.removeAttribute("disabled");
        cargoEmpresa.removeAttribute("disabled");
        cargoEmpresa.setAttribute("class", "required");

    } else if (valorSeleccionado == "Departamento") {
        nomina.setAttribute("disabled", "");
        nomina.querySelector('input').value = '';
        cargoEmpresa.value = '';
        cargoEmpresa.setAttribute("disabled", "");
        cargoEmpresa.removeAttribute("class", "required");
        cargoEmpresa.setAttribute("value", "Cargo Empresa");
        cargoEmpresa.setAttribute("placeholder", "Cargo Empresa:")
    }
})

let seleccionarProvincia = true
let provincia = document.getElementById("provincias");
let provinciaSeleccionada;

provincia.addEventListener("change", e => {
    provinciaSeleccionada = e.srcElement.value;
})


document.querySelector('form').addEventListener("submit", e => {
    if (provinciaSeleccionada == "Provincia") {
        alert("Tienes que seleccionar una provincia");
        seleccionarProvincia = false;
    }
    console.log(provinciaSeleccionada);
})

//Validación DNI
let dni = document.getElementById("dni");
let span = document.getElementById("alerts")
let dniCorrecto = false;
console.log(dni);
dni.addEventListener("blur", e => {
    let tamaño = dni.value.length;

    for (i = 0; i < tamaño - 1; i++) {

        if (tamaño != 9) {
            dni.style.border = "1px solid red";
            span.innerText = "El DNI tiene que tener el siguiente formato '12345678A'";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            dniCorrecto = false;
            break;

        } else if (Number.isNaN(parseInt(dni.value[i]))) {
            dni.style.border = "1px solid  red"
            span.innerText = "El DNI tiene que tener el siguiente formato '12345678A'";
            span.style.padding = "3px";
            dniCorrecto = false;
            break;

        } else if (Number.isNaN(parseInt(dni.value[8])) == false) {
            dni.style.border = "1px solid  red"
            span.innerText = "El DNI tiene que tener el siguiente formato '12345678A'";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            dniCorrecto = false;
            break;

        } else {
            span.innerText = "";
            span.style.backgroundColor = "transparent";
            dni.style.borderColor = 'lightgray';
            dniCorrecto = true;
        }
    }

    if (dni.value == "") {
        dni.style.border = "1px solid  red"
        span.innerText = "El DNI tiene que tener el siguiente formato '12345678A'";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        dniCorrecto = false;
    }
})

//Validación Nombre
let nombre = document.getElementById('nombre');

let nombreCorrecto = false;
nombre.addEventListener('blur', e => {
    let probado = false;
    if (nombre.value.length < 3) {
        nombre.style.border = "1px solid  red"
        span.innerText = "El Nombre tiene que contener minimo tres caracteres";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        nombreCorrecto = false;
        probado = true;
    } else {
        for (let i = 0; i < nombre.value.length; i++) {
            if (Number(!isNaN(nombre.value[i]))) {
                nombre.style.border = "1px solid  red"
                span.innerText = "El Nombre no puede contener números";
                span.style.padding = "3px";
                span.style.backgroundColor = "red";
                span.style.color = "white";
                nombreCorrecto = false;
                probado = true;
                break;
            }
        }
    }

    if (probado == false) {
        nombreCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        nombre.style.borderColor = 'lightgray';
    }
})


//Validación Apellido 1
let apellido1 = document.getElementById('apellido1');

let apellido1Correcto = false;
apellido1.addEventListener('blur', e => {
    let probado2 = false;
    if (apellido1.value.length < 3) {
        apellido1.style.border = "1px solid  red"
        span.innerText = "El Apellido tiene que contener minimo tres caracteres";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        apellido1Correcto = false;
        probado2 = true;
    } else {
        for (let i = 0; i < apellido1.value.length; i++) {
            if (Number(!isNaN(apellido1.value[i]))) {
                apellido1.style.border = "1px solid  red"
                span.innerText = "El Apellido no puede contener números";
                span.style.padding = "3px";
                span.style.backgroundColor = "red";
                span.style.color = "white";
                apellido1Correcto = false;
                probado2 = true;
                break;
            }
        }
    }

    if (probado2 == false) {
        apellido1Correcto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        apellido1.style.borderColor = 'lightgray';
    }
})

//Validación Apellido 2
let apellido2 = document.getElementById('apellido2');
let apellido2Correcto = false;

apellido2.addEventListener('blur', e => {
    let probado3 = false;
    if (apellido2.value.length < 3) {
        apellido2.style.border = "1px solid  red"
        span.innerText = "El Apellido tiene que contener minimo tres caracteres";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        apellido2Correcto = false;
        probado3 = true;
    } else {
        for (let i = 0; i < apellido2.value.length; i++) {
            if (Number(!isNaN(apellido2.value[i]))) {
                apellido2.style.border = "1px solid  red"
                span.innerText = "El Apellido no puede contener números";
                span.style.padding = "3px";
                span.style.backgroundColor = "red";
                span.style.color = "white";
                apellido2Correcto = false;
                probado3 = true;
                break;
            }
        }
    }

    if (probado3 == false) {
        apellido2Correcto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        apellido2.style.borderColor = 'lightgray';
    }
})

//VALIDACIÓN CALLE
let calle = document.getElementById('calle');
let calleCorrecto = false;

calle.addEventListener('blur', e => {
    if (calle.value < 3) {
        calle.style.border = "1px solid  red"
        span.innerText = "La calle tiene que contenertener menos de 3 caracteres";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        calleCorrecto = false;
    } else {
        calleCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        calle.style.borderColor = 'lightgray';
    }
})


//VALIDAR CODIGO POSTAL
let postal = document.getElementById('postal');
let postalCorrecto = false;
let corrector = false;

postal.addEventListener('blur', e => {
    corrector = false;

    for (let i = 0; i < postal.value.length; i++) {



        if (Number.isNaN(parseInt(postal.value[i]))) {
            postal.style.border = "1px solid  red"
            span.innerText = "El codigo postal no puede contener letras";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            postalCorrecto = false;
            corrector = true;
        }
    }

    if (corrector == false) {
        if (postal.value.length != 5) {
            postal.style.border = "1px solid  red"
            span.innerText = "El codigo postal tiene que tener 5 caracteres";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            postalCorrecto = false;
        } else {
            postalCorrecto = true;
            span.innerText = "";
            span.style.backgroundColor = "transparent";
            postal.style.borderColor = 'lightgray';
        }
    }

})

//VALIDAR LOCALIDAD
let localidad = document.getElementById('localidad');
let localidadCorrecto = false;

localidad.addEventListener('blur', e => {
    let probado4 = false;
    if (localidad.value.length < 3) {
        localidad.style.border = "1px solid  red"
        span.innerText = "La localidad tiene que contener minimo tres caracteres";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        localidadCorrecto = false;
        probado4 = true;
    } else {
        for (let i = 0; i < localidad.value.length; i++) {
            if (Number(!isNaN(localidad.value[i]))) {
                localidad.style.border = "1px solid  red"
                span.innerText = "La localidad no puede contener números";
                span.style.padding = "3px";
                span.style.backgroundColor = "red";
                span.style.color = "white";
                localidadCorrecto = false;
                probado4 = true;
                break;
            }
        }
    }

    if (probado4 == false) {
        localidadCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        localidad.style.borderColor = 'lightgray';
    }
})


//VALIDAR PROVINCIA
let provincia2 = document.getElementById('provincias');
let provinciaCorrecto = false;

provincia2.addEventListener('change', e => {
    if (provincia2.value == "Provincia") {
        provincia2.style.border = "1px solid  red"
        span.innerText = "Tienes que selecionar una provincia";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        provinciaCorrecto = false;
    } else {
        provinciaCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        provincia2.style.borderColor = 'lightgray';
    }
})

provincia2.addEventListener('blur', e => {
    if (provincia2.value == "Provincia") {
        provincia2.style.border = "1px solid  red"
        span.innerText = "Tienes que selecionar una provincia";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        provinciaCorrecto = false;
    } else {
        provinciaCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        provincia2.style.borderColor = 'lightgray';
    }
})

//Validar departamento
let departamento = document.getElementById('depart');
let departamentoCorrecto = false;

departamento.addEventListener('change', e => {
    if (departamento.value == "Departamento") {
        departamento.style.border = "1px solid  red"
        span.innerText = "Tienes que selecionar un departamento";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        departamentoCorrecto = false;
    } else {
        departamentoCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        departamento.style.borderColor = 'lightgray';
    }
})

departamento.addEventListener('blur', e => {
    if (departamento.value == "Departamento") {
        departamento.style.border = "1px solid  red"
        span.innerText = "Tienes que selecionar un departamento";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        departamentoCorrecto = false;
    } else {
        departamentoCorrecto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        departamento.style.borderColor = 'lightgray';
    }
})

//Validar Cargo Empresa
let empresaCorrecto = false

cargoEmpresa.addEventListener('blur', e => {

    for (let i = 0; i < cargoEmpresa.value.length; i++) {

        if (Number.isNaN(parseInt(cargoEmpresa.value[i]))) {
            cargoEmpresa.style.border = "1px solid red";
            span.innerText = "El campo no puede contener letras";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            empresaCorrecto = false;
            break;
        } else {
            empresaCorrecto = true;
            span.innerText = "";
            span.style.backgroundColor = "transparent";
            cargoEmpresa.style.borderColor = 'lightgray';
        }
    }

    if (cargoEmpresa.value == "") {
        cargoEmpresa.style.border = "1px solid red";
        span.innerText = "El campo no puede quedar vacio";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        empresaCorrecto = false;

    }

})


//Validar Telefono
let telefono = document.getElementById('telefono');
let telefonoCorrecto = false;

telefono.addEventListener('blur', e => {
    for (let i = 0; i < telefono.value.length; i++) {

        if (Number.isNaN(parseInt(telefono.value[i]))) {
            telefono.style.border = "1px solid red";
            span.innerText = "El campo no puede contener letras";
            span.style.padding = "3px";
            span.style.backgroundColor = "red";
            span.style.color = "white";
            telefonoCorrecto = false;
            break;
        } else {
            telefonoCorrecto = true;
            span.innerText = "";
            span.style.backgroundColor = "transparent";
            telefono.style.borderColor = 'lightgray';
        }

    }

    if (telefono.value.length != 9) {
        telefono.style.border = "1px solid red";
        span.innerText = "El campo tiene que contener 9 digitos";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        telefonoCorrecto = false;
    }
})






//FUNCION VALIDAR EMAIL (COPY PASTE DE GOOGLE)
function validarEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

//Validacion email 1
let email1 = document.getElementById('email1');
let email1Correcto = false;

email1.addEventListener('blur', e => {
    if (validarEmail(email1.value) == false) {
        email1.style.border = "1px solid  red"
        span.innerText = "El email tiene que tener el siguente formato: 'nombre@dominio.extension'";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        email1Correcto = false;
    } else {
        email1Correcto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        email1.style.borderColor = 'lightgray';
    }

})

//Validación EMAIL == EMAIL2
let email2 = document.getElementById('email2');
let email2Correcto = false;

email2.addEventListener('blur', e => {
    if (email2.value != email1.value) {
        email2.style.border = "1px solid  red"
        email1.style.border = "1px solid  red"
        span.innerText = "Los Emails tienen que coincidir";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        email2Correcto = false;
    } else {
        email2Correcto = true;
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        email1.style.borderColor = 'lightgray';
        email2.style.borderColor = 'lightgray';
    }

})

//Validación IBAN
let ibanCorrecto = false

function ValidateIBAN(IBAN) {

    //Se pasa a Mayusculas
    IBAN = IBAN.toUpperCase();
    //Se quita los blancos de principio y final.
    IBAN = IBAN.trim();
    IBAN = IBAN.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena

    let letra1, letra2, num1, num2;
    let isbanaux;
    let numeroSustitucion;
    //La longitud debe ser siempre de 24 caracteres
    if (IBAN.length != 24) {
        return false;
    }

    // Se coge las primeras dos letras y se pasan a números
    letra1 = IBAN.substring(0, 1);
    letra2 = IBAN.substring(1, 2);
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    //Se sustituye las letras por números.
    isbanaux = String(num1) + String(num2) + IBAN.substring(2);
    // Se mueve los 6 primeros caracteres al final de la cadena.
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);

    //Se calcula el resto, llamando a la función modulo97, definida más abajo
    resto = modulo97(isbanaux);
    if (resto == 1) {
        return true;
    } else {
        return false;
    }
}

function modulo97(iban) {
    var parts = Math.ceil(iban.length / 7);
    var remainer = "";

    for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
    }

    return remainer;
}

function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
}

let ibanUser = document.getElementById('iban');

ibanUser.addEventListener('blur', e => {
    let correcto = ValidateIBAN(ibanUser.value);

    if (correcto == false) {
        span.innerText = "El IBAN no es válido"
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
        ibanCorrecto = false
    } else {
        iban.style.borderColor = "transparent";
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        ibanCorrecto = true;
    }

    if (ibanUser.value == "") {
        span.innerText = "";
        span.style.backgroundColor = "transparent";
        ibanCorrecto = false
    }


})

let todo = document.querySelectorAll('body *');
let incompleto = false;
let reenviador = document.querySelector('input[type="submit"]');
reenviador.addEventListener('click', e => {
    e.preventDefault();
    let incompleto = false;
    for (let x = 0; x < todo.length; x++) {
        if (todo[x].value == "" && todo[x].classList.contains('required')) {
            incompleto = true;
            break;
        }
    }

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].value == "" && todo[i].classList.contains('required')) {
            todo[i].style.borderColor = 'red';

        } else if (departamento.value == "Departamento") {
            departamento.style.border = "1px solid red"
        } else {
            todo[i].style.borderColor = 'gray'
        }

        if (provincia2.value == "Provincia") {
            provincia2.style.border = "1px solid red"
        }
    }

    if (incompleto == false && calleCorrecto == true && dniCorrecto == true && nombreCorrecto == true && apellido1Correcto == true && apellido2Correcto == true && postalCorrecto == true && localidadCorrecto == true && provinciaCorrecto == true && departamentoCorrecto == true && empresaCorrecto == true && email1Correcto == true && email2Correcto == true && telefonoCorrecto == true && ibanCorrecto == true) {
        
        window.location.replace("./HTML/datosEmpresa.html");
    } else {
        e.preventDefault();
        email2.style.border = "1px solid  red"
        email1.style.border = "1px solid  red"
        span.innerText = "Debes de rellenar bien lso campos antes de continuar";
        span.style.padding = "3px";
        span.style.backgroundColor = "red";
        span.style.color = "white";
    }
})