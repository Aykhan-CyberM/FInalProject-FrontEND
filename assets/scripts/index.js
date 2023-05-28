const eng = document.querySelector("#eng")
const usd = document.querySelector("#usd")
const brandContainer = document.querySelector(".icons").querySelectorAll("i")
const engSection = document.querySelector("#English")
const usdSection = document.querySelector("#USD")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
const show = document.querySelector(".show")
const topAnimation = document.querySelector(".showAnimation")

const topNavDropdownSellections = document.querySelector(".sellections").querySelectorAll("p");


// brands hoverAndActive top navbar
usdSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(usd, "Rotate", usdSection, currency)
})

engSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(eng, "Rotate", engSection, language);
});

brandContainer.forEach(btn => btn.addEventListener('click', () => {
    makeActive(btn, "activeIcon")
}))


// activeFunction

function makeActive(Element, active) {
    if (Element.classList.contains(active)) {
        Element.classList.remove(active);
    } else {
        Element.classList.add(active);
    }
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)) {
            Element.classList.remove(active)
        }
    })
}

function makeAcrtiveDropdowns(Element
    , active, container, show) {
    if (Element.classList.contains(active) && show.style.visibility == "visible") {
        Element.classList.remove(active);
        show.classList.remove("DropAnimate");
    } else {
        Element.classList.add(active);
        show.style.visibility = "visible";
        show.classList.add("DropAnimate");
        show.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target) && !show.contains(event.target)) {
            Element.classList.remove(active)
            show.classList.remove("DropAnimate");
            show.style.pointerEvents = "none";
        }
    })
    topNavDropdownSellections.forEach((links) => links.addEventListener('click', () => {
        show.classList.remove("DropAnimate");
        show.style.pointerEvents = "none";
        Element.classList.remove(active);
        console.log('afds')
    }));
}

