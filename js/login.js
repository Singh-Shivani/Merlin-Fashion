var user = document.getElementById("username");
var pass =  document.getElementById("password");
var btn = document.querySelector(".login-button");

function checkvalidity(){
        if(user.value == "" || pass.value ==""){
            alert("Please provide Username & Password ")
        }
    
}

btn.addEventListener("click", checkvalidity)