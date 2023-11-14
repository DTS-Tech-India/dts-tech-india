import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { getListPage } from "@lib/contentParser";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Services = ({ features }) => {
  return (
    <Base>
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            <h1>Service we Offer</h1>
            <p className="my-8">
              At DTS Tech India, we&apos;re your trusted partner in the digital
              world, offering a range of services to enhance your online
              presence and boost your brand&apos;s appeal. Our expert team
              combines creativity and technology to deliver innovative solutions
              tailored to your unique needs. We empower your brand with the
              tools and strategies required for success in the digital age.
              Explore our services to achieve your digital objectives and excel
              online.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {features.list.map((item, i) => (
              <div
                key={i}
                className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none"
              >
                <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                  <FeatherIcon icon={item.icon} color={item.color} />
                </div>
                <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="animate">
            <h1>Our Process</h1>
            <p className="my-8">
              Embarking on a project with DTS Tech India is a carefully curated
              journey designed to bring your digital aspirations to life. We
              commence with an in-depth Discovery phase, engaging in
              comprehensive consultations to thoroughly understand your unique
              goals, challenges, and vision. This initial stage sets the tone
              for a tailored solution that aligns seamlessly with your
              objectives.
            </p>
            <p className="my-8">
              Following Discovery, we enter the Strategic Planning phase. Here,
              our team formulates a detailed plan encompassing the
              project&apos;s scope, timelines, and resource requirements. This
              strategic blueprint serves as our roadmap, ensuring that every
              subsequent step is aligned with your vision and expectations.
            </p>
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
