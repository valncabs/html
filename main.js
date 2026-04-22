function ShowMenu(){
    var btn = document.getElementById("button_menu")
    var nav = document.getElementsByClassName("main-menu")

    if (nav[0].classList.contains("active")){
        btn.innerText = "≡"
    }else{
        btn.innerText = "≡"
    }

    nav[0].classList.toggle("active")
}

function MostrarContenido(){
    var button = document.getElementById('button')
    var caja = document.getElementsByClassName('contenedor')[0].getElementsByClassName('caja')

    caja[0].classList.toggle('hidden')

    caja[1].classList.toggle('hidden')

    caja[2].classList.toggle('hidden')

    if (caja[0].classList.contains('hidden')){
        button.innerText = 'Mostrar';
    }else{
        button.innerText = 'Ocultar'
    }
}

