const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const openNav = document.querySelector('.burger-btn-box')
const closeNav = document.querySelector('.fa-xmarkl')
const closeBoxNav = document.querySelector('.close-box')
const closeX = document.querySelector('.hide-navigation')
const navDesktop = document.querySelector('.nav-desktop')
const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const iconPlus = document.querySelector('.fa-plus')
const iconMinus = document.querySelector('.fa-minus')
const footerYear = document.querySelector('.footer-year')
const handleNAv = () => {
    nav.classList.toggle('nav-active')
    openNav.classList.toggle('hide-nav')
    closeNav.classList.toggle('hide-navigation')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        closeX.classList.add('hide-navigation') 
        )
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active')
        )
        item.addEventListener('click', () =>
        openNav.classList.remove('hide-nav')
        )
    })
    handleNavItemsAnimation();
}
const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}

function openAccordionItems() {
    if( this.nextElementSibling.classList.contains('accordion-active')){
        this.nextElementSibling.classList.remove('accordion-active')
    }
    else{
        closeAccordionItems()
        this.nextElementSibling.classList.toggle('accordion-active')
    }
   
   
}
const addShadow = () => {
    if (window.scrollY >= 100) {
        navDesktop.classList.add('shadow-bg')
    } else {
        navDesktop.classList.remove('shadow-bg')
    }
}

const closeAccordionItems = () => {
    const allActiveItems = document.querySelectorAll('.accordion-info')
    allActiveItems.forEach(item => item.classList.remove('accordion-active'))

    
}


const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion-btn') ||
        e.target.classList.contains('accordion-info') ||
        e.target.classList.contains('accordion-info-text')
    )
    return
    closeAccordionItems()
}




const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".slider-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

 // Show or hide slide buttons based on scroll position
const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
}

// Update scrollbar thumb position based on image scroll


// Call these two functions when image list scrolls
imageList.addEventListener("scroll", () => {
   
    handleSlideButtons();
});




}



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();



window.addEventListener('scroll', addShadow)
navBTN.addEventListener('click', handleNAv)
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);