import { getUserBySessionToken } from '../db/users';
import express from 'express'
import {get,merge} from 'lodash'



export const isOwner =async (req:express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const {id} = req.params;
        const currrentUserId = get(req, 'identity,_id') as string;

        if(!currrentUserId){
            return res.sendStatus(403);
        }
        if(currrentUserId.toString()!==id){
            return res.sendStatus(403)
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const isAuthed =async (req:express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['J-AUTH'];

        if(!sessionToken){
            return res.sendStatus(403);
        }
        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser){
            return res.sendStatus(403)
        }

        merge(req, {identity: existingUser})
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}