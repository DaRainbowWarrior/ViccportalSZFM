import { object, string, TypeOf } from "zod";
const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }).min(60, "Description should be at least 60 characters long"),
  }),
};

const params = {
  params: object({
    jokeId: string({
      required_error: "jokeId is required",
    }),
  }),
};

export const createJokeSchema = object({
  ...payload,
});

export const updateJokeSchema = object({
  ...payload,
  ...params,
});

export const deleteJokeSchema = object({
  ...params,
});

export const getJokeSchema = object({
  ...params,
});

export type CreateJokeInput = TypeOf<typeof createJokeSchema>;
export type UpdateJokeInput = TypeOf<typeof updateJokeSchema>;
export type ReadJokeInput = TypeOf<typeof getJokeSchema>;
export type DeleteJokeInput = TypeOf<typeof deleteJokeSchema>;