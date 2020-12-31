/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Response, Request, NextFunction } from "express";
import { fLog } from "../utils/log";
import GenerateRamdomString from "../utils/random.string";
const transactions = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const reqID = GenerateRamdomString(10, true, true, true);
  const flog = fLog.child({
    ctx: "middleware",
    func: "transaction",
    reqID: reqID,
  });
  flog.trace("Start Transactions");
  req.headers["X-Request-ID"] = reqID;
  res.setHeader("X-Request-ID", reqID);
  next();
  flog.trace("End Transactions");
};
export default transactions;
