import { Router } from "@ysawyers/insourcing-proxy";
// import axios from "axios";

const app = new Router(5000, "127.0.0.1");

const demoRequestHandler = (req, res) => {
  res.end("I am here!");
};

app.get("/data/add", demoRequestHandler);
app.get("/data/remove", demoRequestHandler);

app.listenAndServe(() => {
  console.log(`Server listening on http://127.0.0.1:5000`);
});
