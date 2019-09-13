//  Get a reference to the submit button
const LoginClickEvents = {
login: ()=>{
// Add an event listener to the submit button
document.querySelector("#login-button").addEventListener("click", function(){
  // Inside the click event listener, use document.querySelector().value to capture what the user typed into the text input.
  const usernameInfo = document.querySelector("#username-input").value
  const passwordInfo = document.querySelector("#password-input").value
  // console.log(usernameInfo, passwordInfo)

})}}

export default LoginClickEvents