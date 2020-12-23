import mysql from "mysql";
import Config from "../config";

class DBConnection {
  private configs = new Config();
  private db;
  constructor() {
    this.db = mysql.createPool({
      host: this.configs.getString("db.host"),
      user: this.configs.getString("db.username"),
      password: this.configs.getString("db.password"),
      database: this.configs.getString("db.name"),
    });

    this.checkConnection();
  }

  checkConnection() {
    this.db.getConnection((err, connection) => {
      if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
      }
      if (connection) {
        connection.release();
      }
      return;
    });
  }

  query = async (sql: string, values?: string[]) => {
    return new Promise((resolve, reject) => {
      const callback = (error: unknown, result: unknown) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      // execute will internally call prepare and query
      this.db.query(sql, values, callback);
    }).catch((err) => {
      throw err;
    });
  };
}

export default new DBConnection().query;
