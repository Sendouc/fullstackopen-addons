interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  exerciseHours: number[],
  target: number
): Result => {
  const getRating = () => {
    if (!exerciseHours.every((hours) => hours >= target))
      return { rating: 1, ratingDescription: "bad" };
    if (
      exerciseHours.reduce((acc, cur) => acc + cur, 0) / exerciseHours.length >
      target * 2
    )
      return { rating: 3, ratingDescription: "excellent" };

    return { rating: 2, ratingDescription: "good" };
  };

  const { rating, ratingDescription } = getRating();
  return {
    periodLength: exerciseHours.length,
    trainingDays: exerciseHours.reduce(
      (acc, cur) => (cur !== 0 ? ++acc : acc),
      0
    ),
    average:
      exerciseHours.reduce((acc, cur) => acc + cur, 0) / exerciseHours.length,
    rating,
    ratingDescription,
    success: exerciseHours.every((hours) => hours >= target),
    target,
  };
};

// const calcArgs = process.argv.slice(2);

// if (calcArgs.length < 2) throw Error("invalid arguments");

// const calcParameters = calcArgs.map((arg) => Number(arg));
// if (calcParameters.some((param) => Number.isNaN(param))) {
//   throw Error("non-number argument given");
// }

// console.log(calculateExercises(calcParameters.slice(1), calcParameters[0]));
