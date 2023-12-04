"use client";

import {createContext, useContext, useState} from "react";

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
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
