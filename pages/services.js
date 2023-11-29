import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { getListPage } from "@lib/contentParser";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import Circle from "@layouts/components/Circle";

const Services = ({ features }) => {
  return (
    <Base>
      <section className="relative h-[90vh]">
        <Circle
          className="circle bottom-[37%] left-[39.5%]"
          width={40}
          height={40}
        />
        <Circle
          className="circle bottom-[80%] right-[89.5%]"
          width={40}
          height={40}
        />
        <Circle
          className="circle bottom-[40%] right-[79.5%]"
          width={20}
          height={20}
        />
        <Circle
          className="circle top-[40%] right-[79.5%] z-[-1]"
          width={30}
          height={30}
        />
        <div className="lg:flex items-center justify-stretch">
          <div className="animate p-16 lg:w-1/2">
            <h1>Empower Your Digital Presence with DTS Tech India.</h1>
            <p className="mt-4">
              Unleash the potential of your brand through our innovative
              services, seamlessly blending creativity and technology for a
              standout digital experience. Your digital success begins with us.
            </p>
            <Link href="#services" className="btn btn-primary my-6">
              Explore services
            </Link>
          </div>
          <div className="animate flex mb-12 mt-12 lg:mb-0 items-center lg:w-1/2">
            <img
              src="/images/services-hero.jpg"
              alt="Services"
              className="mx-auto w-full rounded-l-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="" id="services">
        <div className="flex flex-col-reverse  lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#E36644] pb-4 font-light text-gray-900">
                Revitalize Your Brand Graphics
              </h6>
              <h1 className="">Graphic Design</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>
                    Expert designers dedicated to infusing creativity into every
                    project
                  </li>
                  <li>
                    Crafting compelling visuals that resonate with your brand
                  </li>
                  <li>Designing unique logos that set your brand apart</li>
                  <li>
                    Creating impactful marketing collateral for a lasting
                    digital presence
                  </li>
                  <li>
                    Tailored graphic design solutions to elevate your visual
                    identity
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/graphic-design.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/video-editing.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#DA0568] pb-4 font-light text-gray-900">
                Dazzling AV Experiences.
              </h6>
              <h1 className="">Audio-Visual Services</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>Dynamic video production for captivating content</li>
                  <li>Interactive presentations to engage your audience</li>
                  <li>Compelling animations for enhanced storytelling</li>
                  <li>
                    Creative audio-visual solutions that combine technology for
                    a lasting impact
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse  lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#003366] pb-4 font-light text-gray-900">
                Digital Excellence Unleashed.
              </h6>
              <h1 className="">Development Services</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>
                    Expert team merging creativity and technical proficiency
                  </li>
                  <li>Custom web solutions tailored to unique needs</li>
                  <li>Robust and responsive digital footprint</li>
                  <li>
                    From innovative web design to advanced e-commerce solutions
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/development.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/seo.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#EAA92B] pb-4 font-light text-gray-900">
                SEO Mastery Unleashed.
              </h6>
              <h1 className="">Search Engine Optimization</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>
                    Strategic SEO techniques for optimized digital content
                  </li>
                  <li>
                    Increased search engine rankings to drive organic traffic
                  </li>
                  <li>Trustworthy partner for enhancing online presence</li>
                  <li>Tailored SEO solutions to stand out in search results</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse  lg:flex-row">
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#059B2F] pb-4 font-light text-gray-900">
                Strategic Brand Amplification.
              </h6>
              <h1 className="">Digital Marketing</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>
                    Strategic social media campaigns for effective engagement
                  </li>
                  <li>
                    Targeted online advertising to reach the right audience
                  </li>
                  <li>
                    Digital marketing expertise to enhance online presence
                  </li>
                  <li>
                    Comprehensive solutions to maximize impact in the digital
                    landscape
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="./images/services/digital-marketing.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row">
          <div className="lg:w-1/2">
            <img src="./images/services/ppc.webp" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center py-12 lg:w-1/2 bg-theme-light">
            <div className="animate w-3/4">
              <h6 className="mb-4 w-fit border-b-[2px] border-b-[#7400A3] pb-4 font-light text-gray-900">
                PPC Precision Unleashed.
              </h6>
              <h1 className="">Pay-per-click advertising</h1>
              <p className="mt-6 w-3/4 leading-7">
                <ul className="list-disc">
                  <li>Pay-Per-Click expertise for strategic ad placements</li>
                  <li>
                    Drive targeted traffic while optimizing digital marketing
                    budget
                  </li>
                  <li>Trustworthy partner for elevating brand visibility</li>
                  <li>
                    Results-oriented PPC campaigns tailored to business goals
                  </li>
                </ul>
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
