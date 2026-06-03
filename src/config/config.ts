import {config} from "dotenv"
config()

export const envConfig={
    port:process.env.PORT,
    mongo_url:process.env.MONGO_URL 
}
