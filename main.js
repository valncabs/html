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
