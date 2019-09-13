import registerApiManager from "/Users/newforce42/workspace/foundations/Group Projects/nutshell/nutshell-cotija/src/scripts/apiManagers/UsersRegisterapi.js";

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
