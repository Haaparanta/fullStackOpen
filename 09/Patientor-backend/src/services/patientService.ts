import patients from "../data/patients";
import { Patient, newPatient, safePatient } from "../types";

const getEntries = (): Array<safePatient> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation})) => {
        return {
            id, name, dateOfBirth, gender, occupation
        };
    });
};

const postPatients = (new: newPatient): Patient => {
    patients.push(new);
    return new;
};

export default {
    getEntries,
    postPatients
};
