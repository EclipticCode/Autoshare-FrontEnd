import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import './LoginModal.css'

// const LoginModal = () => {
//   return (
//     <div className="form">
//       <Formik
//         initialValues={{ username: "", password: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.username) {
//             errors.username = "Username is required";
//           }
//           if (!values.password) {
//             errors.password = "Password is Required";
//           }
//           return errors;
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         <Form className="username">
//           <div className="username">
//             <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
//             <Field id="username" name="username" type="text"className="form-control"  />
//             <ErrorMessage name="username" component="span" className="error" />
//           </div>

//           <div>
//             <label>Password</label>
//             <Field id="password" name="password" type="text" className="form-control" />
//             <ErrorMessage name="password" component="span" className="error" />
//           </div>
//           <div className="modal-footer">
//             <button
//               type="submit"
//               className="btn btn-success"
//               data-bs-dismiss="modal"
//             >
//               Submit
//             </button>
//             <button type="button" className="btn btn-secondary">
//               Cancel
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
   
//   );
// };

// export default LoginModal;



const LoginModal = () => {
    const [formState , setFormState] = useState({
        username : "" ,
        password : "" ,
    })
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
          <div className="username" 
        //   onChange={(e) => {
        //     setFormState({
        //          ...formState ,
        //           username : e.target.value 
        //           })
        //           }}
                  >
            <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
            <Field id="username" name="username" type="text"className="form-control"/>
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div  
        //   onChange={(e) => {
        //     setFormState({
        //          ...formState ,
        //           password : e.target.value 
        //           })
        //           }}
        >
            <label>Password</label>
            <Field id="password" name="password" type="text" className="form-control" />
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

export default LoginModal