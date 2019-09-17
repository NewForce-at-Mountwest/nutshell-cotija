import apiManager from "../apiManagers/UsersLoginAPI.js";
import sendChatButtonFunction from "./ChatClicks.js";
import renderChat from "../domPrinter/ChatPrinter.js";
import apiChat from "../apiManagers/Chatapi.js";

// code for the login click event

const Login = {
	loginClickEvent: () => {
		document.querySelector("#login-button").addEventListener("click", () => {
			// Get the username and password values from the form
			console.log("the button works!");
			const usernameValue = document.querySelector("#username-input");
			const passwordValue = document.querySelector("#password-input");

			// Use the username to go to the datbaase and get that user's information
			apiManager.getOneUserByUsername(usernameValue.value).then(user => {
				// User is going to be an array no matter what, so we'll have to delve into the array to get the user's data
				debugger;
				console.log("This is user", user);
				// Compare the user's password from the db to the information they entered
				console.log(user[0].UserPassword, passwordValue.value);
				if (user[0].UserPassword === passwordValue.value) {
					// If the passwords match, store the id in local storage
					localStorage.setItem("userId", user[0].id);
					document.querySelector("#chatroom").innerHTML += `<fieldset>
      <label for="chat">Chatroom</label>
      <br>
      <input type="text" name="chat" id="Chatinput">
      </fieldset>
      <button id="Sendmsg" type="submit">Send</button>`;

					apiChat.getAllMessages().then(parsedMessages => {
						renderChat.buildChatCard(parsedMessages);
					});
					// Prints chat input and button

					// calls function to send a new message to json and reprint
					sendChatButtonFunction();
					usernameValue.value = "";
					passwordValue.value = "";
				} else {
					// Error handling would go here
					console.log("Incorrect password!");
				}
			});
		});
	}
};

export default Login;
