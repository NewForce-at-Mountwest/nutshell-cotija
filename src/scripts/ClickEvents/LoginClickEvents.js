import loginAPIManager from "../apiManagers/UsersLoginAPI.js"



//  Get a reference to the submit button
const LoginClickEvents = {
login: ()=>{
// Add an event listener to the submit button
document.querySelector("#login-button").addEventListener("click", function(){
  // Inside the click event listener, use document.querySelector().value to capture what the user typed into the text input.
  const usernameInfo = document.querySelector("#username-input").value
  const passwordInfo = document.querySelector("#password-input").value
  // code for log in in after the button is pushed and it
  // sets an Id based on the user you have logged in as in the console.
loginAPIManager.loginAccount()
.then(parsedUsers => {
    // console.log list of users upon button click
    console.log(parsedUsers)
    if(usernameInfo.value === parsedUsers.User){
        if(passwordInfo.value === parsedUsers.UserPassword){
                localStorage.setItem("activeUser", parsedUsers.id);
}}})})}}



export default LoginClickEvents
