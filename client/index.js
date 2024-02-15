let socket = new WebSocket("ws://localhost:80"); // client side
// sends request to port, operate as websocket connection

// now have handler for when connection is open
socket.onopen = (e) => {
    console.log("Handshake completed!");
    socket.send("Hello from the client!");
};

socket.onmessage = (e) => {
    console.log("Message from server:", e.data);
}

socket.onclose = () => {
    console.log("Good bye");
}