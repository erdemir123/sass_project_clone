const persons= document.querySelectorAll(".person")
const left= document.querySelector(".fa-arrow-left")
const right= document.querySelector(".fa-arrow-right")
let index = 0
left.addEventListener("click",()=>{
    persons[index].classList.remove("active")
    index= (index-1+ persons.length) % persons.length
    console.log(index)
    persons[index].classList.add("active")
})
right.addEventListener("click",()=>{
    persons[index].classList.remove("active")
    index= (index+1) % persons.length
    console.log(index)
    persons[index].classList.add("active")
})
