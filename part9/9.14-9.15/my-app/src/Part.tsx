import React from "react";
import { CoursePart } from "./index";

interface Props {
  part: CoursePart;
}

const Part: React.FC<Props> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <>
          <p>{part.name}</p>
          <p>{part.description}</p>
          <p>{part.exerciseCount}</p>
        </>
      );
    case "Deeper type usage":
      return (
        <>
          <p>{part.name}</p>
          <p>{part.description}</p>
          <p>{part.exerciseCount}</p>
          <p>{part.exerciseSubmissionLink}</p>
        </>
      );
    case "Using props to pass data":
      return (
        <>
          <p>{part.name}</p>
          <p>{part.groupProjectCount}</p>
          <p>{part.exerciseCount}</p>
        </>
      );
    case "What":
      return (
        <>
          <p>{part.name}</p>
          <p>{part.confusing ? "confusing" : "not confusing"}</p>
          <p>{part.exerciseCount}</p>
        </>
      );
    default:
      console.error("Invalid part: ", JSON.stringify(part));
      return null;
  }
};

export default Part;
