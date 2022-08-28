let toggle = document.getElementById('toggleDark');

toggle.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        toggle.classList = "fa-solid fa-sun";
    }else{
        toggle.classList = "fa-solid fa-moon"
    }
}
