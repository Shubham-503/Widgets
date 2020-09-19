import React from "react";

function Link({ href, className, children }) {
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;
