import { Request, Response } from "express";
import {
  CreateJokeInput,
  UpdateJokeInput,
} from "../schema/joke.schema";
import {
  createJoke,
  deleteJoke,
  findAndUpdateJoke,
  findJoke,
} from "../service/joke.service";

export async function createJokeHandler(
  req: Request<{}, {}, CreateJokeInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const body = req.body;

  const joke = await createJoke({ ...body, user: userId });

  return res.send(joke);
}

export async function updateJokeHandler(
  req: Request<UpdateJokeInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const jokeId = req.params.jokeId;
  const update = req.body;

  const joke = await findJoke({ jokeId });

  if (!joke) {
    return res.sendStatus(404);
  }

  if (String(joke.user) !== userId) {
    return res.sendStatus(403);
  }

  const updatedJoke = await findAndUpdateJoke({ jokeId }, update, {
    new: true,
  });

  return res.send(updatedJoke);
}

export async function getJokeHandler(
  req: Request<UpdateJokeInput["params"]>,
  res: Response
) {
  const jokeId = req.params.jokeId;
  const joke = await findJoke({ jokeId });

  if (!joke) {
    return res.sendStatus(404);
  }

  return res.send(joke);
}

export async function deleteJokeHandler(
  req: Request<UpdateJokeInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const jokeId = req.params.jokeId;

  const joke = await findJoke({ jokeId });

  if (!joke) {
    return res.sendStatus(404);
  }

  if (String(joke.user) !== userId) {
    return res.sendStatus(403);
  }

  await deleteJoke({ jokeId });

  return res.sendStatus(200);
}