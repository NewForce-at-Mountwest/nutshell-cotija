import apiManager from "../apiManagers/UsersLoginAPI.js"

const Login = {
  loginClickEvent: () => {

    document.querySelector("#login-button").addEventListener("click", () => {
      // Get the username and password values from the form on the html
      console.log("the button works!")

      const usernameValue = document.querySelector("#username-input").value;
      const passwordValue = document.querySelector("#password-input").value;
      // debugger
      // Use the username to go to the datbaase and get that user's information
      apiManager.getOneUserByUsername(usernameValue).then(user => {
        // User is going to be an array no matter what, so we'll have to delve into the array to get the user's data
        console.log("This is user", user)
        // Compare the user's password from the db to the information they entered
        console.log(user[0].UserPassword, passwordValue);
        debugger
        if (user[0].UserPassword === passwordValue) {
          // If the passwords match, store the id in local storage
          localStorage.setItem("userId", user[0].id);
          localStorage.setItem("activeUser", user.activeUser[0].id)
          // this is where you guys can call stuff
        } else {
          // Error handling would go here
          console.log("Incorrect password!");
        }
      })
    })
  }
}

export default Login
