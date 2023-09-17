import { Express, Request, Response } from "express";
import {
  createJokeHandler,
  getJokeHandler,
  updateJokeHandler,
  deleteJokeHandler,
} from "./controller/joke.controller";
import { createUserHandler } from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";
import {
  createJokeSchema,
  deleteJokeSchema,
  getJokeSchema,
  updateJokeSchema,
} from "./schema/joke.schema";

import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {

  app.get("/isUp", (req: Request, res: Response) => res.sendStatus(200));
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.post(
    "/api/jokes",
    [requireUser, validateResource(createJokeSchema)],
    createJokeHandler
  );
  app.put(
    "/api/jokes/:JokeId",
    [requireUser, validateResource(updateJokeSchema)],
    updateJokeHandler
  );

  app.get(
    "/api/jokes/:JokeId",
    validateResource(getJokeSchema),
    getJokeHandler
  );

  app.delete(
    "/api/jokes/:JokeId",
    [requireUser, validateResource(deleteJokeSchema)],
    deleteJokeHandler
  );
}

export default routes;