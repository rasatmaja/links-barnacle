/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Response, Request } from "express";
class Links {
  getLinks(req: Request, res: Response): void {
    res.status(200).send("Links Barnacle ready to serve");
  }

  getLink(req: Request, res: Response): void {
    res.status(200).send("Links Barnacle ready to serve");
  }
}

export default Links;
