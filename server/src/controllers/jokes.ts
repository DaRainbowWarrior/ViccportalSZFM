import { get } from 'lodash';
import { createJoke, deleteJokeById, getCountOfJokes, getJokeById, getJokes, getJokesByAuthorId, getJokesWithPagination, rateJoke } from '../db/jokes';
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
        const {author,title,description,tags, likes, dislikes} = req.body;

        if(!title || !description){
            return res.sendStatus(400);
        }

        const authorId = get(req, 'identity._id') as string;

        const joke = await createJoke({
            author,
            authorId,
            title,
            description,
            tags,
            likes,
            dislikes
        })

        return res.status(200).json(joke).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const rateJokePost = async (req:express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        const {ratingType} = req.body;
        let isLike;

        if(ratingType === "like"){
            isLike = true;
        }else if (ratingType === "dislike"){
            isLike = false
        }else{
            return res.sendStatus(403);
        }

        const joke = await rateJoke(isLike, id);

        return res.status(200).json(joke).end;
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const deleteJoke = async (req:express.Request, res:express.Response) => {
    try {
        const {id} = req.params;
        const userId = get(req, 'identity._id') as string;
        const joke = await getJokeById(id);
        if(userId.toString() !== joke.authorId){
            console.log(userId)
            console.log(joke.authorId)
            return res.sendStatus(403)
        }
        const deletedUser = await deleteJokeById(id);

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const getAllJokesByUserId = async (req:express.Request, res:express.Response) => {
    try {
        const {id} = req.params;

        const jokesOfUser = await getJokesByAuthorId(id);

        return res.json(jokesOfUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const getJokesPaginated =async (req:express.Request, res:express.Response) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const pageNumber = parseInt(page as string);
        const limitNumber = parseInt(limit as string);
    
        const skip = (pageNumber - 1) * limitNumber;
    
        const data = await getJokesWithPagination(skip, limitNumber);
    
        const totalCount = await getCountOfJokes();
    
        const totalPages = Math.ceil(totalCount / limitNumber);
    
        const pagination = {
          totalItems: totalCount,
          totalPages,
          currentPage: pageNumber,
        };
    
        res.json({ data, pagination });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}