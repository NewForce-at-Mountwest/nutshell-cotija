const registerApiManager = {
	createAccount: accountToCreate =>
		fetch("http://localhost:3000/Users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(accountToCreate)
		})
};

export default registerApiManager;