import React from "react";

function SharedButton({ buttonText }) {
  return (
    <button
      type="submit"
      className="bg-white rounded-lg px-4 py-2 hover:bg-ligthGreen hover:text-white"
    >
      {buttonText}
    </button>
  );
}

export default SharedButton;
