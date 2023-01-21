
document.addEventListener("submit", function(event) {
    
    // Prevent default form submit
    event.preventDefault()
  
    // Clear all form fields
    event.target.reset()
  })


function gohome()
{
    window.location.href="index.html";
}


// Count Down
var countDate = new Date('august 31, 2023 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('_day').innerText = d;
    document.getElementById('_hour').innerText = h;
    document.getElementById('_minute').innerText = m;
    document.getElementById('_second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)


// Form toggle
var loginForm = document.querySelector('.login-form');
var singUpForm = document.querySelector('.register-form');


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    singUpForm.classList.remove('active');
    document.getElementById("errorMsg").innerHTML = "";
}
 
document.querySelector('#register-btn').onclick = () =>{
    singUpForm.classList.toggle('active');
    loginForm.classList.remove('active');
    document.getElementById("errorMsg1").innerHTML = "";
}

document.querySelector('#gStart').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#cOut').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#cOut1').onclick = () =>{
    loginForm.classList.toggle('active');
    
}

document.querySelector('#cDeal').onclick = () =>{
    loginForm.classList.toggle('active');
    
}

document.querySelector('#lg').onclick = () =>{

    singUpForm.classList.toggle('active');
    loginForm.classList.remove('active');
    document.getElementById("errorMsg1").innerHTML = "";
    
}

document.querySelector('#re').onclick = () =>{

    loginForm.classList.toggle('active');
    singUpForm.classList.remove('active');
    document.getElementById("errorMsg").innerHTML = "";
    
}


// validate login form
var vFullName = /^[a-zA-Z\s]{5,20}$/;
var vUsername = /^[a-z0-9-_]{5,12}$/;
var vEmail = /^([^0-9][a-z\.-_\d]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
var vPass = /^[\w@*-]{8,20}$/;



function validate_1(){
    let userName = document.getElementById("jo").value;
    let pAssword = document.getElementById("po").value;
    
    if(userName == 'admin' && pAssword == '12345'){
        alert('Wellcome to my website');
        gohome();
        }
    else if(userName == '' || pAssword == ''){
         document.getElementById("errorMsg").innerHTML = "Please fill all the fields"
         
        }
    else{
        alert('Login Failed');
        
    }
}



// validate signUp form
function validate2(){
    
    let fullName = document.getElementById('fName').value;
    let username = document.getElementById('uName').value;
    let emailAd = document.getElementById('1').value;
    let password = document.getElementById('2').value;
    let rPassword = document.getElementById('rPass').value;
    

    if(fullName == '' || username =='' || emailAd == '' || password == '' || rPassword == '')
    {
        document.getElementById('errorMsg1').innerHTML = "Please fill all the fields"
    }

    else if(!vPass.test(password)) 
    {
        document.getElementById("errorMsg1").innerHTML = "password must be alphanumeric (@, _ and - are allowed) and be 8-20 characters";
    }

    else if(rPassword != password)
    {
        document.getElementById("errorMsg1").innerHTML = "password must be the same";
    }

    else if(!vUsername.test(username))
    {
        document.getElementById("errorMsg1").innerHTML = "Username must be and contains 5-12 characters";
    }

    else if(!vFullName.test(fullName))
    {
        document.getElementById("errorMsg1").innerHTML = "Name must not be contains numbers";
    }

    else if(!vEmail.test(emailAd))
    {
        document.getElementById("errorMsg1").innerHTML = "Email must be valid address e.g. me@domain.ca";
    }

    else 
    {
        alert("Successfully signed up");
        loginForm.classList.toggle('active');
        singUpForm.classList.remove('active');
    }
}




