import express from "express";
import { createJokePost, getAllJokes } from "../controllers/jokes";

export default (router: express.Router)=>{
    router.get('/jokes', getAllJokes)
    router.post('/jokes', createJokePost)
    router.post('/jokes/[id]/rate', rateJoke)
}