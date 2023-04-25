"use client";

import React, { useState } from "react";
import Boxes from "@/components/chatbot-boxes/Boxes";
import useDialogflow from "@/hooks/dialogflow/useDialogflow";
import { AiOutlineSend } from "react-icons/ai";

const ChatbotWidget: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chatbotBoxes, setChatbotBoxes] = useState<Array<JSX.Element>>([]);
  const { detectIntent } = useDialogflow();

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClick = async () => {
    const response = await detectIntent(inputValue);
    setChatbotBoxes((prevList) => [
      ...prevList,
      <Boxes key={prevList.length} input={inputValue} response={response} />,
    ]);
    setInputValue("");
  };

  return (
    <div className="flex flex-row justify-between bg-gradient-chatbox rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center">
      <div className="flex flex-col items-center w-full">
        {chatbotBoxes.length !== 0 ? (
          <div className="m-2 w-full overflow-scroll max-h-40">
            {chatbotBoxes}
          </div>
        ) : null}
        <div className="text-lg font-normal md:text-2xl w-full md:m-3">
          <div className="flex flex-row justify-evenly w-full">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              id="chatbox-input"
              className="m-1 rounded-lg px-3 outline-none md:px-4 w-full"
              placeholder="Write your query here..."
            />
            <button
              onClick={handleClick}
              className="bg-white p-3 m-1 rounded-lg"
              id="chatbox-button"
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
