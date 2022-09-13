const up = document.querySelectorAll(".fa-chevron-up")
up.forEach(item=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("active")
    item.parentElement.parentElement.classList.toggle("active")
    })
})