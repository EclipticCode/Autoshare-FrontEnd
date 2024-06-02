import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./LoginModal.css";
import axios from "axios";
import { apiUrl } from "./constants";

const LoginModal = () => {
  const handleSubmit = async (values) => {
    const apiResponse = await axios.get(
      `${apiUrl}/login/${values.username}/${values.password}`);
    try {
      if (apiResponse.data && apiResponse.data != "Login failed") {

        const { username, token } = apiResponse.data;
        localStorage.setItem("login", username);
        localStorage.setItem("token", token);
        
        window.location.reload();
        return;
      }
      alert("Invalid Username or Password");
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleClear = (formik) => {
    formik.resetForm();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Enter Username and Password
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="form formFormik">
              <Formik
                initialValues={{ username: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "*Username is required";
                  }
                  if (!values.password) {
                    errors.password = "*Password is required";
                  }
                  return errors;
                }}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form
                  >
                    <div className="mb-2">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label UserPass"
                      >
                        Username
                      </label>
                      <Field
                        id="usernameInput"
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                      />
                      <ErrorMessage
                        name="username"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label UserPass"
                      >
                        Password
                      </label>
                      <Field
                        id="passwordInput"
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="buttons mt-4">
                      <button
                        type="submit"
                        className="btn btn-success"
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={() => handleClear(formik)}
                      >
                        Clear
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
