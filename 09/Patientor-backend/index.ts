import express from "express";
import DData from "./data/diagnoses.json";
import PData from "./data/patients.json";
import { PublicPatient } from "./patient";


interface Diagnose {
    code: string;
    name: string;
    latin?: string; // optional property
}

const patients: PublicPatient[] = PData;

const routerD = express.Router();
const routerP = express.Router();

routerD.get('/', (_req, res) => {
    res.send(DData);
});


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/diagnoses', routerD);


routerP.get('/', (req, res) => {
    res.send(patients);
});

app.use('/api/patients', routerP);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
