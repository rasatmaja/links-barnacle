/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import query from "../db";
class LinkRepo {
  tableName = "links";

  async getAll(reqID: string) {
    const sql = `SELECT * FROM ${this.tableName} ORDER BY SECTION ASC`;
    return await query(reqID, sql);
  }
}

export default new LinkRepo();
