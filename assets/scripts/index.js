const eng = document.querySelector("#eng")
const usd = document.querySelector("#usd")
const brandContainer = document.querySelector(".icons").querySelectorAll("i")
const engSection = document.querySelector("#English")
const usdSection = document.querySelector("#USD")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
// brands hoverAndActive top navbar


usdSection.addEventListener('click', () => {
    makeActive(usd, "Rotate", usdSection)
    displayElement(currency)
})

engSection.addEventListener('click', () => {
    makeActive(eng, "Rotate", engSection);
    displayElement(language)
});

brandContainer.forEach(btn=> btn.addEventListener('click',()=>{
    makeActive(btn, "activeIcon", btn)
}))


// activeFunction
function displayElement(obj) {
    if (obj.style.visibility != "visible") {
        obj.style.visibility = "visible"
    }
    else {
        obj.style.visibility = "hidden";
    }
}

function makeActive(obj, active, container) {
    if (obj.classList.contains(active)) {
        obj.classList.remove(active);
    } else {
        obj.classList.add(active);
    }

    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            obj.classList.remove(active)
        }
    })
}

