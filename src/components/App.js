import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Route from "./Route";
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

export const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
