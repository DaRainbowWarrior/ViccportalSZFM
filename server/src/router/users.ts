import { isAuthed, isOwner } from "../middlewares";
import { deleteUser, getAllUsers } from "../controllers/users";
import express from "express";

export default (router: express.Router)=>{
    router.get('/users', getAllUsers)
    router.delete('/users', isAuthed, isOwner,deleteUser)
}