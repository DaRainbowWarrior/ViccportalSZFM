import express from "express";
import { createJokePost, deleteJoke, getAllJokes, rateJokePost } from "../controllers/jokes";
import { isAuthed } from "../middlewares";

export default (router: express.Router)=>{
    router.get('/jokes', getAllJokes)
    router.post('/jokes', isAuthed, createJokePost)
    router.post('/jokes/:id/rate', rateJokePost)
    router.delete('/jokes/:id', isAuthed, deleteJoke)
}