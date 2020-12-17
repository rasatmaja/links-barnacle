/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Response } from "express";
class Links {
  getLinks(res: Response): void {
    res.send("Links Barnacle ready to serve");
  }

  getLink(res: Response): void {
    res.send("Links Barnacle ready to serve");
  }
}

export default Links;
