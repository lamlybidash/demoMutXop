import mongoose from "mongoose";
import {Nitro} from "nitropack"

export default async()=>{
    const config = useRuntimeConfig()
    try{
        const DB_OPTIONS = {
            dbName: config.private.NUXT_ENV_MONGO_DB,
            // user: config.dbUser,
            // pass: config.dbPass,
            // authSource: config.dbAuthSource
        }
        await mongoose.connect(config.private.NUXT_ENV_MONGO_URI, DB_OPTIONS)
        console.log("Connected to Database");
    }catch(err){
        console.log("Loi ket noi");
        console.log(err)
    }
}