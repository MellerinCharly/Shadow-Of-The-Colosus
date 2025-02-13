import type { RequestHandler } from "express";
import idoleGameRepository from "./idoleGameRepository";

interface idoleGame {
  id: number;
  name: string;
  image: string;
}

const browse: RequestHandler = async (req, res, next) => {
  try {
    const idoleGame = await idoleGameRepository.readAll();

    res.json(idoleGame);
  } catch (err) {
    next(err);
  }
};

export default { browse };
