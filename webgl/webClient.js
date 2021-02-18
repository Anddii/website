export class WebClient {
    constructor(url) {
        this.clientSocket = new WebSocket(url);
        this.clientSocket.onopen = (event) => {
            console.log("I JOINED");
            this.sendMsg();
        };
        this.clientSocket.onmessage = function (event) {
            console.log(event.data);
        };
    }
    sendMsg() {
        this.clientSocket.send("Here's some text that the server is urgently awaiting!");
    }
}
