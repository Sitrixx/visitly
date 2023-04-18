import React, { useState, useEffect } from "react";

interface BoxesProps {
  input: string;
  response: string;
}

const Boxes: React.FC<BoxesProps> = ({ input, response }) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const delay = 1234;
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="p-2 text-right">
        <p className="bg-[#dadada] p-4 inline-block rounded-lg md:text-xl">
          {input}
        </p>
      </div>
      {showContent ? (
        <div className="p-2 text-left">
          <p className="bg-[#7abafe] p-4 inline-block rounded-lg md:text-xl">
            {response}
          </p>
        </div>
      ) : (
        <div className="p-2 text-left">
          <p className="bg-[#7abafe] p-4 inline-block rounded-lg md:text-xl">
            ...
          </p>
        </div>
      )}
    </div>
  );
};

export default Boxes;
