import Link from "next/link";

function Cta() {
  return (
    <section className="section relative mb-10 overflow-hidden bg-black/95">
      <img
        src="./images/3dperson.png"
        alt=""
        className="absolute right-[10%] top-4 hidden w-[25%] shadow-xl xl:block"
      />
      <div className="container">
        <h1 className="text-white">Let&apos;s connet together</h1>
        <p className="my-2 w-full text-gray-200 md:w-1/2">
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
