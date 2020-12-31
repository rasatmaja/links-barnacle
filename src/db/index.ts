/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import mysql from "mysql";
import Config from "../config";
import { fLog } from "../utils/log";
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
    const flog = fLog.child({
      ctx: "db",
      func: "checkConnection",
      reqID: "",
    });

    this.db.getConnection((err, connection) => {
      if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          flog.error("⛔️ Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
          flog.error("🤯 Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
          flog.error("⛔️ Database connection was refused.");
        }
      }
      if (connection) {
        flog.trace("⚠️  Database connection release");
        connection.release();
      }
      return;
    });
  }

  query = async (reqID: string, sql: string, values?: string[]) => {
    const flog = fLog.child({
      ctx: "db",
      func: "query",
      reqID: reqID,
    });
    return new Promise((resolve, reject) => {
      const callback = (error: unknown, result: unknown) => {
        if (error) {
          flog.error(`callback got ${error}`);
          reject(error);
          return;
        }
        flog.trace(`callback resolved`);
        resolve(result);
      };
      // execute will internally call prepare and query
      this.db.query(sql, values, callback);
    }).catch((err) => {
      flog.error(`catch error: ${err}`);
      throw err;
    });
  };
}

export default new DBConnection().query;
