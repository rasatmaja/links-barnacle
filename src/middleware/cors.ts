/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 *
 * CORS
 * Access-Control-Allow-Credentials:
 * This is set to true to enable credentials This is because I set the credentials
 * property in my options object to true.
 *
 * Access-Control-Allow-Headers:
 * This matches the values that I provided the cors middleware in the allowedHeaders
 * property of the configuration options.
 *
 * Access-Control-Allow-Methods:
 * Again, this matches the values in the methods property.
 *
 * Access-Control-Allow-Origin:
 * This is the value of my API_URL constant string. This is to limit CORS requests
 * to a single origin, which is project link.rasio.dev.
 */

import cors from "cors";
import Config from "../config";

const configs = new Config();
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: configs.getBool("cors.allow.credential"),
  methods: configs.getString("cors.allow.method"),
  origin: configs.getString("cors.allow.origins"),
  preflightContinue: false,
};
const corsMiddleware = cors(options);
export default corsMiddleware;
