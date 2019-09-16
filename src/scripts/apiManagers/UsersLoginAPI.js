const apiManager = {

getOneUserByUsername: username => {
    return fetch(`http://localhost:3000/users?username=${username}`).then(response =>
      response.json()
    );
  }
};

export default apiManager;