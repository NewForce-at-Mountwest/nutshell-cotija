const registerApiManager = {
	createAccount: accountToCreate =>
		fetch("http://localhost:3000/Users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(accountToCreate)
		}).then(response => response.json())
};

// getAccount: id => {
// 	return fetch(`http://localhost:3000/Users/${id}`).then(response =>
// 		response.json()
// 	);
// },

export default registerApiManager;
