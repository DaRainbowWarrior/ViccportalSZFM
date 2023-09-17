import express from "express";
import config from 'config';
import connect from './utils/connect'
import log from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.listen(port, async ()=>{
    log.info(`app is up on port: ${port}`);
    await connect();

    routes(app)
})