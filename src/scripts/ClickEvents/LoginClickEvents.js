import apiManager from "../apiManagers/UsersLoginAPI.js"
import ChatButtons from "./ChatClicks.js"
import renderChat from "../domPrinter/ChatPrinter.js"
import apiChat from "../apiManagers/Chatapi.js"
// code for the login click event
const Login = {
  loginClickEvent: () => {
    document.querySelector("#login-button").addEventListener("click", () => {
      // Get the username and password values from the form
      const usernameValue = document.querySelector("#username-input");
      const passwordValue = document.querySelector("#password-input");
      // Use the username to go to the datbaase and get that user's information
      apiManager.getOneUserByUsername(usernameValue.value).then(user => {
        // User is going to be an array no matter what, so we'll have to delve into the array to get the user's data
        // Compare the user's password from the db to the information they entered
        if (user[0].UserPassword === passwordValue.value) {
          // If the passwords match, store the id in local storage
          localStorage.setItem("userId", user[0].id);
          document.querySelector("#chatroom").innerHTML = `<fieldset>
      <label for="chat">Chatroom</label>
      <br>
      <input type="text" name="chat" placeholder="New Message" id="Chatinput">
      </fieldset>
      <button id="Sendmsg" type="submit">Send</button>`
apiChat.getAllMessages()
.then(parsedMessages=>{
 renderChat.buildChatCard(parsedMessages)
})
          ChatButtons.editChatMessage()
          ChatButtons.sendChatButton()
          ChatButtons.deleteChatMessage()
          ChatButtons.saveChatMessage()
          usernameValue.value = ""
          passwordValue.value = ""
        } else {
          // Error handling would go here
          alert("Incorrect password!");
        }
      })
    })
  }
}
export default Login
