import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import './LoginModal.css'


const LoginModal = () => {
    const [formState , setFormState] = useState({
        username : "" ,
        password : "" ,
    })
    
    const handleUsername = (event) => {
      setFormState({
        ...formState , 
        username : event.target.value , 
      })
    }
   const handlePassword = (event) => {
    setFormState({
      ...formState , 
      password : event.target.value
    })
   }

    const handleCancel = () => {
     setFormState({
      username : "" ,
      password : "" ,
     })
    }
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
                    <div className="form">
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-2"
          onChange={handleUsername}
                  >
            <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
            <Field id="usernameInput" name="username" type="text" className="form-control" value={formState.username}/>
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div 
          onChange={handlePassword}
        >
            <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
            <Field id="passwordInput" name="password" type="password" className="form-control" value={formState.password} />
            <ErrorMessage name="password" component="span" className="error" />
          </div>

          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Submit
            </button>

            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
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

export default LoginModal