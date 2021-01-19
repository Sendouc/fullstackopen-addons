import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  const heightNumber = Number(height);
  const weightNumber = Number(weight);

  if (Number.isNaN(heightNumber) || Number.isNaN(weightNumber)) {
    res.status(400).json({
      error: "malformatted parameters",
    });
  }

  const bmi = calculateBmi(heightNumber, weightNumber);

  res.status(200).json({ weight: weightNumber, height: heightNumber, bmi });
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target)
    res.status(400).json({ error: "parameters missing" });
  if (typeof target !== "number")
    res.status(400).json({ error: "malformatted parameters" });
  if (
    !Array.isArray(daily_exercises) ||
    daily_exercises.some((value) => Number.isNaN(value))
  )
    res.status(400).json({ error: "malformatted parameters" });

  res.status(200).json(calculateExercises(daily_exercises, target));
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
