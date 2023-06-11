import React, { useMemo, useState } from "react";
import { nthprime } from "../utils/helper";

const Demo = () => {
  const [text, steText] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const prime = useMemo(() => nthprime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-red-300")
      }
    >
      <div>
        <button
          className="bg-slate-400 m-2 p-2"
          onClick={() => setIsDark(!isDark)}
        >
          change theme
        </button>
        <span className="text-black">isdark : {isDark}</span>
      </div>
      <div>
        <input
          className="border border-black"
          type="number"
          value={text}
          onChange={(e) => steText(e.target.value)}
        />
      </div>
      <div>
        <h1 className={"font-bold" + (isDark && "text-red-500")}>
          Nth prime number: {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
