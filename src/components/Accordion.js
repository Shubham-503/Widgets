import React from "react";

function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.title}>
        <div className="title active">
          <i className="dropdown item"></i>
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems} </div>;
}

export default Accordion;
