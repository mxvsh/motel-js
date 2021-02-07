import app from "./lib/app";
import http from "http";

import logSymbol from "log-symbols";
import { stat } from "fs";
import buildClient from "./lib/build-client";
import { Socket } from "socket.io";

const PORT = process.env.PORT || 7777;

const httpServer = http.createServer(app);
const io: Socket = require("socket.io")(httpServer);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
});

export default {
  startServer: () => {
    const clientPath = `${__dirname}/client`;

    stat(clientPath, (err, stats) => {
      if (err) {
        buildClient();
      }
    });
    httpServer.listen(PORT, () =>
      console.log(
        logSymbol.success,
        `Motel is online. Visit: http://localhost:${PORT}`
      )
    );
  },
};
