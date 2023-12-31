import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { MapPin, Phone } from "feather-icons-react";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <img src="./images/dts-logo.svg" alt="" className="w-3/4" />
            <Social source={social} className="mt-7" />
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Explore</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Services</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer_services.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Location & Contact</h3>
            <ul className="mt-5 leading-10">
              <li className="flex items-center whitespace-nowrap">
                <MapPin />
                &nbsp;
                {markdownify(location)}
              </li>
              {phone && (
                <li className="flex items-center whitespace-nowrap hover:text-primary">
                  <Phone size={14} />
                  &nbsp;
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className=" py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
