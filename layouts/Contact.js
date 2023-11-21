import config from "@config/config.json";
import Banner from "./components/Banner";
import FeatherIcon from "feather-icons-react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <Banner title={title} />
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
              <p className="text-gray-400 mt-4">Monday - Sunday</p>
              <p className="text-primary font-bold text-lg mt-2">9:00 AM - 5:00 PM</p>
            </div>
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
