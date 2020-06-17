const piedra = document.querySelector('#piedra'),
      papel = document.querySelector('#papel'),
      tijera = document.querySelector('#tijera'),
      nombreUsuario = document.querySelector('.miPuntaje .nombre'),
      nombreComputadora = document.querySelector('.pcPuntaje .nombre'),
      puntajeUsuario = document.querySelector('.miPuntaje .puntos'),
      puntajeComputadora = document.querySelector('.pcPuntaje .puntos');
      resultado = document.querySelector('#resultado'),
      manoUsuario = document.querySelector('#manoUsuario img'),
      manoComputadora = document.querySelector('#manoPc img'),
      manos = document.querySelector('.manos'),
      botonEmpezar = document.querySelector('#empezar'),
      opciones = document.querySelector('#opciones'),
      popupEmpezar = document.querySelector('.overlay'),
      tuNombre = document.querySelector('.overlay #inputUsuario'),
      aceptarNombre =document.querySelector('#btnAceptar');
let eleccionUsuario = "",
    eleccionComputadora = "",
    puntosComputadora = 0,
    puntosUsuario = 0;

    botonEmpezar.focus();

// Botón "Empezar", abre popup para ingresar nombre
botonEmpezar.addEventListener('click', () => {
    puntajeUsuario.textContent = 0;
    puntajeComputadora.textContent = 0;
    puntosComputadora = 0,
    puntosUsuario = 0;
    manoUsuario.src = "img/mano1.png";
    manoComputadora.src = "img/mano1.png";
    document.getElementById("resultado").style.color = "#424242";
    resultado.innerHTML = "🙂";
    popupEmpezar.classList.add('active');
    botonEmpezar.classList.remove('active');
    botonEmpezar.focus();
    tuNombre.focus();
})

tuNombre.addEventListener('keypress', (e) => {
    if(e.keyCode == 13)
    {
      aceptarNombre.click();
    }
})

// Ingresar nombre y cerrar popup
aceptarNombre.addEventListener('click', () => {
    popupEmpezar.classList.remove('active');
    opciones.classList.add('active');
    
    nombreUsuario.textContent = tuNombre.value;
    if ( tuNombre.value == '' ) {
        nombreUsuario.textContent = 'Yo';
    }
})


// Obtener elección aleatoria de la computadora
const obtenerEleccionComputadora = () => {
    let numeroAlAzar = Math.floor(Math.random() * 3)
    
    if( numeroAlAzar == 0 ) {
        eleccionComputadora = "piedra";
        manoComputadora.src = "img/piedra.png";
    } else if ( numeroAlAzar == 1 ) {
        eleccionComputadora = "papel";
        manoComputadora.src = "img/papel.png";
    } else {
        eleccionComputadora = "tijera";
        manoComputadora.src = "img/tijera.png";
    }
}

// Resultado de la partida
const obtenerResultado = () => {
    if ( eleccionUsuario == eleccionComputadora ) {
        resultado.innerHTML = "¡Empate! 🤪 Elegí nuevamente una opción";
    } else if ( eleccionUsuario == "piedra" && eleccionComputadora == "papel" ) {
        puntosComputadora++;
        puntajeComputadora.textContent = puntosComputadora;
        resultado.innerHTML = "Perdiste, " + eleccionComputadora + " le gana a " + eleccionUsuario + " 😕";
    } else if ( eleccionUsuario == "piedra" && eleccionComputadora == "tijera" ) {
        resultado.innerHTML = "Ganaste, " + eleccionUsuario + " le gana a " + eleccionComputadora + " 🍺";
        puntosUsuario++;
        puntajeUsuario.textContent = puntosUsuario;
    } else if ( eleccionUsuario == "papel" && eleccionComputadora == "piedra" ) {
        resultado.innerHTML = "Ganaste, " + eleccionUsuario + " le gana a " + eleccionComputadora + " 🍺";
        puntosUsuario++;
        puntajeUsuario.textContent = puntosUsuario;
    } else if ( eleccionUsuario == "papel" && eleccionComputadora == "tijera" ) {
        resultado.innerHTML = "Perdiste, " + eleccionComputadora + " le gana a " + eleccionUsuario + " 😕";
        puntosComputadora++;
        puntajeComputadora.textContent = puntosComputadora;
    } else if ( eleccionUsuario == "tijera" && eleccionComputadora == "piedra" ) {
        resultado.innerHTML = "Perdiste, " + eleccionComputadora + " le gana a " + eleccionUsuario + " 😕";
        puntosComputadora++;
        puntajeComputadora.textContent = puntosComputadora;
    } else if ( eleccionUsuario == "tijera" && eleccionComputadora == "papel" ) {
        resultado.innerHTML = "Ganaste, " + eleccionUsuario + " le gana a " + eleccionComputadora + " 🍺";
        puntosUsuario++;
        puntajeUsuario.textContent = puntosUsuario;
    }

    if ( puntosUsuario == 3 ) {
        resultado.innerHTML = "<h3>¡FELICITACIONES! Ganaste 🥂</h3>"
        document.getElementById("resultado").style.color = "rgb(107, 142, 35)";
        botonEmpezar.classList.add('active');
        opciones.classList.remove('active');
        botonEmpezar.focus();
        } else if (puntosComputadora == 3 ) {
        resultado.innerHTML = "<h3>¡Ouch! Perdiste 😨</h3>"
        document.getElementById("resultado").style.color = "rgb(212, 60, 33)";
        botonEmpezar.classList.add('active');
        opciones.classList.remove('active');
        botonEmpezar.focus();
    }
}

// Elección del usuario "Piedra"
piedra.onclick = () => {
    manoUsuario.src = "img/mano1.png";
    manoComputadora.src = "img/mano1.png";
    manoUsuario.classList.add("jugando");
    manoComputadora.classList.add("jugando");
    setTimeout(() => {
        manoUsuario.classList.remove("jugando");
        manoComputadora.classList.remove("jugando");
        eleccionUsuario = "piedra";
        manoUsuario.src = "img/piedra.png";
        obtenerEleccionComputadora();
        obtenerResultado();
    }, 2000)
}

// Elección del usuario "Papel"
papel.onclick = () => {
    manoUsuario.src = "img/mano1.png";
    manoComputadora.src = "img/mano1.png";
    manoUsuario.classList.add("jugando");
    manoComputadora.classList.add("jugando");
    setTimeout(() => {
        manoUsuario.classList.remove("jugando");
        manoComputadora.classList.remove("jugando");
        eleccionUsuario = "papel";
        manoUsuario.src = "img/papel.png";
        obtenerEleccionComputadora();
        obtenerResultado();
    }, 2000)
}

// Elección del usuario "Tijera"
tijera.onclick = () => {
    manoUsuario.src = "img/mano1.png";
    manoComputadora.src = "img/mano1.png";
    manoUsuario.classList.add("jugando");
    manoComputadora.classList.add("jugando");
    setTimeout(() => {
        manoUsuario.classList.remove("jugando");
        manoComputadora.classList.remove("jugando");
        eleccionUsuario = "tijera";
        manoUsuario.src = "img/tijera.png";
        obtenerEleccionComputadora();
        obtenerResultado();
    }, 2000)
}