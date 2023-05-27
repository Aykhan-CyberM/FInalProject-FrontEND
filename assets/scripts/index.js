const brandFacebook = document.querySelector(".brand_facebook")
const brandTwitter = document.querySelector(".brand_twitter")
brandTwitter.addEventListener("click", () => {
    makeActive(brandTwitter, "activeIcon")
})
brandFacebook.addEventListener("click", () => {
    makeActive(brandFacebook, "activeIcon")
    
})
function makeActive(obj, active) {
    if (obj.classList.contains(active)) {
        obj.classList.remove(active);
    } else {
        obj.classList.add(active);
    }
    
   document.addEventListener('click',(event)=>{
    if(!obj.contains(event.target)){
        obj.classList.remove(active)
    }
   })
}

