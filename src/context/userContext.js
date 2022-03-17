import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
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
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
}
