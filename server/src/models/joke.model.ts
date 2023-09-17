import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface JokeInput {
  user: UserDocument["_id"];
  title: string;
  description: string;
}

export interface JokeDocument extends JokeInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const jokeSchema = new mongoose.Schema(
  {
    jokeId: {
      type: String,
      required: true,
      unique: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const JokeModel = mongoose.model<JokeDocument>("Joke", jokeSchema);

export default JokeModel;