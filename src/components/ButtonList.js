import React from "react";
import { Button } from "./Button";

function ButtonList() {
  return (
    <div className="flex">
      <Button name={"All"} />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="Music" />
    </div>
  );
}

export default ButtonList;
