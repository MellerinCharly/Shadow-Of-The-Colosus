import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class IdoleGameRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM idole");

    return rows;
  }
}

export default new IdoleGameRepository();
