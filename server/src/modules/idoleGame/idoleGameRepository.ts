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
      "INSERT INTO idole (name, image, text) VALUES (?, ?, ?)",
      [idoleGame.name, idoleGame.image, idoleGame.text],
    );
    return result.insertId;
  }

  async update(idole: IdoleGame) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE idole SET name = ?, image = ?, text = ? WHERE id = ?",
      [idole.name, idole.image, idole.text, idole.id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM idole WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new IdoleGameRepository();
