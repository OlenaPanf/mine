//import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
 import * as Yup from "yup";
 import css from "./ForgotPasswordForm.module.css";
// import { logIn, register } from "../../redux/auth/operations";
// import { useEffect } from "react";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import toast from "react-hot-toast";

export default function  ForgotPasswordForm () {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prevState) => !prevState);
//   };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate("/home");
//     }
//   }, [isLoggedIn, navigate]);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     if (isSignup) {
//       dispatch(register({ email: values.email, password: values.password }))
//         .unwrap()
//         .then(() => {
//           console.log("Register success");
//         })
//         .catch((err) => {
//           const errorMessage = err.message;
//           toast(`Registration error: ${errorMessage}`);
//           console.log("Registration error:", err.message);
//         });
//     } else {
//       dispatch(logIn({ email: values.email, password: values.password }))
//         .unwrap()
//         .then(() => {
//           console.log("Login success");
//         })
//         .catch((err) => {
//           const errorMessage = err.message;
//           toast(`Login error: ${errorMessage}`);
//           console.log("Login error:", err.message);
//         });
//     }
//     setSubmitting(false);
//   };

  return (
    <div >
      <h1 >Forgot password?</h1>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
          <Form>
            <div className={css.formGroup}>
              <label htmlFor="email">Enter your email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <button type="submit">
              Send
            </button>
          </Form>
        
      </Formik>
      
    </div>
  );
};
