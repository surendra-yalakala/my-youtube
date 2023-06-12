import React from "react";

export const Button = ({ name }) => {
  return (
    <li className="px-5 py-2 ml-5 mb-5 mt-5 bg-gray-200 rounded-lg font-sans mr-1 text-sm inline-block">
      {name}
    </li>
  );
};
