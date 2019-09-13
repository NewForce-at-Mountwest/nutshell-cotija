const apiChat = {
    getAllMessages:()=>{
        return fetch("http://localhost:3000/Messages")
        .then(Response=>Response.json())
    }
}
export default apiChat