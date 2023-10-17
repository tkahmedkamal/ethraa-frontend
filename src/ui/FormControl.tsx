import React from "react";
import { IChildren } from "../interfaces";

const FormControl: React.FC<IChildren> = ({ children }) => {
  return <div className="mb-4 w-full">{children}</div>;
};

export default FormControl;
