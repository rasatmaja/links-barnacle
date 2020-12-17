/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 *
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import Server from "./server";

// init server
new Server();

process.on("SIGTERM", () => {
  console.log(`Process ${process.pid} received a SIGTERM signal`);
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log(`Process ${process.pid} has been interrupted`);
  process.exit(0);
});
