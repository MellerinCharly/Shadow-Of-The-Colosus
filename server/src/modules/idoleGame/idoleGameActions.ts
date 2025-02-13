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

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idole = req.body;

    idole.id = id;

    const editIdole = await idoleGameRepository.update(idole);

    if (editIdole) {
      res.sendStatus(204);
    } else {
      res.status(403).send("An error has occurred");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, edit };
