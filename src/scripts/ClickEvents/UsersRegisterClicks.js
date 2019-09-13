import registerApiManager from "../apiManagers/UsersRegisterapi.js";

const registerClickEvents = {
	createAccount: () => {
		document
			.querySelector("#create-account-button")
			.addEventListener("click", function() {
				const accountToCreate = {
					username: document.querySelector("#register-username").value,
					email: document.querySelector("#register-email").value,
					UserPassword: document.querySelector("#register-password").value
				};
				registerApiManager.createAccount(accountToCreate);
			});
	}
};

export default registerClickEvents;
