import { login, register } from '../controllers/auth'
import express from 'express'


export default (router:express.Router)=>{
    router.post('/auth/register', register);7
    router.post('/auth/login', login)
}