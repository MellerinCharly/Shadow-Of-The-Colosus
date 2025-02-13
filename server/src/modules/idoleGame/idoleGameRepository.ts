import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { IdoleGame } from "./idole";

class IdoleGameRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM idole");

    return rows as IdoleGame[];
  }

  async create(idoleGame: IdoleGame) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO ingredient (name, image, text) VALUES (?, ?, ?)",
      [idoleGame.name, idoleGame.image, idoleGame.text],
    );

    return result.insertId;
  }
}

export default new IdoleGameRepository();
