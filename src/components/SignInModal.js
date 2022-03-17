import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);
  console.log(signIn);

  const navigate = useNavigate();

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) inputs.current.push(el);
  };
  const [validation, setValidation] = useState("");

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );

      setValidation("");
      console.log(cred);
      toggleModals("close");
      navigate("/private/private-home");
    } catch (err) {
      setValidation("Les identifiants de connexion sont incorrects.");
    }
  };
  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };
  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={closeModal}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Connexion</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signInEmail">Email</label>
                      <input
                        ref={addInputs}
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        id="signInEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signInPwd">Mot de passe</label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        type="password"
                        className="form-control"
                        required
                        id="signUpPwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
