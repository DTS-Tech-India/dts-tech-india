import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <div className="relative">
          <Circle
            className="circle bottom-[27%] left-[39.5%]"
            width={20}
            height={20}
          />
        </div>
        {/* About */}
        <div className="section container relative z-[10]">
          <div className="flex items-center justify-center">
            <div className="animate w-1/2">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
            <div className="animate w-1/2">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="section bg-theme-light">
          <div className="container">
            <div className="flex items-center justify-center">
              <div className="animate w-1/2">
                <div className="about-image relative p-[60px]">
                  <ImageFallback
                    className="animate relative w-full rounded-2xl"
                    src={mission.image}
                    width={425}
                    height={487}
                    alt=""
                  />
                  <Circle
                    className="left-4 top-4 z-[-1]"
                    width={85}
                    height={85}
                  />
                  <Circle
                    width={37}
                    height={37}
                    fill={false}
                    className="right-10 top-20 z-[-1]"
                  />
                  <Circle
                    className="right-12 top-1/2 -z-[1]"
                    width={24}
                    height={24}
                  />
                  <Circle
                    className="bottom-6 right-6 z-[-1]"
                    width={85}
                    height={85}
                  />
                  <Circle
                    className="left-12 top-1/2 z-[-1]"
                    width={20}
                    height={20}
                  />
                  <Circle
                    className="bottom-12 left-8 z-[1]"
                    width={47}
                    height={47}
                    fill={false}
                  />
                </div>
              </div>
              <div className="animate w-1/2">
                <p>{mission.subtitle}</p>
                {markdownify(
                  mission.title,
                  "h2",
                  "section-title bar-left mt-4"
                )}
                {markdownify(mission.content, "p", "mt-10")}
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="container-xl relative">
          <div className="absolute left-0 top-0 w-full">
            <Circle
              className="bottom-[11%] left-[10%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="bottom-[48%] left-[44%]"
              width={37}
              height={37}
              fill={false}
            />
          </div>
          <div className="flex items-center justify-center py-[90px]">
            <div className="w-1/2">
              <div className="animate p-5">
                <p>{video.subtitle}</p>
                <h2 className="section-title bar-left mt-4">Our Vision</h2>
                <p className="mt-10">
                  At DTS Tech India, we envision a digital landscape where every
                  business thrives through seamless integration of cutting-edge
                  technology and imaginative innovation. Our vision is to be the
                  forefront provider of transformative digital solutions,
                  pioneering industry standards and setting benchmarks for
                  creativity and excellence. By consistently pushing boundaries,
                  we aim to be the trusted partner that empowers businesses to
                  not only adapt but lead in the ever-evolving digital era.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="px-4 ">
                <VideoPopup
                  id={video.video_id}
                  thumbnail={video.thumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Clients
        <div className="section container">
          <div className="animate text-center">
            <p>{clients.subtitle}</p>
            {markdownify(clients.title, "h2", "section-title mt-4")}
          </div>
          <div className="animate from-right col-12 mt-16">
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
              {clients.brands.map((brand, index) => (
                <SwiperSlide
                  className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10"
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

        <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office
        <div className="section container">
          <div className="animate text-center">
            <p>{our_office.subtitle}</p>
            {markdownify(our_office.title, "h2", "section-title mt-4")}
            {markdownify(our_office.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {our_office.countries.map((country, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      <ImageFallback
                        // className="mx-auto"
                        src={country.flag}
                        width={80}
                        height={80}
                        alt={country.name}
                      />
                      <h5 className="h4 mt-2">{country.name}</h5>
                      <p className="mt-2">{country.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <Cta />
    </>
  );
};

export default About;
