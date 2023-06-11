import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMsgs } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = ({ name }) => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const chatMsgs = useSelector((store) => store.chatSlice.msgs);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMsgs({
          name: generateRandomName(),
          message: generateRandomMsg(30),
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-full h-[500px] m-2 p-2 border border-gray-300 bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse flex">
        {chatMsgs.map((chat) => (
          <ChatMessage name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMsgs({
              name: "Surendra Yalakala",
              message: liveMsg + " 🥳 🥳 🥳 🥳",
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className="w-72"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-blue-300">submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
