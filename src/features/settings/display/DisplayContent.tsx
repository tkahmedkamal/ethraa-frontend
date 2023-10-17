import React from "react";
import DisplayContentTheme from "./DisplayContentTheme";
import DisplayContentLanguage from "./DisplayContentLanguage";

const DisplayContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <DisplayContentTheme />
      <DisplayContentLanguage />
    </div>
  );
};

export default DisplayContent;
