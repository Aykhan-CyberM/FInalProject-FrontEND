const brandFacebook = document.querySelector(".brand_facebook")
const brandTwitter = document.querySelector(".brand_twitter")
const eng = document.querySelector("#eng")
const usd = document.querySelector("#usd")
const engSection = document.querySelector("#English")
const usdSection = document.querySelector("#USD")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")

// brands hoverAndActive top navbar
brandTwitter.addEventListener("click", () => {
    makeActive(brandTwitter, "activeIcon", brandTwitter)
})

brandFacebook.addEventListener("click", () => {
    makeActive(brandFacebook, "activeIcon", brandFacebook)
})

usdSection.addEventListener('click', () => {
    makeActive(usd, "Rotate", usdSection)
    displayElement(currency)
})

engSection.addEventListener('click', () => {
    makeActive(eng, "Rotate", engSection);
    displayElement(language)
});



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

