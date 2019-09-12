const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article><fieldset>
        <label for="chat">Chatroom</label>
        <br>
        <input type="text" name="chat" id="Chatinput">
    </fieldset>${chatInput.message}</article>`
    }
};
export default Chatinfo