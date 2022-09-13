const choose= document.querySelector(".choose")
const mounthly= document.querySelector(".mounthly")
const mount= document.querySelectorAll(".mounth")
const yearly= document.querySelector(".yearly")
const year= document.querySelectorAll(".years")





choose.addEventListener("click",(e)=>{
    if(e.target.classList=="mounthly"){
        mounthly.classList.add("active")
        yearly.classList.remove("active")
        mount.forEach(item=>item.style.display='block')
        year.forEach(item=>item.style.display='none')
    }
    if(e.target.classList=="yearly"){
        mounthly.classList.remove("active")
        yearly.classList.add("active")
        mount.forEach(item=>item.style.display='none')
        year.forEach(item=>item.style.display='block')
    }
})
