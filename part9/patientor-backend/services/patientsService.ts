import patients from "../data/patients";
import { Entry, Gender, Patient, PublicPatient } from "../types";

const getEntriesWithoutSSN = (): PublicPatient[] => {
  return patients.map((patient) => ({
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender as Gender,
    id: patient.id,
    name: patient.name,
    occupation: patient.occupation,
    entries: [] as Entry[],
  }));
};

const getPatientById = (id: string): Patient | undefined => {
  const patient = patients.find((patient) => patient.id === id);

  if (patient) return { ...patient, gender: patient.gender as Gender };

  return undefined;
};

const addPatient = (patient: Patient) => {
  patients.push(patient as any);

  return patient;
};

const addEntry = (id: string, entry: Entry) => {
  const patient = patients.find((patient) => patient.id === id);
  if (!patient) throw Error("invalid id");

  patient.entries.push(entry);
  return entry;
};

export default {
  addPatient,
  getEntriesWithoutSSN,
  getPatientById,
  addEntry,
};
