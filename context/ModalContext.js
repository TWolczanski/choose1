import {createContext, useContext, useState} from "react";
import Modal from "../components/Modal";

const ModalContext = createContext();

export function ModalProvider({children}) {
  const [content, setContent] = useState();
  const open = !!content;
  return (
    <ModalContext.Provider
      value={{
        open,
        content,
        setContent,
      }}
    >
      {content && (
        <Modal open={open} close={() => setContent()}>
          {content}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
