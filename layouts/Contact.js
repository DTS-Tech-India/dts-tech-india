import config from "@config/config.json";
import Banner from "./components/Banner";
import FeatherIcon from "feather-icons-react";
import Map from "./components/Map";
import { useFormik } from "formik";
import * as yup from "yup";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please provide a name"),
      email: yup
        .string()
        .email("Please provide a valid email")
        .required("Please provide an email"),
      subject: yup.string(),
      message: yup.string(),
    }),
    onSubmit: (result) => {
      console.log(result);
    },
  });

  return (
    <section className="section">
      <div className="banner-section">
        <div className="container relative z-[10] pb-8 pt-60">
          <h1 className="text-white">Contact us</h1>
          <p className="text-white">
            Leave us a little info, and we&apos;ll be in touch.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <div className="">
              <h2>DTS Tech India</h2>
              <p className="my-4 text-xl">
                23, Joshi Road, Karol Bagh, Delhi - 110005
              </p>
              <a href='tel:+919711361809' className="mt-6 flex items-center hover:text-primary">
                <FeatherIcon icon="phone" />
                &nbsp; +91 9711361809
              </a>
              <a
                href="mailto:info@dtstecehindia.com"
                className="mt-4 flex items-center hover:text-primary"
              >
                <FeatherIcon icon="mail" />
                &nbsp; info@dtstechindia.com
              </a>
            </div>
            <div className="mt-8">
              <h4>Opening Hours: </h4>
              <p className="mt-4 text-gray-400">Monday - Sunday</p>
              <p className="mt-2 text-lg font-bold text-primary">
                9:00 AM - 5:00 PM
              </p>
            </div>
            <Map />
          </div>
          <div className="animate lg:col-5">
            <form
              onSubmit={formik.handleSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                {(formik.touched.name || formik.errors.name) && (
                  <span className="font-semibold text-red-500">
                    {formik.errors.name}
                  </span>
                )}
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  placeholder="Full Name"
                  type="text"
                  {...formik.getFieldProps("name")}
                />
              </div>
              <div className="mb-6">
                {(formik.touched.email || formik.errors.email) && (
                  <span className="font-semibold text-red-500">
                    {formik.errors.email}
                  </span>
                )}
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  placeholder="Email Address"
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  type="text"
                  placeholder="Subject"
                  {...formik.getFieldProps("subject")}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder="Your message"
                  className="form-textarea w-full"
                  rows="6"
                />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
