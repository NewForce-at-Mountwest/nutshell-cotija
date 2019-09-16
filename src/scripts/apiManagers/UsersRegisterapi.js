const registerApiManager = {
	createAccount: accountToCreate =>
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(accountToCreate)
		}).then(response => response.json())
};

export default registerApiManager;
