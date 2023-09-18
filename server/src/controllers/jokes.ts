import { createJoke, getJokes, rateJoke } from '../db/jokes';
import express from 'express'

export const getAllJokes =async (req:express.Request, res:express.Response) => {
    try {
        const jokes = await getJokes();
        return res.status(200).json(jokes)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const createJokePost = async (req:express.Request, res:express.Response) => {
    try {
        const {author,title,description,tags} = req.body;

        if(!title || !description){
            return res.sendStatus(400);
        }

        const joke = await createJoke({
            author,
            title,
            description,
            tags
        })

        return res.status(200).json(joke).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const rateJokePost = async (req:express.Request, res:express.Response) => {
    try {
        const {id, isLike} = req.body;

        const joke = await rateJoke(isLike, id);

        return res.status(200).json(joke).end;
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}