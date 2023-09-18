import mongoose from 'mongoose';

const JokeSchema = new mongoose.Schema({
    author:{
        type: String, default: "Anonymous"
    },
    title:{
        type: String, required: true
    },
    description:{
        type: String, required: true
    },
    tags: [{
        type: String
    }],
    likes:{
        type: Number, default: 0
    },
    dislikes:{
        type: Number, default: 0,
    }
})

export const JokeModel = mongoose.model('Joke', JokeSchema);

export const getJokes = () => JokeModel.find();
export const getJokeByTag = (tagToFilterBy: Array<string>) => JokeModel.find({tags: tagToFilterBy})
export const createJoke = (values: Record<string,any>) => new JokeModel(values).save().then((joke)=>joke.toObject());
export const rateJoke = (isLike: boolean, id: Number)=>{
    let joke = null;
    if ( isLike){
        joke = JokeModel.updateOne(
            { _id: id },
            { $inc: 
                { likes: 1 } 
            }
        )
    }else{
        joke = JokeModel.updateOne(
            { _id: id },
            { $inc: 
                { dislikes: 1 } 
            }
        )
    }
    return joke
}