function sendMessage() {
    let val = document.getElementById("messageInput").value
    let msg = document.createElement("p")
    const chatroomDiv = document.getElementById('chatroom');

    msg.textContent = val
    chatroomDiv.appendChild(msg);
    document.getElementById("messageInput").value = ""

}