const langageAll = document.querySelectorAll(".til")
const like = document.querySelector(".like")
const line = document.querySelector(".line")

langageAll.forEach((langage)=>{
    langage.addEventListener("click", ()=>{
        langageAll.forEach(el => el.classList.remove("active"))
        langage.classList.add("active")
    })
})

like.addEventListener("click", ()=>{
    like.classList.toggle("active")
    line.classList.toggle("active")
})