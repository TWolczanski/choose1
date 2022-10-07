import {createContext, useContext, useState} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import NewPost from "../components/NewPost";
import Modal from "../components/Modal";

const ModalContext = createContext();

export function ModalProvider({children}) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [newPostOpen, setNewPostOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        open: signInOpen || signUpOpen || newPostOpen,
        setSignInOpen,
        setSignUpOpen,
        setNewPostOpen,
      }}
    >
      <Modal open={signInOpen} close={() => setSignInOpen(false)}>
        <SignIn />
      </Modal>
      <Modal open={signUpOpen} close={() => setSignUpOpen(false)}>
        <SignUp />
      </Modal>
      <Modal open={newPostOpen} close={() => setNewPostOpen(false)}>
        <NewPost />
      </Modal>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
