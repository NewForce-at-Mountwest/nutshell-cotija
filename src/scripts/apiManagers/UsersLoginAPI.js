const loginAPIManager = {
    loginAccount: () =>
         {
                return fetch("http://localhost:3000/Users").then(response =>
                    response.json()
                );
            },
};




// Below function Executes on click of login button.
function login(){
var username = document.QuerySelector("#username-input").value;
var password = document.getElementById("#password-input").value;
if ( username === "`${}`" && password === "`${}`"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
}

export default loginAPIManager;