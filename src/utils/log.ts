/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import pino from "pino";
import Config from "../config";

const config = new Config();
const log = pino({
  safe: true,
  level: config.getString("log.level"),
  prettyPrint: {
    levelFirst: true,
    ignore: "pid,hostname,reqID,func,ctx",
    timestampKey: "time",
    translateTime: "yyyy-mm-dd HH:MM:ss",
  },
  prettifier: require("pino-pretty"),
});
const fLog = pino({
  safe: true,
  level: config.getString("log.level"),
  prettyPrint: {
    levelFirst: true,
    ignore: "pid,hostname,reqID,func,ctx",
    timestampKey: "time",
    translateTime: "yyyy-mm-dd HH:MM:ss",
    messageFormat: '{msg}, reqID="{reqID}", ctx="{ctx}", func="{func}""',
  },
  prettifier: require("pino-pretty"),
});

export { log, fLog };
