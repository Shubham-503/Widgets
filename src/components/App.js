import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript Library",
  },
  {
    title: "Why use React?",
    content: "React is easy to implement and most popular js framework.",
  },
  {
    title: "React-Native or Flutter?",
    content: "Anytime React-Native",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The shades of Blue",
    value: "blue",
  },
];

export const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
