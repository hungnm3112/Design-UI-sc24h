document.addEventListener("DOMContentLoaded",()=>{
    let liTags = Array.from(document.querySelectorAll(".carousel-indicators>li"))    
    for(let li of liTags){                     
        li.addEventListener("mouseover",(event)=>event.target.click())
    }
})