import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import Button from "../button/Button";

const StandardForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email()
    .required('this field is required'),

    password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password must contain one uppercase letter, one number and 8 characters."
    )
    .required("this field is required")
  });
    
    
  return (
    <>
    
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
      <div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl">
		</div>
    <div className="relative px-10 py-10 bg-white shadow-lg sm:rounded-2xl sm:p-20">
    <div class="max-w-md mx-auto">

    <div  className="pb-9 text-3xl font-semibold flex justify-center text-blue-500">
					<h1>Login</h1>
				</div>

      <Formik
        initialValues={{
          email: "",
          password:""
        }}
        onSubmit={(values)=>{
            console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="mx-auto container">
          <label>Email:</label><br />
          <Field name="email" id="email" type="text" 
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
          />
          <div className="text-red-600 font-semibold text-sm">
          <ErrorMessage name="email"/>
          </div>
          <br /> <br />

          <label className="align-content: center">Password:</label><br />
          <Field name="password" type="password" 
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
          />
          <div className="text-red-600 font-semibold text-sm ">
          <ErrorMessage name="password"/>
          </div>
          <br />
          <div className="flex justify-end items-center">
                <a
                  href="/forgot-password"
                  className="text-blue-600 flex hover:underline"
                >
                  Forgot Password?
                </a>
                </div><br />
         
          <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-500 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">LogIn</button>
        </Form>
      </Formik>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default StandardForm;
