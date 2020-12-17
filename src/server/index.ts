/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import express, { Application } from "express";
import Routers from "./router";
import Config from "../config";
import { log } from "../utils/log";
import trxMiddleware from "../middleware/transaction";

class Server {
  private server: Application = express();
  private routers: Routers = new Routers();
  private config: Config = new Config();

  constructor() {
    log.debug("Starting server ...");

    // setting up routing
    this.server.use(trxMiddleware);
    const routes = this.routers.getRoutes();
    this.server.use("/", routes);
    this.walk(routes);

    //setting up server host and port
    const port = this.config.get("PORT");
    this.server.listen(port, () => {
      log.debug(`Server listening on PORT:${port}`);
      log.debug(`Server running on PID:${process.pid}`);
    });
  }

  private walk(routes: express.Router): void {
    routes.stack
      .filter((r) => r.route)
      .map((r) => {
        const method = Object.keys(r.route.methods)[0].toUpperCase();
        const path = r.route.path;
        log.trace(`${method}: ${path}`);
      });
  }
}

export default Server;
