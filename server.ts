import app from "./src/app.js"

function startServer(){
    const PORT=process.env.PORT
    app.listen(PORT,()=>{
        console.log(`Port is running on 3000 server `);
    })
}