import mongoose from 'mongoose';

const JokeSchema = new mongoose.Schema({
    author:{
        type: String, default: "Anonymous"
    },
    authorId:{
        type: String, required: true
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
    },
    date:{
        type: Date, default: Date.now
    }
})

export const JokeModel = mongoose.model('Joke', JokeSchema);

export const getJokes = () => JokeModel.find().sort({date:-1});
export const getJokeById = (id:string) => JokeModel.findById(id)
export const getJokeByTag = (tagToFilterBy: Array<string>) => JokeModel.find({tags: tagToFilterBy})
export const getJokesByAuthorId = (authId: string) =>JokeModel.find({authorId:authId});
export const createJoke = (values: Record<string,any>) => new JokeModel(values).save().then((joke)=>joke.toObject());
export const rateJoke = (isLike: boolean, id: string)=>{
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
    return joke;
}
export const deleteJokeById = (id:string)=> JokeModel.findByIdAndRemove({_id:id})
export const getCountOfJokes = ()=> JokeModel.count();
export const getJokesWithPagination=(skip:number,limit:number)=>JokeModel.find().sort({date:-1}).skip(skip).limit(limit);