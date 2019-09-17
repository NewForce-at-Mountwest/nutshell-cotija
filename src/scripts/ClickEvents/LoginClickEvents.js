import apiManager from "../apiManagers/UsersLoginAPI.js"
const Login ={
loginClickEvent:()=>{
// ------- CLICK EVENT FOR LOGIN----------------//
document.querySelector("#login-button").addEventListener("click", () => {

  // Get the username and password values from the form
  console.log("the button works!")
  const usernameValue = document.querySelector("#username-input").value;
  const passwordValue = document.querySelector("#password-input").value;
  // Use the username to go to the datbaase and get that user's information
  apiManager.getOneUserByUsername(usernameValue).then(user => {
    // User is going to be an array no matter what, so we'll have to delve into the array to get the user's data
    debugger
    console.log("This is user", user)
    // Compare the user's password from the db to the information they entered
    console.log(user[0].UserPassword, passwordValue);
    if (user[0].UserPassword === passwordValue) {
      // If the passwords match, store the id in local storage
      localStorage.setItem("userId", user[0].id);
      apiChat.getAllMessages()
      .then(parsedMessages=>{
          renderChat.buildChatCard(parsedMessages)})
      // Prints chat input and button
      document.querySelector("#chatroom").innerHTML+= `<fieldset>
      <label for="chat">Chatroom</label>
      <br>
      <input type="text" name="chat" id="Chatinput">
      </fieldset>
      <button id="Sendmsg" type="submit">Send</button>`
      // calls function to send a new message to json and reprint
      sendChatButtonFunction()
    } else {
      // Error handling would go here
      console.log("Incorrect password!");
    }})})}}

    export default Login
