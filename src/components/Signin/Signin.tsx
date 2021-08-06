import "../../App.css";
// import "./signin.module.css";
import { useFormik } from "formik";

export default function Signin() {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '', },
        onSubmit: values => {
            console.log(values);
        }
    });

  return (
      <div className="container">
          <form onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
              />
              <label htmlFor="email">Email Address</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
              />
              <button type="submit">Submit</button>
          </form>
      </div>
  );
}
