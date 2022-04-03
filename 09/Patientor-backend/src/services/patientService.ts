/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { v5 as uuid } from 'uuid';
import patients from "../data/patients";
import { Patient, newPatient, safePatient } from "../types";

const getEntries = (): Array<safePatient> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => {
        return {
            id, name, dateOfBirth, gender, occupation
        };
    });
};

const getEntriesById = (id: string): Patient | undefined => {
    return patients.find((patient) => patient.id == id);
};

const postPatients = (patient: newPatient): Patient => {
    const ids = uuid;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id = ids.toString();
    const newest = {
        id,
        ...patient
    };
    patients.push(newest);
    return newest;
};

export default {
    getEntries,
    getEntriesById,
    postPatients
};
