import { createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState();

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  // Partie Modal
  const [modalState, setModolState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModolState({ signUpModal: false, signInModal: true });
    }
    if (modal === "signUp") {
      setModolState({ signUpModal: true, signInModal: false });
    }
    if (modal === "close") {
      setModolState({ signUpModal: false, signInModal: false });
    }
  };
  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
