let menu = document.querySelector(".navbar")
let item = document.querySelectorAll(".navbar-item")
let menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("active")
    menuBtn.classList.toggle("fa-times")
    item.forEach(item=>item.classList.toggle("active"))
})