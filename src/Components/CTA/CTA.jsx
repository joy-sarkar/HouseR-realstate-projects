import { BsArrowRight } from "react-icons/bs";
import { ctaData } from "../index";
const CTA = () => {
  return (
    // lg:px-12 lg:py-8
    <section className="lg:px-12  lg:py-8  bg-[#f2f6f7]">
      <div className="lg:mx-12 max-md:mx-0 lg:flex max-md:text-center justify-between  z-10 bg-[#ff5a3c] p-12">
        <div>
          <h1 className="max-md:text-[1.5rem] lg:text-[2rem] text-slate-100 font-extrabold">
            {ctaData.title}
          </h1>
          <p className=" text-base text-slate-100 font-medium">
            {ctaData.subtext}
          </p>
        </div>
        <div>
          <button className="px-12 py-6 text-slate-950 cursor-pointer bg-slate-100">
            {ctaData.btnText}
            <BsArrowRight size={20} className="inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
