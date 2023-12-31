import { getUserBySessionToken } from '../db/users';
import express from 'express'
import {get,merge} from 'lodash'

export const isAuthed = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.headers.authorization;

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}