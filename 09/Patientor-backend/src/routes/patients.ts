import express from "express";
import patientsService from "../services/patientService";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getEntries());
});

router.get('/:id', (req, res) => {
    const id: string = req.params.id;
    const patient = patientsService.getEntriesById(id);
    if (patient) {
        return res.send(patient);
    } else {
        return res.status(404).send({ error: 'Patient not found' });
    }
});

router.post('/', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newPatient = patientsService.postPatients(req.body);
        res.json(newPatient);
    } catch (e: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.status(400).send(e.message);
    }
});

export default router;
