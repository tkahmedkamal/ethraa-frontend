import { createContext, useState, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IChildren, IModalContext, IModalOpenContent } from "../interfaces";
import { opacityVariants } from "../helpers/motion";
import { useAuthCtx, useClickOutSide, useEscape } from "../hooks";

const ModalContext = createContext<IModalContext>({} as IModalContext);

const Modal = ({ children }: IChildren) => {
  const [open, setOpen] = useState<string>("");

  const close = () => setOpen("");

  return (
    <ModalContext.Provider value={{ open, setOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ label, children }: IModalOpenContent) => {
  const { setOpen } = useContext(ModalContext);

  return <div onClick={() => setOpen(label)}>{children}</div>;
};

const Content = ({ label, children }: IModalOpenContent) => {
  const { open, close } = useContext(ModalContext);
  const { user } = useAuthCtx();
  const { ref } = useClickOutSide({ handler: close });
  useEscape(close);

  return createPortal(
    <AnimatePresence>
      {label === open && (
        <div className="fixed left-0 right-0 z-40 flex h-full w-full cursor-pointer items-center justify-center bg-common-black/80">
          <motion.div
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-light-default p-6 drop-shadow-2xl dark:bg-dark-default ${
              user?.language === "ar" ? "left-1/2" : "right-1/2"
            }`}
            ref={ref}
          >
            <div className="flex justify-end">
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-3xl text-light-text transition-colors duration-500 hover:bg-light-paper dark:text-dark-text dark:hover:bg-dark-paper"
                onClick={close}
              >
                <span className="material-icons-outlined">close</span>
              </div>
            </div>

            {cloneElement(children, { close })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,

    document.getElementById("overlay") as HTMLElement,
  );
};

Modal.Open = Open;
Modal.Content = Content;

export default Modal;
