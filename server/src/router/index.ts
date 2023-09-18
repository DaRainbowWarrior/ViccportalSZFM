import express from 'express'
import auth from './auth';
import users from './users';
import jokes from './jokes';
const router = express.Router();

export default (): express.Router =>{
    auth(router);
    users(router);
    jokes(router);
    return router;
}