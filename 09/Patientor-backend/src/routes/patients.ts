import express from "express";
import patientsService from "../services/patientService";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getEntries());
});

router.post('/', (req, res) => {
    try {
        const newPatient = patientsService.postPatients(req.body);
        res.json(newPatient);
    } catch (e: any) {
        res.status(400).send(e.message);
    }
});

export default router;
