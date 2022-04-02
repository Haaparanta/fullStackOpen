import express from "express";
import DData from "./data/diagnoses.json";


interface Diagnose {
    code: string;
    name: string;
    latin?: string; // optional property
}

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(DData);
});


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/diagnoses', router);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
