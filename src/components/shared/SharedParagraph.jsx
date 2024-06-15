import React from "react";
import { Link } from "react-router-dom";
function SharedParagraph({ p, navigate, link }) {
  return (
    <p className="text-[gray]">
      {p}{" "}
      <span className="underline text-ligthGreen hover:text-white">
        <Link to={link}>{navigate}</Link>
      </span>
    </p>
  );
}

export default SharedParagraph;
