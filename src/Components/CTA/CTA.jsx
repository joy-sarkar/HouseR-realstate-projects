import { BsArrowRight } from "react-icons/bs";
import { ctaData } from "../index";
const CTA = () => {
  return (
    <section className="lg:px-8 lg:py-4 bg-[#fdfdff]">
      <div className="lg:mx-12 lg:flex justify-between bg-[#ff5a3c] p-12">
        <div>
          <h1 className=" text-[2rem] text-slate-100 font-extrabold">
            {ctaData.title}
          </h1>
          <p className=" text-base text-slate-100 font-medium">
            {ctaData.subtext}
          </p>
        </div>
        <div>
          <button className="px-12 py-6 text-slate-950 bg-slate-100">{ctaData.btnText} <BsArrowRight size={20} className="inline-block"/></button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
