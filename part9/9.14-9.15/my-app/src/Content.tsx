import React from "react";
import { CoursePart } from ".";
import Part from "./Part";

interface Props {
  parts: CoursePart[];
}

const Content: React.FC<Props> = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part part={part} />
    ))}
  </>
);

export default Content;
