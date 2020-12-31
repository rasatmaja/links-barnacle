import query from "../db";
class LinkRepo {
  tableName = "links";

  async getAll(reqID: string) {
    const sql = `SELECT * FROM ${this.tableName} ORDER BY SECTION ASC`;
    return await query(reqID, sql);
  }
}

export default new LinkRepo();
