import React from "react";
import { Button } from "./Button";
import { buttonList } from "../utils/helper";

function ButtonList() {
  return (
    <div className="max-w-7xl mx-4">
      <ul className="overflow-x-scroll overflow-y-hidden whitespace-nowrap">
        {buttonList.map((item) => (
          <Button key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ButtonList;
