/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Response, Request } from "express";
import { fLog } from "../utils/log";
import GenerateRamdomString from "../utils/random.string";
class Links {
  getLinks(req: Request, res: Response): void {
    const reqID = req.headers["X-Request-ID"];
    const flog = fLog.child({
      ctx: "links",
      func: "getlinks",
      reqID: reqID,
    });

    flog.trace("Successfully retrive data");
    res.status(200).send(GenerateRamdomString(12, true, true, true));
  }

  getLink(req: Request, res: Response): void {
    const reqID = req.headers["X-Request-ID"];
    const flog = fLog.child({
      ctx: "links",
      func: "getlinks",
      reqID: reqID,
    });

    flog.trace("Successfully retrive data");
    res.status(200).send("Links Barnacle ready to serve");
  }
}

export default Links;
