"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const uuid_1 = require("uuid");
const patients_1 = __importDefault(require("../data/patients"));
const getEntries = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => {
        return {
            id, name, dateOfBirth, gender, occupation
        };
    });
};
const postPatients = (patient) => {
    const ids = uuid_1.v5;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id = ids.toString();
    const newest = Object.assign({ id }, patient);
    patients_1.default.push(newest);
    return newest;
};
exports.default = {
    getEntries,
    postPatients
};
