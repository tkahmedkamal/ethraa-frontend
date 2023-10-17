import { useEffect, useRef } from "react";
import { IOutsideClick } from "../interfaces";

const useClickOutSide = ({ handler, eventOption = true }: IOutsideClick) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, eventOption);

    return () => {
      document.removeEventListener("click", handleClick, eventOption);
    };
  }, [handler, eventOption]);

  return { ref };
};

export default useClickOutSide;
