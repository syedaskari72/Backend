import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})  

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("mongo db connection failed");
})

















// const app = express()

// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("errrr:", error);
//         throw error
//        })

//        app.listen(process.env.PORT, ()=> {
//             console.log(`app is listening on port ${process.env.PORT}`);
            
//        })

//     } catch (error) {
//         console.error("error:", error);
//         throw err
//     }
// })()