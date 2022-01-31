// product slider

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// hamburger menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-list');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
 
    })
}

// scroll to top 

const toTop = document.querySelector (".to-top");
window.addEventListener("scroll", () => {
    if  (window.pageYOffset > 100)  {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove ("active");
    }
})



