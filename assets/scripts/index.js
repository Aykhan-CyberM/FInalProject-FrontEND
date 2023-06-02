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
const menuSectionAbout = document.querySelector('.section1');


const accondFoterBtn = document.querySelector('.accondFoterBtn2')
const accondFoterBtn2 = document.querySelector('.accondFoterBtn')
const accondDropdownFooter = document.querySelector('.accond__dropdown')
accondFoterBtn.addEventListener('click', () => {
    accondDropdownFooter.classList.toggle('displayflex')
})
accondFoterBtn2.addEventListener('click', () => {
    accondDropdownFooter.classList.toggle('displayflex')
})

const shopFoterBtn = document.querySelector('#shopFoterBtn')
const shopFoterBtn2 = document.querySelector('#shopFoterBtn2')
const shopDropdownFooter = document.querySelector('#shopDrop')
shopFoterBtn.addEventListener('click', () => {
    shopDropdownFooter.classList.toggle('displayflex')
    console.log(shopDropdownFooter.classList.value);
})
shopFoterBtn2.addEventListener('click', () => {
    shopDropdownFooter.classList.toggle('displayflex')

})




const companyFoterBtn = document.querySelector('#companyFoterBtn')
const companyFoterBtn2 = document.querySelector('#companyFoterBtn2')
const copmanyDropdownFooter = document.querySelector('#companyBtn')
companyFoterBtn.addEventListener('click', () => {
    copmanyDropdownFooter.classList.toggle('displayflex')
    console.log(shopDropdownFooter.classList.value);
})
companyFoterBtn2.addEventListener('click', () => {
    copmanyDropdownFooter.classList.toggle('displayflex')

})


////
homeBtn2.addEventListener('click', () => {
    toggleDropdown3(homeBtn2, homeDropdown2, homeArrow2)
    makeActive(homeBtn2, "padding")
})

shopBtn2.addEventListener('click', () => {
    toggleDropdown3(shopBtn2, shopDropdown2, shopArrow2)
    makeActive(shopBtn2, "padding2")
    makeActive(menu, "height")
})

iconsBtn2.addEventListener('click', () => {
    toggleDropdown3(iconsBtn2, iconsDropdown2, iconsArrow2)
    makeActive(iconsBtn2, "padding4")
    makeActive(menu, "height")
})

pagesBtn2.addEventListener('click', () => {
    toggleDropdown3(pagesBtn2, pagesDropdown2, pagesArrow2)
    makeActive(pagesBtn2, "padding3")
    makeActive(menu, "height2")
    menuSectionAbout.style.padding = "800px !important"
})
docsBtn2.addEventListener('click', () => {
    toggleDropdown3(docsBtn2, docsDropdown2, docsArrow2)
    makeActive(docsBtn2, "padding2")
    makeActive(menu, "height3")
    menu.classList.remove("height2")
})
///

function makeActive(Element, active) {
    Element.classList.toggle(active);
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)) {
            Element.classList.remove(active)
        }
    })
}
//
burgermenuBtn.addEventListener('click', () => {
    toggleDropdown2(burgermenuBtn, burgermenu, shopArrow)
})
function toggleDropdown2(btn, dropdown, arrow) {
    dropdown.classList.toggle('show__burger');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    smallNav.classList.add("bcolorWhite")
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show__burger');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
            smallNav.classList.remove("bcolorWhite")
        }
    })
    if (dropdown.classList.contains('show__burger')) {
        smallNav.classList.add("bcolorWhite")
    }
    else {
        smallNav.classList.remove("bcolorWhite")
    }

}
function toggleDropdown3(btn, dropdown, arrow) {
    dropdown.classList.toggle('show__burger');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show__burger');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
        }
    })
}
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
        autoplaySpeed: 4222000,
        fade: false,
        prevArrow: false,
        nextArrow: false
    });
});




///////////////////////////////////////////////
const baketShow = document.querySelector('#allP')
const basketMenu = document.querySelector('.basketMenu')
const itemTotalCount = document.querySelector('.itemCountTotal')
const clearBtn = document.querySelector('.ClearBtn')
const basketItems = JSON.parse(localStorage.getItem('basketItems')) ?? []
itemTotalCount.innerHTML = basketItems.length;
const ProductsContainer = document.querySelector('.section4')



function genetateProduct(product) {

    const products = document.createElement("div")
    const formattedNumber = formatNumber(product.price);
    products.innerHTML = `
    <div class="section4__product" data-aos="zoom-in">
      <div class="section4__img">
          <img src="./assets/images/${product.img}" alt="">
      </div>
      <h1 class="section4__about">${product.name}</h1>
      <h2 class="section4__price">${product.price}$</h2>
     
    </div>`

    const addToCard = document.createElement('button')
    addToCard.className = "addToCardBtn"
    ProductsContainer.appendChild(products)
    addToCard.innerHTML = 'Add to card'
    products.appendChild(addToCard)


    addToCard.addEventListener('click', () => {
        let basketItems = JSON.parse(localStorage.getItem('basketItems'))
        if (basketItems == null) {
            const newBasketItems = [{ id: product.id, count: 1 }]
            localStorage.setItem('basketItems', JSON.stringify(newBasketItems))
            const checkOutItem = createChekoutItem({ id: product.id, count: 1 })
            basketMenu.appendChild(checkOutItem)
            itemTotalCount.innerHTML = basketItems.length
            return
        }
        const foundItem = basketItems.find(x => x.id == product.id)
        if (foundItem == null) {
            itemTotalCount.innerHTML = basketItems.length
            basketItems.push({ id: product.id, count: 1 })
            localStorage.setItem('basketItems', JSON.stringify(basketItems))
            const checkOutItem = createChekoutItem({ id: product.id, count: 1 })
            basketMenu.appendChild(checkOutItem)
            return
        }

        foundItem.count++
        itemTotalCount.innerHTML = basketItems.length
        localStorage.setItem("basketItems", JSON.stringify(basketItems))

    })
}
function createChekoutItem(product) {
    const item = document.createElement('div');
    const name = document.createElement("span");
    let basketItems = JSON.parse(localStorage.getItem('basketItems'));

    if (basketItems != null) {
        const foundItem = basketItems.find(x => x.id === product.id);
        name.innerText = foundItem.name; // Get the name property from foundItem
    }

    item.innerHTML = `
        <div class="items">
            <div class="section4__product" data-aos="zoom-in">
                <div class="section4__img">
                    <img src="./assets/images/${product.img}" alt="${product.name}">
                </div>
                <div>
                    <h1 class="section4__about">${name.innerText}</h1> <!-- Use name.innerText instead of name.innerHTML -->
                    <h2 class="section4__price">${product.price}$</h2>
                </div>
            </div>
            <h2 class="section4__price">${product.price}$ - total</h2>
        </div>`;

    const plus = document.createElement('i');
    plus.classList = 'fa-solid fa-plus sdf';
    const minus = document.createElement('i');
    minus.classList = 'fa-solid fa-minus sdf';
    const count = document.createElement('span');
    count.className = "LeftCount";
    count.innerHTML = product.count;
    item.appendChild(plus);
    item.appendChild(minus);
    item.appendChild(count);

    plus.addEventListener('click', () => {
        const basketItems = JSON.parse(localStorage.getItem('basketItems'));
        const foundItem = basketItems.find(x => x.id === product.id);
        foundItem.count++;
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        count.innerHTML = foundItem.count;
    });

    minus.addEventListener('click', () => {
        let basketItems = JSON.parse(localStorage.getItem('basketItems'));
        const foundItem = basketItems.find(x => x.id === product.id);
        if (foundItem.count === 1) {
            basketItems = basketItems.filter(x => x.id !== foundItem.id);
            item.remove();
        } else {
            foundItem.count--;
        }
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        count.innerHTML = foundItem.count;
    });

    return item;
}




basketItems.forEach(b => {
    const checkOutItem = createChekoutItem(b);
    basketMenu.appendChild(checkOutItem);
});



baketShow.addEventListener('click', () => {
    basketMenu.classList.toggle("showBasket")
    document.addEventListener('click', (event) => {
        if (!baketShow.contains(event.target) && !basketMenu.contains(event.target)) {
            basketMenu.classList.remove("showBasket")
        }
    })
})
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('basketItems')
    itemTotalCount.innerHTML = 0
})


function renderProduct() {
    _acitveProduct.forEach((x) => {
        genetateProduct(x);
    })
}
function formatNumber(number) {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedNumber;
}



data.forEach((x) => {
    genetateProduct(x);
})

