import query from "../db";
class LinkRepo {
  tableName = "links";

  async getAll() {
    const sql = `SELECT * FROM ${this.tableName} ORDER BY SECTION ASC`;
    return await query(sql);
  }
}

export default new LinkRepo();
