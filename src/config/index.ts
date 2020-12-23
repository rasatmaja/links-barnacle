/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import dotenv from "dotenv";
import path from "path";

class Config {
  private cfg = new Map();

  initCfg(): void {
    // load the environment variables from the .env file
    dotenv.config({ path: path.resolve(process.cwd(), ".env") });

    this.cfg.set("server.host", process.env.APP_SERVER_HOST || "localhost");
    this.cfg.set("server.port", process.env.APP_SERVER_PORT || 5000);

    // Database Setup
    this.cfg.set("db.host", process.env.APP_DB_HOST || "localhost");
    this.cfg.set("db.port", process.env.APP_DB_PORT || 3306);
    this.cfg.set("db.name", process.env.APP_DB_NAME || "links");
    this.cfg.set("db.username", process.env.APP_DB_USER || "root");
    this.cfg.set("db.password", process.env.APP_DB_PASSWORD || "root");

    // CORS Setup
    this.cfg.set("cors.enable", process.env.APP_CORS_ENABLE || true);
    this.cfg.set(
      "cors.allow.origins",
      process.env.APP_CORS_ALLOW_ORIGIN || "*"
    );
    this.cfg.set(
      "cors.allow.credential",
      process.env.APP_CORS_ALLOW_CREENTIAL || true
    );
    this.cfg.set(
      "cors.allow.method",
      process.env.APP_CORS_ALLOW_METHOD || "GET,PUT,DELETE,POST,OPTIONS"
    );
    this.cfg.set(
      "cors.exposed.headers",
      process.env.APP_CORS_EXPOSED_HEADERS || "*"
    );
  }

  get(key: string): unknown {
    if (this.cfg.size == 0) {
      this.initCfg();
    }
    return this.cfg.get(key);
  }

  getString(key: string): string {
    if (this.cfg.size == 0) {
      this.initCfg();
    }
    return this.cfg.get(key);
  }

  getBool(key: string): boolean {
    if (this.cfg.size == 0) {
      this.initCfg();
    }
    return this.cfg.get(key);
  }

  getNumb(key: string): number {
    if (this.cfg.size == 0) {
      this.initCfg();
    }
    return this.cfg.get(key);
  }
}

export default Config;
