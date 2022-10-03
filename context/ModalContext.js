import {createContext, useContext, useState} from "react";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";
import NewPostModal from "../components/NewPostModal";

const ModalContext = createContext();

export function ModalProvider({children}) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [newPostOpen, setNewPostOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{setSignInOpen, setSignUpOpen, setNewPostOpen}}
    >
      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
      {signUpOpen && <SignUpModal onClose={() => setSignUpOpen(false)} />}
      {newPostOpen && <NewPostModal onClose={() => setNewPostOpen(false)} />}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
