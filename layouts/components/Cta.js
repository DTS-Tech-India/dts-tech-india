import Link from "next/link";

function Cta() {
  return (
    <section className="section relative mb-10 overflow-hidden bg-slate-900/90 my-16">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-[70%]">
            <h1 className="text-white">Let&apos;s connect together</h1>
            <p className="my-2 w-full text-gray-200 md:w-1/2">
              Ready to enhance your online presence? Whether it's a specific
              project, a quote, or exploring how we can boost your digital
              success, contact us now to begin.
            </p>
          </div>
          <div className="flex w-[30%] items-center">
            <Link href="/contact">
              <button className="my-6 rounded-md bg-primary px-12 py-4 text-white">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
