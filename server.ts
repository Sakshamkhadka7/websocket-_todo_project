import app from "./src/app.js"
import { envConfig } from "./src/config/config.js";
import connectDb from "./src/config/db.js";

 function startServer(){
    connectDb()
    const PORT=envConfig.port || 4000
    app.listen(PORT,()=>{
        console.log(`Port is running on ${PORT} server `);
    })
}

startServer()