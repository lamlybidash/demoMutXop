import mongoose from "mongoose";
export default async()=>{
    const config = useRuntimeConfig()
    try{
        const DB_OPTIONS = {
            dbName: config.dbName,
            // user: config.dbUser,
            // pass: config.dbPass,
            // authSource: config.dbAuthSource
        }
        await mongoose.connect(config.dbUri, DB_OPTIONS)
        console.log("Connected to Database");
    }catch(err){
        console.log("Loi ket noi");
        console.log(err)
    }
}