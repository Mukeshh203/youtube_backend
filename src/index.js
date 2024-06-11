import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

dotenv.config({
    path: './env'
})

/*      -------------OTHER APPROACH-----------------
import express from "express"

const app = express()


( async () => {
    try {
       await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        
    }catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
    */

const connectDb = async () =>{
    try{ 
        const connectionInstance = await mongoose.connect 

    } catch (error) {
        console.log("MONGO connection error ", error);
        process.exit(1)
    }
}