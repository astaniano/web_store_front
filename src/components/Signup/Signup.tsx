import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../App.css'
// import {authAPI} from "../../api/api";

export default function Signup() {
    return (
        <SignupForm />
    );
}

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            // passwordConfirm: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            last_name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string()
                .required('Required')
                .email('Invalid email address'),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        }),
        onSubmit: async (values) => {
            // await authAPI.signUp(values);
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="first_name">First Name</label>
            <input
                id="first_name"
                type="text"
                {...formik.getFieldProps('first_name')}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
            ) : null}

            <label htmlFor="last_name">Last Name</label>
            <input
                id="last_name"
                type="text"
                {...formik.getFieldProps('last_name')}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
                <div>{formik.errors.last_name}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="text"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            {/*<label htmlFor="email">Confirm password</label>*/}
            {/*<input*/}
            {/*    id="passwordConfirm"*/}
            {/*    name="passwordConfirm"*/}
            {/*    type="password"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.passwordConfirm}*/}
            {/*/>*/}

            <button type="submit">Submit</button>
        </form>
    );
};



