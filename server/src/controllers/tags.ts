import express from 'express'
import { createTag, getTags } from 'db/tags';

export const getAllTags =async (req:express.Request, res:express.Response) => {
    try {
        const tags = await getTags();
        return res.status(200).json(tags)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const createTagController = async (req:express.Request, res:express.Response) => {
    try {
        const {name} = req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const tag = await createTag({
            name
        })

        return res.status(200).json(tag).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
