import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
            <p className="my-8">
              Your journey with DTS Tech India begins here. We're here to
              listen, collaborate, and make your digital aspirations a reality.
              Whether you have questions, need a quote, or want to discuss a
              project, we're just a message away. Reach out to us through any of
              the following means:
            </p>
            <ul className="list-disc">
              <li className="mb-4">
                <strong>Phone:</strong> Connect with our experts directly by
                calling [Phone Number].
              </li>
              <li className="mb-4">
                <strong>Email:</strong> Drop us an email at [Email Address], and
                our team will respond promptly.
              </li>
              <li className="mb-4">
                <strong>Visit Us:</strong> If you prefer face-to-face meetings,
                we welcome you to our office at [Office Address]. Our doors are
                open for discussions, consultations, and to better understand
                your needs.
              </li>
              <li className="mb-4">
                <strong>Social Media:</strong> Stay updated and engaged with us
                on our social media platforms. Follow us on [Social Media Links]
                for the latest news, insights, and updates.
              </li>
            </ul>
            <p className="my-8">
              Your success is our priority, and we are committed to providing
              exceptional service and support at every step. We look forward to
              connecting with you and embarking on a journey of innovation,
              imagination, and integration together.
            </p>
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
