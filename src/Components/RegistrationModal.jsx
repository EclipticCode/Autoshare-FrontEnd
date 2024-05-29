import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./RegistrationModal.css";
import axios from 'axios';
import bcryptjs from 'bcryptjs';
import { apiUrl } from "./constants";



const RegistrationModal = () => {

  const handleSubmit = async (values) => {
    // console.log(values.password)
    const myHashPassword = await bcryptjs.hash(values.password , 0)
    // const isValid = await bcryptjs.compare(values.password , myHashPassword)
    // console.log(myHashPassword);
    // console.log(isValid)

    axios.post(`${apiUrl}/registration`, {
      usrename: values.username ,
      password : myHashPassword ,
      phoneNumber : values.phoneNumber ,
      emailAddress : values.emailAddress ,
    })
  }

  const handleClear = (formik) => {
    formik.resetForm();
  }

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdropRegister"
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
                Enter Registration Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="form formikForm">
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  confirmPassword: "",
                  phoneNumber: "",
                  emailAddress: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "*Username is required";
                  }
                  if (!values.password) {
                    errors.password = "*Password is required";
                  }
                  if (!values.confirmPassword) {
                    errors.confirmPassword = "*Enter a valid password";
                  }
                  if (!values.phoneNumber) {
                    errors.phoneNumber = "*Enter Phone Number";
                  }
                  if (!values.emailAddress) {
                    errors.emailAddress = "*Enter Email Address";
                  }
                  return errors;
                }}
                onSubmit={handleSubmit}
              >
               {(formik) => (
                 <Form>
                 <div className="username mb-2">
                   <label
                     htmlFor="formGroupExampleInput"
                     className="form-label inputsLabel"
                   >
                     Enter Your Name
                   </label>
                   <Field
                     id="usernameInputRegister"
                     name="username"
                     type="text"
                     className="form-control"
                     placeholder="Enter your Name"
                   />
                   <ErrorMessage
                     name="username"
                     component="span"
                     className="error"
                   />
                 </div>

                 <div className="mb-2" >
                   <label
                     htmlFor="formGroupExampleInput"
                     className="form-label inputsLabel"
                   >
                     Password
                   </label>
                   <Field
                     id="passwordInputRegister"
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

                 <div className="mb-2">
                   <label
                     htmlFor="formGroupExampleInput"
                     className="form-label inputsLabel"
                   >
                     Confirm Password
                   </label>
                   <Field
                     id="confirmPasswordRegister"
                     name="confirmPassword"
                     type="password"
                     className="form-control"
                     placeholder="Confirm Password"
                   />
                   <ErrorMessage
                     name="confirmPassword"
                     component="span"
                     className="error"
                   />
                 </div>

                 <div className="mb-2">
                   <label
                     htmlFor="formGroupExampleInput"
                     className="form-label inputsLabel"
                   >
                     Enter Phone Number
                   </label>
                   <Field
                     id="phoneNumber"
                     name="phoneNumber"
                     type="number"
                     className="form-control"
                     placeholder="Enter Phone Number"
                   />
                   <ErrorMessage
                     name="phoneNumber"
                     component="span"
                     className="error"
                   />
                 </div>

                 <div className="mb-4">
                   <label
                     htmlFor="formGroupExampleInput"
                     className="form-label inputsLabel"
                   >
                     Enter Email Address
                   </label>
                   <Field
                     id="emailAddress"
                     name="emailAddress"
                     type="email"
                     className="form-control"
                     placeholder="Enter Email Address"
                   />
                   <ErrorMessage
                     name="emailAddress"
                     component="span"
                     className="error"
                   />
                 </div>

                 <div className="registerCancel">
                   <button
                     type="submit"
                     className="btn btn-success me-2"
                    //  data-bs-dismiss="modal"
                   >
                     Register
                   </button>
                   <button type="button" className="btn btn-secondary" onClick={() => handleClear(formik)}>
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

export default RegistrationModal;
