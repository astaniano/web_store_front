import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../../App.css'
import {authAPI} from "../../api/api";
import {FileUploader} from "../shared/FileUploader";

export default function Signup() {
    return (
        <SignupForm />
    );
}

const SignupForm = () => {
    const [selectedFile, setSelectedFile] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string()
                .required('Required')
                .email('Invalid email address'),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            passwordConfirm: Yup.string()
                .required('Please repeat your password')
                .when("password", {
                is: (val: string) => {
                    return val && val.length > 0;
                },
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
        }),
        onSubmit: async ({email, password, firstName, lastName}) => {
            const formData = new FormData();
            formData.set('email', email);
            formData.set('password', password);
            formData.set('firstName', firstName);
            formData.set('lastName', lastName);
            formData.set('userPhoto', selectedFile);
            await authAPI.signUp(formData);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}
            <br/>

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}
            <br/>

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="text"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <br/>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <br/>

            <label htmlFor="email">Repeat password</label>
            <input
                id="passwordConfirm"
                type="password"
                {...formik.getFieldProps('passwordConfirm')}
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                <div>{formik.errors.passwordConfirm}</div>
            ) : null}
            <br/>

            <FileUploader
                onFileSelectSuccess={(file: any) => setSelectedFile(file)}
                onFileSelectError={({ error }: {error: string}) => alert(error)}
            />
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
};



