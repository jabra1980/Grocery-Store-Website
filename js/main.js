
// counter items (cart)
window.onbeforeunload = function (e) {
  localStorage.clear();
};


var carts = document.querySelectorAll('.add-cart');

for(let i = 0; i < carts.length; i++){
  carts[i].addEventListener('click', ()=>{
      cartNumbers();
  })

}

function cartNumbers(){
  
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  
  if(productNumbers){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.getElementById('counter').textContent = productNumbers + 1;
  } else{
      localStorage.setItem('cartNumbers', 1);
      document.getElementById('counter').textContent = 1;
  }
  
}



function goout()
{
window.location.href="landing.html";
}

// Form toggle
var searchForm = document.querySelector('.search-form');
var shoppingCart = document.querySelector('.shopping-cart');
var navbar = document.querySelector('.navbar');
var logoutForm = document.querySelector('.logout-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    logoutForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    logoutForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    logoutForm.classList.remove('active');
}


document.querySelector('#logout-btn').onclick = () =>{
    logoutForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    logoutForm.classList.remove('active');
    navbar.classList.remove('active');
}


// swiper
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


function logout(){
    alert('Thanks for visiting us');
    goout();
}

function added(){
    alert('Added Successfully..!');
}

