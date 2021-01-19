import { Entry, Gender, Patient } from "./types";

const isString = (text: any): text is string => {
  return typeof text === "string";
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

const parseString = (value: any): any => {
  if (!value || !isString(value)) {
    throw new Error("Incorrect or missing string: " + value);
  }
  return value;
};

export const toNewPatient = (object: any): Patient => {
  return {
    dateOfBirth: parseString(object.dateOfBirth),
    gender: parseGender(object.gender),
    id: "" + Math.random(),
    name: parseString(object.name),
    occupation: parseString(object.occupation),
    ssn: parseString(object.ssn),
    entries: [],
  };
};

export const toEntry = (object: any): Entry => {
  switch (object.type) {
    case "HealthCheck":
      if (typeof object.healthCheckRating === "number") return object;

      throw new Error("Incorrect entry");
    case "Hospital":
      if (object.discharge) return object;

      throw new Error("Incorrect entry");
    case "OccupationalHealthcare":
      if (object.employerName) return object;

      throw new Error("Incorrect entry");
    default:
      throw new Error("Incorrect entry");
  }
};
