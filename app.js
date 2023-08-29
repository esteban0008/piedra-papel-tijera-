let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

// Capturar los elementos DOM para el tablero de opciones elegidos por el usuario-cpompu
let manoUsuario = document.querySelector('.mano-usuario')
let manoCompu = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuario p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario = ""
let eleccionCompu = ""

let contUsuario = ""
let contCompu = ""

const swalInicio = () => {
    Swal.fire (
        '¿Jugamos?',
        'Gana el primero que alcance los 3 puntos.',
        'question'
    )
}
swalInicio()

botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_user.png"
    manoCompu.src = "./assets/piedra_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(()=>{
        eleccionUsuario= "piedra"
        manoUsuario.src = "./assets/101-1018362_fuckyou-sticker-hand-cursor-hd-png-download.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    }, 2000) 
}


botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_user.png"
    manoCompu.src = "./assets/papel_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(()=>{
        eleccionUsuario= "papel"
        manoUsuario.src = "./assets/papel_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    }, 2000) 
}

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_user.png"
    manoCompu.src = "./assets/tijera_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(()=>{
        eleccionUsuario= "tijera"
        manoUsuario.src = "./assets/tijera_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    }, 2000) 
}
const resultado = () =>{
    if (eleccionUsuario=="papel"){
        if (eleccionCompu=="papel" ){
           labelResultado.textContent="empate"
        }
        if (eleccionCompu=="tijera"){
            labelResultado.textContent="Gana compu"
            contCompu++
            puntajeComputador.textContent = contCompu 
            ganador(contCompu, contUsuario)
        }
        if (eleccionCompu=="piedra"){
            labelResultado.textContent="Gana usuario"
            contUsuario++
            puntajeUsuario.textContent = contUsuario
            ganador(contCompu,contUsuario)
        }
    }
    if (eleccionUsuario=="tijera"){
        if (eleccionCompu=="tijera"){
           labelResultado.textContent="empate"
        }
        if (eleccionCompu=="piedra"){
            labelResultado.textContent="Gana compu"
            contCompu++
            puntajeComputador.textContent = contCompu 
            ganador(contCompu, contUsuario)
        }
        if (eleccionCompu=="papel"){
            labelResultado.textContent="Gana usuario"
            contUsuario++
            puntajeUsuario.textContent = contUsuario
            ganador(contCompu,contUsuario)
        }
    }
    if (eleccionUsuario=="piedra"){
        if (eleccionCompu=="piedra"){
        labelResultado.textContent="empate"
        }
        if (eleccionCompu=="papel"){
        labelResultado.textContent="Gana compu"
        contCompu++
        puntajeComputador.textContent = contCompu 
        ganador(contCompu, contUsuario)
        }
        if (eleccionCompu=="tijera"){
        labelResultado.textContent="Gana usuario"
        contUsuario++
        puntajeUsuario.textContent = contUsuario
        ganador(contCompu,contUsuario)
        }       
    }

} 

const eleccionComputador = () =>{
    let opcionAlAzar = Math.floor(Math.random()*3)
    if ( opcionAlAzar == 0){
        manoCompu.src = "./assets/piedra_computadora.png"
        eleccionCompu="piedra"
    }else if (opcionAlAzar==1){
        manoCompu.src = "./assets/papel_computadora.png"
        eleccionCompu="papel"
    }else if(opcionAlAzar==2){
        manoCompu.src = "./assets/tijera_computadora.png"
        eleccionCompu="tijera"
    }
}

const ganador = (puntajeUsuario, puntajeComputador) =>{
    if(puntajeUsuario >= 3 && puntajeUsuario > puntajeComputador)
    {
        swal(ganador())
        setTimeout(1000)
    }else if(puntajeComputador >= 3 && puntajeComputador > puntajeUsuario){
        swal(ganador())
        setTimeout(1000)
    }
}

