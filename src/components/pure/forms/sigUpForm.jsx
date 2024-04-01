import React from 'react';
 import { Formik } from 'formik';
 import * as Yup from 'yup'

const signUpSchema = Yup.object().shape(
    {
        name: Yup.string()
        .required('Name is required'),
        lastName: Yup.string()
        .required('Last name is required'),
        userName: Yup.string()
        .required('Username is required'),
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
    }
)

let initialCredentials = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
}
const SignUp = () => (
  <div>
    <h1>SignUp page</h1>
    <Formik
      initialValues={initialCredentials}
      validationSchema={signUpSchema}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}
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
            type="string"
            name="name"
            placeholder='Name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && <div className="error-message">{errors.name}</div>}
          <input
            type="string"
            name="lastName"
            placeholder='Last name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && <div className="error-message">{errors.lastName}</div>}
          <input
            type="string"
            name="userName"
            placeholder='User name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
          {errors.userName && touched.userName && <div className="error-message">{errors.userName}</div>}
          <input
            type="email"
            name="email"
            placeholder='Email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            placeholder='Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default SignUp