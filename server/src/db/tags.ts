import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    }
});

export const TagModel = mongoose.model('Tag', TagSchema);

export const getTags = () => TagModel.find();
export const getTagById = (id:string) => TagModel.findById(id);
export const createTag = (values: Record<string, any>) => new TagModel(values).save().then((tag)=>tag.toObject());
export const deleteTagById = (id:string)=> TagModel.findOneAndRemove({_id:id});