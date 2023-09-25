import { createTagController, getAllTags } from "controllers/tags";
import { isAuthed } from "../middlewares";
import express from "express";

export default (router: express.Router)=>{
    router.get('/tags/', getAllTags)
    router.post('/tags', isAuthed, createTagController)
}