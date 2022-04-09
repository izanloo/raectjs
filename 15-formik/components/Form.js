import React from 'react';
import { Formik } from 'formik';

const Form = ({ data }) => (
	<div>
		<Formik
			initialValues={{ email: data.email, password: data.password, name: data.name }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}
				if (!values.name) {
					errors.name = 'Required';
				}
				if (!values.password) {
					errors.password = 'Required';
				}
				else if (values.password.length < 6) {
					errors.password = "password is short"
				}
				return errors;
			}}

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
				<form onSubmit={handleSubmit}>
					<div className="field">

						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<label>email</label>
					</div>
					<p className="error">
						{errors.email && touched.email && errors.email}
					</p>
					<div className="field">
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						<label>password</label>

					</div>
					<p className="error">

						{errors.password && touched.password && errors.password}
					</p >

					<div className="field">
						<input
							type="text"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<label>name</label>
					</div>
					<p className="error">

						{errors.name && touched.name && errors.name}
					</p >

					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	</div>
);

export default Form;