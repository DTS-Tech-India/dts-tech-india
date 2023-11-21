import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { getListPage } from "@lib/contentParser";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";

const Services = ({ features }) => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="lg:flex">
            <div className="animate lg:w-1/2">
              <h1 className="mt-28">
                Empower Your Digital Presence with DTS Tech India.
              </h1>
              <p className="mt-4">
                Unleash the potential of your brand through our innovative
                services, seamlessly blending creativity and technology for a
                standout digital experience. Your digital success begins with
                us.
              </p>
              <Link href="#services" className="btn btn-primary mt-6">
                Explore services
              </Link>
            </div>
            <div className="animate lg:w-1/2">
              <img
                src="/images/services.png"
                alt="Services"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="" id="services">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Graphic Design</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#E36644] pb-4 font-light text-gray-500">
                Transform Your Brand Aesthetics with DTS Tech India&apos;s
                Graphic Design Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                Our expert designers infuse creativity into every project,
                crafting compelling visuals, logos, and marketing collateral
                that uniquely represent your brand and leave a lasting impact in
                the digital landscape. Elevate your visual identity with our
                tailored graphic design solutions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/graphic-design.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/video-editing.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Audio-Visual Services</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#DA0568] pb-4 font-light text-gray-500">
                Immerse Your Audience with DTS Tech India&apos;s Audio-Visual
                Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                Captivate and engage with dynamic video production, interactive
                presentations, and compelling animations. Our audio-visual
                solutions combine creativity and technology to elevate your
                digital storytelling, leaving a lasting impact on your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Development Services</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#003366] pb-4 font-light text-gray-500">
                Empower Your Digital Presence with DTS Tech India&apos;s
                Development Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                Our expert team seamlessly merges creativity and technical
                proficiency to deliver custom web solutions tailored to your
                unique needs, ensuring a robust and responsive digital
                footprint. From innovative web design to advanced e-commerce
                solutions, we bring your digital vision to life with precision
                and excellence.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/development.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/seo.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Search Engine Optimization</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#EAA92B] pb-4 font-light text-gray-500">
                Boost Your Online Visibility with DTS Tech India&apos;s SEO
                Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                Our strategic SEO techniques optimize your digital content,
                increasing search engine rankings and driving organic traffic.
                Trust us to enhance your online presence and stand out in search
                results with effective and tailored SEO solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Digital Marketing</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#059B2F] pb-4 font-light text-gray-500">
                Amplify Your Brand Reach with DTS Tech India&apos;s Digital
                Marketing Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                From strategic social media campaigns to targeted online
                advertising, our digital marketing expertise drives engagement
                and ensures your brand connects effectively with the right
                audience. Elevate your online presence and maximize your impact
                in the digital landscape with our comprehensive digital
                marketing solutions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/digital-marketing.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/ppc.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2">
            <div className="animate w-3/4">
              <h1>Pay-per-click advertising</h1>
              <h6 className="mt-4 border-b-[2px] border-b-[#7400A3] pb-4 font-light text-gray-500">
                Maximize Your Online Impact with DTS Tech India&apos;s PPC
                Services.
              </h6>
              <p className="mt-6 w-3/4 leading-7">
                Our Pay-Per-Click expertise ensures strategic ad placements,
                driving targeted traffic and optimizing your digital marketing
                budget effectively. Trust us to elevate your brand&apos;s
                visibility with results-oriented PPC campaigns tailored to your
                business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </Base>
  );
};

export default Services;

export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;

  return {
    props: {
      features: features,
    },
  };
};
