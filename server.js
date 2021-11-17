const http = require("http");
require("dotenv").config();
const app = require("./app");

app.set("port", process.env.PORT);

const server = http.createServer(app);

server.listen(process.env.PORT);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Server ready on ${bind}`);
});
