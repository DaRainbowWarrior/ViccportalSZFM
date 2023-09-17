import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import JokeModel, {
  JokeDocument,
  JokeInput,
} from "../models/joke.model";

export async function createJoke(input: JokeInput) {
  try {
    const result = await JokeModel.create(input);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function findJoke(
  query: FilterQuery<JokeDocument>,
  options: QueryOptions = { lean: true }
) {
  try {
    const result = await JokeModel.findOne(query, {}, options);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function findAndUpdateJoke(
  query: FilterQuery<JokeDocument>,
  update: UpdateQuery<JokeDocument>,
  options: QueryOptions
) {
  return JokeModel.findOneAndUpdate(query, update, options);
}

export async function deleteJoke(query: FilterQuery<JokeDocument>) {
  return JokeModel.deleteOne(query);
}