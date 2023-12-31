import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = ({ banner, brands, features, intro, speciality, testimonial }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base>
      <section className="section banner pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="bg-theme banner-bg col-12 absolute left-0 top-0">
              <Circle
                className="circle left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle
                className="circle left-[2.5%] top-[29%]"
                width={85}
                height={85}
              />
              <Circle
                className="circle bottom-[48%] left-[22%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[37%] left-[15%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="circle bottom-[13%] left-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="circle right-[12%] top-[15%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="circle right-[19%] top-[48%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                className="circle right-[33%] top-[54%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[20%] right-[3%]"
                width={65}
                height={65}
              />
            </div>
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="row relative justify-center pb-10">
                  <div className="banner-content col-10 pb-10 pt-20 text-center">
                    {markdownify(
                      banner.title,
                      "h1",
                      "mb-4 banner-title opacity-0"
                    )}
                    {markdownify(banner.subtitle, "h4", "mb-4 text-gray-500")}
                    <div className="banner-btn opacity-0">
                      <Link className="btn btn-primary" href={banner.link.href}>
                        {banner.link.label}
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <ImageFallback
                      className="banner-img opacity-0"
                      src={banner.image}
                      width={1170}
                      height={666}
                      priority={true}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row border-y border-border py-5">
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=" h-20 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={brand}
                          sizes="100vw"
                          alt=""
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      {/* <section className="">
        <div className="container">
          <div className="animate text-center">
            <p>{testimonial.subtitle}</p>
            <h2 className="section-title mt-4">Why Choose Us</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 p-12 text-center">
            <div className="animate choose-us-card w-[500px] rounded-md bg-[#f1f1f1aa] p-4">
              <h1 className="mb-2 text-2xl">Expertise</h1>
              <p className="mx-auto w-3/4 leading-7">
                Our team of professionals brings years of industry experience
                and a deep understanding of the latest technology trends to
                every project.
              </p>
            </div>
            <div className="animate choose-us-card w-[500px] rounded-md bg-[#f1f1f1aa] p-4">
              <h1 className="mb-2 text-2xl">Innovation</h1>
              <p className="mx-auto w-3/4 leading-7">
                We thrive on creativity and forward-thinking, ensuring that our
                solutions are at the cutting edge of technology.
              </p>
            </div>
            <div className="animate choose-us-card w-[500px] rounded-md bg-[#f1f1f1aa] p-4">
              <h1 className="mb-2 text-2xl">Customization</h1>
              <p className="mx-auto w-3/4 leading-7">
                Every project is tailored to meet your unique needs, ensuring
                that the solutions we provide are a perfect fit for your goals.
              </p>
            </div>
            <div className="animate choose-us-card w-[500px] rounded-md bg-[#f1f1f1aa] p-4">
              <h1 className="mb-2 text-2xl">Client-Centric Focus</h1>
              <p className="mx-auto w-3/4 leading-7">
                Your success is our top priority. We work closely with you,
                listening to your needs and offering solutions that exceed your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section">
        <div className="container">
          <div className="animate text-center">
            <p>Unparalleled Excellence and Innovation</p>
            <h2 className="section-title mt-4">Why Choose Us</h2>
          </div>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="animate flex w-[300px] items-center justify-center rounded-md p-8 shadow-md">
                <div>
                  <span className="icon mx-auto flex w-fit items-center justify-center rounded-full bg-primary p-6">
                    <img
                      src="./images/why-choose-us/check.png"
                      alt=""
                      className="h-7 w-7"
                    />
                  </span>
                  <h3 className="my-4 text-center">27+</h3>
                  <h5 className="font-light text-gray-500">
                    Projects Completed
                  </h5>
                </div>
              </div>
              <div className="animate flex w-[300px] items-center justify-center rounded-md p-8 shadow-md">
                <div>
                  <span className="icon mx-auto flex w-fit items-center justify-center rounded-full bg-primary p-6">
                    <img
                      src="./images/why-choose-us/calendar.png"
                      alt=""
                      className="h-7 w-7"
                    />
                  </span>
                  <h3 className="my-4 text-center">1+</h3>
                  <h5 className="font-light text-gray-500">No of Years</h5>
                </div>
              </div>
              <div className="animate flex w-[300px] items-center justify-center rounded-md p-8 shadow-md">
                <div>
                  <span className="icon mx-auto flex w-fit items-center justify-center rounded-full bg-primary p-6">
                    <img
                      src="./images/why-choose-us/like.png"
                      alt=""
                      className="h-7 w-7"
                    />
                  </span>
                  <h3 className="my-4 text-center">10+</h3>
                  <h5 className="font-light text-gray-500">Happy clients</h5>
                </div>
              </div>
              <div className="animate flex w-[300px] items-center justify-center rounded-md p-8 shadow-md">
                <div>
                  <span className="icon mx-auto flex w-fit items-center justify-center rounded-full bg-primary p-6">
                    <img
                      src="./images/why-choose-us/leads.png"
                      alt=""
                      className="h-7 w-7"
                    />
                  </span>
                  <h3 className="my-4 text-center">12k+</h3>
                  <h5 className="font-light text-gray-500">Verified leads</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="section bg-[#121212]">
        <div className="container">
          <div className="animate text-center">
            <p className="text-gray-400">What We Do</p>
            <h2 className="section-title mt-4 text-white">Services</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="relative w-[600px] rounded-lg bg-[#e36644] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">Graphic design</h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Elevate your brand with DTS Tech India&apos;s expert graphic
                  design services, ensuring a standout visual identity in the
                  digital landscape
                </p>
              </div>
              <img
                src="./images/uiux.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
            <div className="relative w-[600px] rounded-lg bg-[#DA0568] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">Audio-Visual Services</h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Captivate your audience with DTS Tech India&apos;s
                  audio-visual services, offering dynamic video production,
                  interactive presentations, and engaging animations that blend
                  creativity with technology.
                </p>
              </div>
              <img
                src="./images/video.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
            <div className="relative w-[600px] rounded-lg bg-[#003366] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">Development Services</h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Empower your digital presence with DTS Tech India&apos;s
                  development services, delivering custom web solutions,
                  including design, web application development, and e-commerce
                  solutions.
                </p>
              </div>
              <img
                src="./images/web-dev.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
            <div className="relative w-[600px] rounded-lg bg-[#EAA92B] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">
                Search Engine Optimization
              </h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Enhance online visibility and rankings with DTS Tech
                  India&apos;s SEO services, strategically optimizing content
                  for increased organic traffic and search prominence.
                </p>
              </div>
              <img
                src="./images/seo.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
            <div className="relative w-[600px] rounded-lg bg-[#059B2F] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">Digital Markteting</h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Amplify your brand with DTS Tech India&aspo;s digital
                  marketing services, strategically spanning social media, email
                  campaigns, and online advertising.
                </p>
              </div>
              <img
                src="./images/marketing.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
            <div className="relative w-[600px] rounded-lg bg-[#7400A3] px-12 py-6 text-white transition-colors">
              <h1 className="text-2xl text-white">
                Pay-per-click Advertising
              </h1>
              <span className="my-4 block h-[2px] w-[100px] rounded-sm bg-white underline"></span>
              <div className="flex">
                <p className="mt-6 leading-7">
                  Boost your online presence through DTS Tech India&apos;s
                  Pay-per-Click (PPC) advertising, strategically maximizing your
                  reach and engagement with targeted ad campaigns
                </p>
              </div>
              <img
                src="./images/advertising.svg"
                alt=""
                className="absolute right-0 top-0 h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* our process */}
      <section className="section">
        <div className="container">
          <div className="animate  px-12">
            <div className="animate text-center">
              <p>Crafting Success</p>
              <h2 className="section-title mt-4">Our Process</h2>
            </div>
            {/* <div className="grid grid-cols-5 gap-[100px]">
              <div className="our_process_card w-[300px] rounded-md bg-white p-8 shadow-lg transition-all">
                <h4 className="text-base font-light text-primary">#1</h4>
                <h1 className="mb-4 text-xl">Discovery</h1>
                <p className="text-gray-500">
                  Understand client goals and project requirements through
                  detailed consultations.
                </p>
              </div>
              <div className="our_process_card w-[300px] rounded-md bg-white p-8 shadow-lg transition-all">
                <h4 className="text-base font-light text-primary">#2</h4>
                <h1 className="mb-4 text-xl">Strategic Planning</h1>
                <p className="text-gray-500">
                  Formulate a comprehensive plan outlining project scope,
                  timelines, and resources.
                </p>
              </div>
              <div className="our_process_card w-[300px] rounded-md bg-white p-8 shadow-lg transition-all">
                <h4 className="text-base font-light text-primary">#3</h4>
                <h1 className="mb-4 text-xl">Design and Development</h1>
                <p className="text-gray-500">
                  Combine creative and technical expertise to bring the
                  client&apos;s vision to life.
                </p>
              </div>
              <div className="our_process_card w-[300px] rounded-md bg-white p-8 shadow-lg transition-all">
                <h4 className="text-base font-light text-primary">#4</h4>
                <h1 className="mb-4 text-xl">Quality Assurance</h1>
                <p className="text-gray-500">
                  Rigorously test and review every aspect to ensure the highest
                  standards.
                </p>
              </div>
              <div className="our_process_card w-[300px] rounded-md bg-white p-8 shadow-lg transition-all">
                <h4 className="text-base font-light text-primary">#5</h4>
                <h1 className="mb-4 text-xl">Delivery and Support</h1>
                <p className="text-gray-500">
                  Deliver the finalized product, providing support for a
                  seamless launch and ongoing maintenance.
                </p>
              </div>
            </div> */}

            <div className="mt-10">
              <h2 class="sr-only">Steps</h2>

              <div>
                <ol class="grid grid-cols-1 justify-center divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 lg:grid-cols-3">
                  <li class="flex items-center justify-start gap-2 p-4 hover:bg-gray-50">
                    <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-white">
                      1
                    </span>

                    <p class="leading-none">
                      <strong class="block font-medium text-primary">
                        Discovery
                      </strong>
                      <small class="mt-2 text-base leading-6">
                        Understand client goals and project requirements through
                        detailed consultations.
                      </small>
                    </p>
                  </li>

                  <li class="relative flex items-center justify-start gap-2 p-4 hover:bg-gray-50">
                    <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-white">
                      2
                    </span>

                    <p class="leading-none">
                      <strong class="block font-medium text-primary">
                        Strategic Planning
                      </strong>
                      <small class="mt-2 text-base leading-6">
                        Formulate a comprehensive plan outlining project scope,
                        timelines, and resources.
                      </small>
                    </p>
                  </li>

                  <li class="flex items-center justify-start gap-2 p-4 hover:bg-gray-50">
                    <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-white">
                      3
                    </span>

                    <p class="leading-none">
                      <strong class="block font-medium text-primary">
                        Design and Development
                      </strong>
                      <small class="mt-2 text-base leading-6">
                        Combine creative and technical expertise to bring the
                        client&apos;s vision to life.
                      </small>
                    </p>
                  </li>
                  <li class="flex items-center justify-start gap-2 p-4 hover:bg-gray-50">
                    <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-white">
                      4
                    </span>

                    <p class="leading-none">
                      <strong class="block font-medium text-primary">
                        Quality Assurance
                      </strong>
                      <small class="mt-2 text-base leading-6">
                        Rigorously test and review every aspect to ensure the
                        highest standards.
                      </small>
                    </p>
                  </li>
                  <li class="flex items-center justify-start gap-2 p-4 hover:bg-gray-50">
                    <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-white">
                      5
                    </span>

                    <p class="leading-none">
                      <strong class="block font-medium text-primary">
                        Delivery and Support
                      </strong>
                      <small class="mt-2 text-base leading-6">
                        Deliver the finalized product, providing support for a
                        seamless launch and ongoing maintenance.
                      </small>
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          <div className="animate text-center">
            <p>{testimonial.subtitle}</p>
            {markdownify(testimonial.title, "h2", "mt-4 section-title")}
            {markdownify(testimonial.description, "p", "mt-10 w-1/2 mx-auto")}
          </div>
          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="/images/testimonials-01.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
                <div className="md:col-7 lg:col-6 xl:col-4">
                  {
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{
                        el: testimonialPaginationRef.current,
                        type: "bullets",
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      autoplay={{ delay: 3000 }}
                      onBeforeInit={(swiper) => {
                        swiper.params.pagination.el =
                          testimonialPaginationRef.current;
                      }}
                      className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]"
                    >
                      {testimonial.list.map((item, index) => (
                        <SwiperSlide
                          className="text-center"
                          key={"testimonial-" + index}
                        >
                          <div className="px-8 py-6 sm:py-12 md:px-10 lg:px-20 xl:px-12">
                            <TbQuote className="mx-auto rotate-180 text-5xl text-body sm:text-6xl lg:text-8xl" />
                            {markdownify(
                              item.content,
                              "p",
                              "text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8"
                            )}
                            <div className="mt-7 inline-block rounded-md bg-body p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] md:mt-5 lg:mt-8 xl:mt-5">
                              <ImageFallback
                                className="mx-auto rounded-full"
                                src={item.avatar}
                                width={90}
                                height={90}
                                priority={true}
                                alt={item.author}
                              />
                              <h6>{item.author}</h6>
                              <p>{item.profession}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                  <div className="relative h-8">
                    <div
                      className="pagination absolute left-1/2 -translate-x-1/2"
                      ref={testimonialPaginationRef}
                    ></div>
                  </div>
                </div>
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="/images/testimonials-02.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta */}
      <Cta />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
