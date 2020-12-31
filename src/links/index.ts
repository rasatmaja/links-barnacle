/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Response, Request } from "express";
import { fLog } from "../utils/log";
import LinksModels from "./models";
import LinkRepo from "./repository";
class Links {
  getLinks(req: Request, res: Response): void {
    const reqHeader = req.headers["X-Request-ID"];
    let reqID = "";
    if (reqHeader != undefined) {
      reqID = reqHeader.toString();
    }
    const flog = fLog.child({
      ctx: "links",
      func: "getlinks",
      reqID: reqID,
    });

    const links = LinkRepo.getAll(reqID);
    links
      .then(function (results) {
        flog.trace("Successfully retrive data");
        const arrLinks: LinksModels[] = [];
        if (Array.isArray(results)) {
          results.forEach((result) => {
            arrLinks.push(
              new LinksModels({
                id: result.ID,
                name: result.NAME,
                section: result.SECTION,
                color: result.COLOR,
                description: result.DESCRIPTIONS,
                hyperlinks: result.HYPERLINKS,
              })
            );
          });

          type responseType = {
            [key: string]: Array<LinksModels>;
          };

          const resMap: responseType = {};
          arrLinks.forEach((link) => {
            const section = link.section as string;
            let arrLinkModel = resMap[section];
            link.section = undefined;
            if (arrLinkModel) {
              arrLinkModel.push(link);
              resMap[section] = arrLinkModel;
            } else {
              arrLinkModel = <LinksModels[]>[];
              arrLinkModel.push(link);
              resMap[section] = arrLinkModel;
            }
          });
          res.status(200).json(resMap);
        }
      })
      .catch(function (reason) {
        flog.trace("Error retrive data");
        res.status(500).json(reason);
      });
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
