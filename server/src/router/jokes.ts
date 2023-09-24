import express from "express";
import { createJokePost, deleteJoke, getAllJokes, getAllJokesByUserId, getJokesPaginated, rateJokePost } from "../controllers/jokes";
import { isAuthed } from "../middlewares";

export default (router: express.Router)=>{
    router.get('/jokes', getAllJokes)
    router.get('/jokes/user/:id', getAllJokesByUserId)
    router.get('/jokes/pages/', getJokesPaginated)
    router.post('/jokes', isAuthed, createJokePost)
    router.post('/jokes/:id/rate', rateJokePost)
    router.delete('/jokes/:id', isAuthed, deleteJoke)
}