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
const searchArea = document.querySelector('#searchArea');
const searchAreaFotter = document.querySelector('#email__adress');
const burgermenuBtn = document.querySelector('.burgermenuBtn');
const burgermenu = document.querySelector('.burgermenu__mainnavbar');
const smallNav = document.querySelector('.main__navbar-smaller');



///responsive 
const homeBtn2 = document.querySelector('#homeBtn2');
const homeDropdown2 = document.querySelector('.home__dropdown2');
const homeArrow2 = document.querySelector('#homeArrow2');
const shopBtn2 = document.querySelector('#shopBtn2');
const shopDropdown2 = document.querySelector('.shop__dropdown2');
const shopArrow2 = document.querySelector('#shopArrow2');
const iconsBtn2 = document.querySelector('#iconsBtn2');
const iconsDropdown2 = document.querySelector('.icons__dropdown2');
const iconsArrow2 = document.querySelector('#iconsArrow2');
const pagesBtn2 = document.querySelector('#pagesBtn2');
const pagesDropdown2 = document.querySelector('.pages__dropdown2');
const pagesArrow2 = document.querySelector('#pagesArrow2');
const docsBtn2 = document.querySelector('#docsBtn2');
const docsDropdown2 = document.querySelector('.docs__dropdown2');
const docsArrow2 = document.querySelector('#docsArrow2');
const menu = document.querySelector('.burgermenu__mainnavbar');

////
homeBtn2.addEventListener('click', () => {
    toggleDropdown2(homeBtn2, homeDropdown2, homeArrow2)
    makeActive(homeBtn2, "padding")
})

shopBtn2.addEventListener('click', () => {
    toggleDropdown2(shopBtn2, shopDropdown2, shopArrow2)
    makeActive(shopBtn2, "padding2")
})

iconsBtn2.addEventListener('click', () => {
    toggleDropdown2(iconsBtn2, iconsDropdown2, iconsArrow2)
    makeActive(iconsBtn2, "padding2")
})

pagesBtn2.addEventListener('click', () => {
    toggleDropdown2(pagesBtn2, pagesDropdown2, pagesArrow2)
    makeActive(pagesBtn2, "padding2")
    menu.classList.toggle("height")
})
docsBtn2.addEventListener('click', () => {
    toggleDropdown2(docsBtn2, docsDropdown2, docsArrow2)
    makeActive(docsBtn2, "padding2")
})



///

burgermenuBtn.addEventListener('click', () => {
    toggleDropdown(burgermenuBtn, burgermenu, shopArrow)
    makeActive(smallNav, "bcolorWhite")
})



brandContainer.forEach(btn => btn.addEventListener('click', () => {
    makeActive(btn, "activeIcon")
}))

searchAreaFotter.addEventListener('click', () => {
    makeActive(searchAreaFotter, "borderBlack")
});

searchArea.addEventListener('click', () => {
    makeActive(searchArea, "borderBlack")
});

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


function toggleDropdown(btn, dropdown, arrow) {
    dropdown.classList.toggle('show');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
        }
    })
}

function toggleDropdown2(btn, dropdown, arrow) {
    dropdown.classList.toggle('show__burger');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    burgermenu.classList.add("PosStatic")
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show__burger');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
            smallNav.classList.remove('bcolorWhite')
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

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100000,
        fade: false,
        prevArrow: false,
        nextArrow: false
    });
});


