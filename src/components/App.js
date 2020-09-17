import React from "react";
import Accordion from "./Accordion";
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

export const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};
