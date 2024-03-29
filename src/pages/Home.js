import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? "Welcome Mec" : "Hi, Sign Up or Sign In"}
      </h1>
      <p className="text-light">
        {currentUser
          ? "Tu as vu l'image ou pas ??"
          : "Essai de te connecter pour me dire quelle image tu vois :)"}
      </p>
    </div>
  );
}
