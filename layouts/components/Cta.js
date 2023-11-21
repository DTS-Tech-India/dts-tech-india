import Link from "next/link";

function Cta() {
  return (
    <section className="section relative mb-10 overflow-hidden bg-black/95">
      <img
        src="./images/3d.webp"
        alt=""
        className="absolute right-0 top-0 rotate-180 opacity-20"
      />
      <img
        src="./images/3dperson.webp"
        alt=""
        className="absolute right-[20%] top-10 shadow-xl"
      />
      <div className="container">
        <h1 className="text-white">DTS Tech India</h1>
        <p className="my-2 w-1/2 text-gray-200">
          Ready to enhance your online presence? Whether it's a specific
          project, a quote, or exploring how we can boost your digital success,
          contact us now to begin.
        </p>
        <Link href="/contact">
          <button className="btn btn-primary my-6">Contact</button>
        </Link>
      </div>
    </section>
  );
}

export default Cta;
