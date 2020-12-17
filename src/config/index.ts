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

    this.cfg.set("HOST", process.env.APP_HOST || "localhost");
    this.cfg.set("PORT", process.env.APP_PORT || 5000);
  }

  get(key: string): unknown {
    if (this.cfg.size == 0) {
      this.initCfg();
    }
    return this.cfg.get(key);
  }
}

export default Config;
