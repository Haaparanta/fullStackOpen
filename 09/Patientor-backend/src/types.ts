
export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
    entries: Entry[];
}

export type newPatient = Omit<Patient, 'id'>;
export type safePatient = Omit<Patient, 'ssn' | 'entries'>;




