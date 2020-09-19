import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

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
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};
const showSearch = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export const App = () => {
  return (
    <div>
      {showAccordion()}
      {showDropdown()}
      {showTranslate()}
      {showSearch()}
    </div>
  );
};
