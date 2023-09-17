import mongoose from 'mongoose'
import config from 'config'
import log from './logger'
async function connect(){
    const dbUrl = config.get<string>("dbUrl")

    try{
        await mongoose.connect(dbUrl)
        log.info("connected db")
    } catch(er){
        log.error("no connection made to db")
        process.kill(1)
    }
}

export default connect;