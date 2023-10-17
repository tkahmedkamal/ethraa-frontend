import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  IChildren,
  IDropdownContext,
  IDropdownOpenContent,
} from "../interfaces";
import { useClickOutSide, useEscape } from "../hooks";

const DropdownContext = createContext<IDropdownContext>({
  openDropdown: "",
  close: () => {},
  open: () => {},
});

const Dropdown = ({ children }: IChildren) => {
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const close = () => setOpenDropdown("");
  const open = setOpenDropdown;

  return (
    <DropdownContext.Provider value={{ open, close, openDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

const Open = ({ name, children }: IDropdownOpenContent) => {
  const { open } = useContext(DropdownContext);

  return (
    <div onClick={() => open((prev) => (!prev.length ? name : ""))}>
      {children}
    </div>
  );
};

const Content = ({ name, children }: IDropdownOpenContent) => {
  const { openDropdown, close } = useContext(DropdownContext);
  const { ref } = useClickOutSide({ handler: close });
  useEscape(close);

  return (
    <AnimatePresence>
      {name === openDropdown && (
        <div className="absolute left-0 top-8" onClick={close} ref={ref}>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
};

Dropdown.Open = Open;
Dropdown.Content = Content;

export default Dropdown;
