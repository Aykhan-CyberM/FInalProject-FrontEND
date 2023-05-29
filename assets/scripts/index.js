const engArrow = document.querySelector("#engArrow")
const usdArrow = document.querySelector("#usdArrow")
const brandContainer = document.querySelector(".top__navbar-socialMedia").querySelectorAll("i")
const engSection = document.querySelector("#top__navbar-languageConatiner")
const usdSection = document.querySelector("#top__navbar-curencyConatiner")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
const topAnimation = document.querySelector(".showAnimation")
const homeBtn = document.querySelector('#homeBtn');
const homeDropdown = document.querySelector('.home__dropdown');
const homeArrow = document.querySelector('#homeArrow');
const shopBtn = document.querySelector('#shopBtn');
const shopDropdown = document.querySelector('.shop__dropdown');
const shopArrow = document.querySelector('#shopArrow');
const iconsBtn = document.querySelector('#iconsBtn');
const iconsDropdown = document.querySelector('.icons__dropdown');
const iconsArrow = document.querySelector('#iconsArrow');
const pagesBtn = document.querySelector('#pagesBtn');
const pagesDropdown = document.querySelector('.pages__dropdown');
const pagesArrow = document.querySelector('#pagesArrow');
const docsBtn = document.querySelector('#docsBtn');
const docsDropdown = document.querySelector('.docs__dropdown');
const docsArrow = document.querySelector('#docsArrow');


brandContainer.forEach(btn => btn.addEventListener('click', () => {
    makeActive(btn, "activeIcon")
}))

engSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(engArrow, engSection, language);
});

usdSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(usdArrow, usdSection, currency)
})

// activeFunction
homeBtn.addEventListener('click', () => {
    toggleDropdown(homeBtn, homeDropdown, homeArrow)
})

shopBtn.addEventListener('click', () => {
    toggleDropdown(shopBtn, shopDropdown, shopArrow)
})

iconsBtn.addEventListener('click', () => {
    toggleDropdown(iconsBtn, iconsDropdown, iconsArrow)
})

pagesBtn.addEventListener('click', () => {
    toggleDropdown(pagesBtn, pagesDropdown, pagesArrow)
})
docsBtn.addEventListener('click', () => {
    toggleDropdown(docsBtn, docsDropdown, docsArrow)
})


function toggleDropdown(btn,dropdown , arrow) {
    dropdown.classList.toggle('show');
    arrow.classList.toggle('Rotate')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target)) {
            dropdown.classList.remove('show');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
        }
    })
}

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

function makeAcrtiveDropdowns(Element, container, show) {
    if (Element.classList.contains("Rotate")) {
        Element.classList.remove("Rotate");
        show.classList.remove("DropAnimate");

    } else {
        Element.classList.add("Rotate");
        show.style.visibility = "visible";
        show.classList.add("DropAnimate");
        show.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            Element.classList.remove("Rotate")
            show.style.pointerEvents = "none";
            show.classList.remove("DropAnimate");
        }
    })
}
