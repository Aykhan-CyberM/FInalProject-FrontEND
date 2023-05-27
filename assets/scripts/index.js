const eng = document.querySelector("#eng")
const usd = document.querySelector("#usd")
const brandContainer = document.querySelector(".icons").querySelectorAll("i")
const engSection = document.querySelector("#English")
const usdSection = document.querySelector("#USD")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
const show =  document.querySelector(".show")
const topAnimation = document.querySelector(".showAnimation")

const topNavDropdownSellections = document.querySelector(".sellections").querySelectorAll("p");
topNavDropdownSellections.forEach((links) => links.addEventListener('click', () => {
    links.classList.add(show)
}));

// brands hoverAndActive top navbar
usdSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(usd, "Rotate", usdSection,currency)
    makeActive(currency, "topAnimation")
})

engSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(eng, "Rotate", engSection,language);
    if (language.style.top != "55px" ){ 
        language.style.top = "55px"
        language.style.opacity = "1"
    } else {
        language.style.top = "80px"
        language.style.opacity = "0"
    }
});

brandContainer.forEach(btn=> btn.addEventListener('click',()=>{
    makeActive(btn, "activeIcon")
}))


// activeFunction

function AddAnimation(){

}
 
function makeActive(Element, active) {
    if (Element.classList.contains(active) ){
        Element.classList.remove(active);
    } else {
        Element.classList.add(active);
    }
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)){
            Element.classList.remove(active)
        }
    })
}


function makeAcrtiveDropdowns(Element, active, container,show) {
    if (Element.classList.contains(active) && show.style.visibility == "visible") {
        Element.classList.remove(active);
        show.style.visibility = "hidden"
    } else {
        Element.classList.add(active);
        show.style.visibility = "visible";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target) && !show.contains(event.target)) {
            Element.classList.remove(active)
            show.style.visibility = "hidden";
        }
    })
}

