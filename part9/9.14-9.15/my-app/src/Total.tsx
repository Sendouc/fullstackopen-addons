import React from "react";

interface Props {
  parts: {
    name: string;
    exerciseCount: number;
  }[];
}

const Total: React.FC<Props> = ({ parts }) => (
  <p>
    Number of exercises{" "}
    {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </p>
);

export default Total;
