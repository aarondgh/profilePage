import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
    }
)

let initialCredentials = {
    email: '',
    password: ''
}

export const LogIn = () => (

  <div>
    <h1>Log in</h1>
    <Formik
      initialValues= {initialCredentials}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='signUp'>
          <input
            type="email"
            placeholder='email'
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
           {errors.email && touched.email && <div className="error-message">{errors.email}</div>}
          {/* {errors.email && touched.email && errors.email} */}
          <input
            type="password"
            name="password"
            placeholder='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
           {errors.password && touched.password && <div className="error-message">{errors.password}</div>}
          {/* {errors.password && touched.password && errors.password} */}

          <button style={{width:'100%'}} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);
