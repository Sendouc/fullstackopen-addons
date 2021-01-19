export const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / Math.pow(height / 100, 2);

  if (bmi <= 15) return "Very severely underweight";
  if (bmi <= 16) return "Severely underweight";
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25) return "Normal (healthy weight)";
  if (bmi <= 30) return "Overweight";

  return "Obese";
};

// const args = process.argv.slice(2);

// if (args.length !== 2) throw Error("invalid arguments");

// const parameters = args.map((arg) => Number(arg));
// if (parameters.some((param) => Number.isNaN(param))) {
//   throw Error("non-number argument given");
// }

// console.log(calculateBmi(parameters[0], parameters[1]));
