import app from "./src/app.js";
import { envConfig } from "./src/config/config.js";
import connectDb from "./src/config/db.js";
import { Server } from "socket.io";

// post - on
// get - emit
// request -- socket
// api -- event

let io:Server | undefined;

function startServer() {
  connectDb();
  const PORT = envConfig.port || 4000;
  const server = app.listen(PORT, () => {
    console.log(`Port is running on ${PORT} server `);
  });

  io = new Server(server); // it attached websocket to HTTP request and allows client to upgrade individual connections from HTTP to Websocket
}

function getSocketIo(){
     if(!io){
        throw new Error("Socket io is not initialized")
     }

     return io
} 



startServer();
export {getSocketIo}
