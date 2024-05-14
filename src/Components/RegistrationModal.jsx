import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import './RegistrationModal.css'

const RegistrationModal = () => {

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
        initialValues={{ username: "", password: "" , confirmPassword:"" , phoneNumber : "" , emailAddress : ""}}
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className='mb-2'>
          <div className="username mb-2" >
            <label htmlFor="formGroupExampleInput" className="form-label inputsLabel">Enter Your Name</label>
            <Field id="username" name="username" type="text"className="form-control" placeholder="Enter your Name"/>
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div className='mb-2' >
            <label htmlFor="formGroupExampleInput" className="form-label inputsLabel">Password</label>
            <Field id="password" name="password" type="password" className="form-control" 
            placeholder="Enter Password" />
            <ErrorMessage name="password" component="span" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="formGroupExampleInput" className="form-label inputsLabel">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" className="form-control"
            placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" component="span" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="formGroupExampleInput" className="form-label inputsLabel">Enter Phone Number</label>
            <Field id="phoneNumber" name="phoneNumber" type="text" className="form-control"
            placeholder="Enter Phone Number" />
            <ErrorMessage name="phoneNumber" component="span" className="error" />
          </div>

          <div className='mb-4'>
            <label htmlFor="formGroupExampleInput" className="form-label inputsLabel">Enter Email Address</label>
            <Field id="emailAddress" name="emailAddress" type="email" className="form-control"
            placeholder="Enter Email Address" />
            <ErrorMessage name="emailAddress" component="span" className="error" />
          </div>

          <div className="registerCancel">
            <button
              type="submit"
              className="btn btn-success me-2"
              data-bs-dismiss="modal"
            >
              Register
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
                  </div>
     
                </div>
              </div>
    </div>
    
  )
}

export default RegistrationModal