
function goout()
{
window.location.href="../html/landing.html";
}

// Form toggle
var shoppingCart = document.querySelector('.shopping-cart');
var navbar = document.querySelector('.navbar');
var logoutForm = document.querySelector('.logout-form');


document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    logoutForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    logoutForm.classList.remove('active');
}


document.querySelector('#logout-btn').onclick = () =>{
    logoutForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    shoppingCart.classList.remove('active');
    logoutForm.classList.remove('active');
    navbar.classList.remove('active');
}



// validate Billing and payment forms form
var inputs = document.querySelectorAll('input');
   

var pattern = {

    email:/^([^0-9][a-z\.-_\d]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    fuName : /^[a-zA-Z\s]{5,20}$/,
    address: /^[a-zA-Z0-9\s]{3,12}$/,
    city: /^[a-zA-Z]{2,6}$/,
    state: /^[a-zA-Z]{2,6}$/,
    zipCode: /^[a-zA-Z0-9\s]{7}$/,
    caName: /^[A-Z\s]{5,20}$/,
    creditCard: /^[0-9-]{18,19}$/,
    exMonth: /^[a-zA-Z]{3,9}$/,
    exYear: /^[0-9]{4}$/,
    cvv: /^[0-9]{3}$/,

}


function validate(field, regEx){
        
    if(regEx.test(field.value)){

        field.className = 'valid';

    }
    else{
	
	    field.className = 'invalid';
            
    }

}

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
    validate(e.target, pattern[e.target.attributes.name.value]);

    })

})




    

var btnClear = document.querySelector('.submit-btn2');
var btnSubmit = document.querySelector('.submit-btn'); 
var jo = document.querySelectorAll('.fofo');

// clear form
btnClear.addEventListener('click', () =>{
    
    jo.forEach(input => input.value = '');   
})

//  proceed to checkout
btnSubmit.addEventListener('click', () =>{
    
    alert('Thank you for visiting my page!');
    goout();
        
})
    

