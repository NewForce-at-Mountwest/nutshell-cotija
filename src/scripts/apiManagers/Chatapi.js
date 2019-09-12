const apiChat = {
    getAllMessages:()=>{
        return fetch("http://localhost/3000/Messages")
    }
}
export default apiChat