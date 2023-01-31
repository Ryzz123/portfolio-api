import express from "express";
import { deleteKeahlian, deletePendidikan, deletePengalaman, getKeahlian, getPendidikan, getPengalaman, saveKeahlian, savePendidikan, savePengalaman, updateKeahlian, updatePendidikan, updatePengalaman } from "../controllers/DataController.js";

const route = express.Router();

route.get("/pendidikan", getPendidikan);
route.post("/pendidikan", savePendidikan);
route.patch("/pendidikan", updatePendidikan);
route.delete("/pendidikan", deletePendidikan);

route.get("/pengalaman", getPengalaman);
route.post("/pengalaman", savePengalaman);
route.patch("/pengalaman", updatePengalaman);
route.delete("/pengalaman", deletePengalaman);

route.get("/keahlian", getKeahlian);
route.post("/keahlian", saveKeahlian);
route.patch("/keahlian", updateKeahlian);
route.delete("/keahlian", deleteKeahlian);

export default route;