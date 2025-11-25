import express from "express";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { createBareServer } from "@mercuryworkshop/bare-mux/node";
import { epoxyTransport } from "@mercuryworkshop/epoxy-transport/node";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uv/", express.static(path.join(__dirname, "..", "public", "uv")));
app.use("/", express.static(path.join(__dirname, "..", "public")));

export default app;
