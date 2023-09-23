import { isAuthed } from "../middlewares";
import { deleteUser, getAllUsers, getUser } from "../controllers/users";
import express from "express";

export default (router: express.Router)=>{
    router.get('/users', getAllUsers)
    router.get('/users/:id', getUser)
    router.delete('/users', isAuthed,deleteUser)
}