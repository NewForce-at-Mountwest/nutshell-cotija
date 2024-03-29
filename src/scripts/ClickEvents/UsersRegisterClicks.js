import registerApiManager from "../apiManagers/UsersRegisterapi.js";

const registerClickEvents = {
	createAccount: () => {
		document
			.querySelector("#create-account-button")
			.addEventListener("click", function() {
				const accountToCreate = {
					username: document.querySelector("#register-username").value,
					email: document.querySelector("#register-email").value,
					userPassword: document.querySelector("#register-password").value
				};
				registerApiManager.createAccount(
					accountToCreate.username,
					accountToCreate
				);
				document.querySelector("#register-username").value = "";
				document.querySelector("#register-email").value = "";
				document.querySelector("#register-password").value = "";
			});
	}
};

export default registerClickEvents;
