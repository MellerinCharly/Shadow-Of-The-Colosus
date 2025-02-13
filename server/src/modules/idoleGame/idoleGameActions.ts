import type { RequestHandler } from "express";
import idoleGameRepository from "./idoleGameRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const idoleGame = await idoleGameRepository.readAll();

    res.json(idoleGame);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const addIdole = await idoleGameRepository.create(req.body);

    if (addIdole) {
      res
        .status(201)
        .send(
          `The video game named ${req.body.name} has been created succesfully `,
        );
    } else {
      res.status(404).send("an error has occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add };
