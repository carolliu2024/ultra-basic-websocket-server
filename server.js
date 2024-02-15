import {WebSocketServer} from "ws";

const wsserver = new WebSocketServer({port: 80});

wsserver.on("connection", (ws)=>{
    ws.on("message", (data) => {
        console.log(`message received: ${data}`); // string interpolation
    });
    ws.send(`Hello from the server! Num clients: ${wsserver.clients.size}`);
});