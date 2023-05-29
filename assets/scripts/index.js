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
const mainNavDropdownSellections = document.querySelector(".main__dropdowns").querySelectorAll("p");
const homebtn = document.querySelector('#home')
const homeDropdown = document.querySelector('.home__Dropdown')
const homeArrow = document.querySelector('#homeArrow')
const shopbtn = document.querySelector('#shop')
const shopDropdown = document.querySelector('.shop__Dropdown')
const shopArrow = document.querySelector('#shopArrow')
const iconsbtn = document.querySelector('#icons')
const iconsDropdown = document.querySelector('.icons__Dropdown')
const iconsArrow = document.querySelector('#iconsArrow')
const pagesbtn = document.querySelector('#pages')
const pagesDropdown = document.querySelector('.pages__Dropdown')
const pagesArrow = document.querySelector('#pagesArrow')
const docsbtn = document.querySelector('#docs')
const docsDropdown = document.querySelector('.docs__Dropdown')
const docsArrow = document.querySelector('#docsArrow')

// brands hoverAndActive top navbar
docsbtn.addEventListener('click',()=>{
    makeAcrtiveDropdowns(docsArrow,"Rotate",docsbtn,docsDropdown,"DropAnimate2",mainNavDropdownSellections)
})
pagesbtn.addEventListener('click',()=>{
    makeAcrtiveDropdowns(pagesArrow,"Rotate",pagesbtn,pagesDropdown,"DropAnimate2",mainNavDropdownSellections)
})
iconsbtn.addEventListener('click',()=>{
    makeAcrtiveDropdowns(iconsArrow,"Rotate",iconsbtn,iconsDropdown,"DropAnimate2",mainNavDropdownSellections)
})
homebtn.addEventListener('click',()=>{
    makeAcrtiveDropdowns(homeArrow,"Rotate",homebtn,homeDropdown,"DropAnimate2",mainNavDropdownSellections)
})
shopbtn.addEventListener('click',()=>{
    makeAcrtiveDropdowns(shopArrow,"Rotate",shopbtn,shopDropdown,"DropAnimate2",mainNavDropdownSellections)
})

usdSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(usd, "Rotate", usdSection, currency,"DropAnimate",topNavDropdownSellections)
})

engSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(eng, "Rotate", engSection, language,"DropAnimate",topNavDropdownSellections);
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

function makeAcrtiveDropdowns(Element, active, container, show,Animation,sellections) {
    if (Element.classList.contains(active) && show.style.visibility == "visible") {
        Element.classList.remove(active);
        show.classList.remove(Animation);
    } else {
        Element.classList.add(active);
        show.style.visibility = "visible";
        show.classList.add(Animation);
        show.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target) && !show.contains(event.target)) {
            Element.classList.remove(active)
            show.style.pointerEvents = "none";
            show.classList.remove(Animation);
        }
    })
    sellections.forEach((links) => links.addEventListener('click', () => {
        show.classList.remove(Animation);
        show.style.pointerEvents = "none";
        Element.classList.remove(active);
    }));
}
