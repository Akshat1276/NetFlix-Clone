const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>{
    faq.addEventListener("click", ()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
        }
    })
 
})

function getstarted() {
    location.replace("https://www.w3schools.com")
  }