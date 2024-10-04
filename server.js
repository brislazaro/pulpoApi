const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");

server.use(cors());
server.use(jsonServer.defaults());

server.use(router);

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
