import config from "@config/config.json";
import Banner from "./components/Banner";
import FeatherIcon from "feather-icons-react";
import Map from "./components/Map";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

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
              <p className="mt-6 flex items-center">
                <FeatherIcon icon="phone" />
                &nbsp; +91 9711361809
              </p>
              <p className="mt-4 flex items-center">
                <FeatherIcon icon="mail" />
                &nbsp; info@dtstechindia.com
              </p>
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
              method="POST"
              action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
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
                  name="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea className="form-textarea w-full" rows="6" />
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
