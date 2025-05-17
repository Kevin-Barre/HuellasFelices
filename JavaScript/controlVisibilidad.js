
function visibilidadPantalla(id) {
    // Ocultar todo el contenido principal
    document.getElementById('cabecera').style.display = 'none';
    document.getElementById('contenedorCartas').style.display = 'none';
    document.getElementById('showHiden').style.display = 'none';
    document.getElementById('piePagina').style.display = 'none';
    
    
    // Mostrar solo el contenido del id específico
    document.getElementById(id).style.display = 'flex';
    if (id === 'showHidenLogin') {
        reiniciarRegistro();
    }
}

function mostrarOcultar(id) {
    const element = document.getElementById(id);
    
    if (element.style.display === 'flex'){
        element.style.display = 'none'; 
    } else {
        element.style.display = 'flex';
    }
}

function volverInicio() {
    // Mostrar el contenedor de tarjetas y otras secciones    
    document.getElementById('cabecera').style.display = 'block';
    document.getElementById('contenedorCartas').style.display = 'flex';
    document.getElementById('showHiden').style.display = 'block';
    document.getElementById('piePagina').style.display = 'block';
    
    
    // Ocultar el formulario de registro
    document.getElementById('showHidenLogin').style.display = 'none';
    document.getElementById('login1').style.display = 'none';
    document.getElementById('login2').style.display = 'none';
}


function mostrarSiguiente() {
    document.getElementById('login1').style.display = 'none';
    document.getElementById('login2').style.display = 'flex';
}

function validarContraseñas() {
    const password = document.getElementById('passw').value;
    const confirmPassword = document.getElementById('passwConfirm').value;
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return false;
    }
    return true;
}


//validar campos
function validarCampos() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('passw').value.trim();
    const confirmPassword = document.getElementById('passwConfirm').value.trim();

    if (!nombre || !apellido || !correo || !password || !confirmPassword) {
        alert('Por favor, complete todos los campos.');
        return false;
    }
    return true;
}


//limpiar los campos
function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('passw').value = '';
    document.getElementById('passwConfirm').value = '';
}

function registrarDatos() {
    if (!validarCampos()) {
        return; 
    }
    

    if (!validarContraseñas()) {
        return; 
    }
    
    alert('Registro completado con éxito');
    limpiarCampos();
    volverInicio();
}

// Función para reiniciar el formulario de registro
function reiniciarRegistro() {
    document.getElementById('login1').style.display = 'flex'; 
    document.getElementByIdr('login2').style.display = 'none'; 
}
