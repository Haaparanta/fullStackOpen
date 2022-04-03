
import express from "express";
import diagnosesService from "../services/diagnosesService";

const router = express.Router();

router.get('/', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(diagnosesService.getDiagnoses());
});

export default router;
