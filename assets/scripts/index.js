const engArrow = document.querySelector("#engArrow")
const usdArrow = document.querySelector("#usdArrow")
const brandContainer = document.querySelector(".top__navbar-socialMedia").querySelectorAll("i")
const engSection = document.querySelector("#top__navbar-languageConatiner")
const usdSection = document.querySelector("#top__navbar-curencyConatiner")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
const topAnimation = document.querySelector(".showAnimation")
// const topNavDropdownSellections = document.querySelector(".sellections").querySelectorAll("p");
// const mainNavDropdownSellections = document.querySelector(".main__dropdowns").querySelectorAll("p");
// const homebtn = document.querySelector('#home')
// const homeDropdown = document.querySelector('.home__Dropdown')
// const homeArrow = document.querySelector('#homeArrow')
// const shopbtn = document.querySelector('#shop')
// const shopDropdown = document.querySelector('.shop__Dropdown')
// const shopArrow = document.querySelector('#shopArrow')
// const iconsbtn = document.querySelector('#icons')
// const iconsDropdown = document.querySelector('.icons__Dropdown')
// const iconsArrow = document.querySelector('#iconsArrow')
// const pagesbtn = document.querySelector('#pages')
// const pagesDropdown = document.querySelector('.pages__Dropdown')
// const pagesArrow = document.querySelector('#pagesArrow')
// const docsbtn = document.querySelector('#docs')
// const docsDropdown = document.querySelector('.docs__Dropdown')
// const docsArrow = document.querySelector('#docsArrow')

// brands hoverAndActive top navbar



// docsbtn.addEventListener('click',()=>{
//     makeAcrtiveDropdowns(docsArrow,"Rotate",docsbtn,docsDropdown,"DropAnimate2",mainNavDropdownSellections)
// })
// pagesbtn.addEventListener('click',()=>{
//     makeAcrtiveDropdowns(pagesArrow,"Rotate",pagesbtn,pagesDropdown,"DropAnimate2",mainNavDropdownSellections)
// })
// iconsbtn.addEventListener('click',()=>{
//     makeAcrtiveDropdowns(iconsArrow,"Rotate",iconsbtn,iconsDropdown,"DropAnimate2",mainNavDropdownSellections)
// })
// homebtn.addEventListener('click',()=>{
//     makeAcrtiveDropdowns(homeArrow,"Rotate",homebtn,homeDropdown,"DropAnimate2",mainNavDropdownSellections)
// })
// shopbtn.addEventListener('click',()=>{
//     makeAcrtiveDropdowns(shopArrow,"Rotate",shopbtn,shopDropdown,"DropAnimate2",mainNavDropdownSellections)
// })

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
    if (Element.classList.contains("Rotate") && show.style.visibility == "visible") {
        Element.classList.remove("Rotate");
        show.classList.remove("DropAnimate");
        show.style.pointerEvents = "none";

    } else {
        Element.classList.add("Rotate");
        show.style.visibility = "visible";
        show.classList.add("DropAnimate");
        show.style.pointerEvents = "";
        show.style.cursor = "default"
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            Element.classList.remove("Rotate")
            show.style.cursor = "default"
            show.style.pointerEvents = "none";
            show.classList.remove("DropAnimate");
        }
    })
}
