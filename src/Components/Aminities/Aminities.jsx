import { Amenities } from "../index";
import { BsArrowRight } from "react-icons/bs";
const Aminities = () => {
  return (
    <div>
      <section id="facilities" className="bg-[#f2f6f7] md:px-14">
        <div>
          <h1 className="max-md:text-[2rem] lg:text-[3.5rem] font-black text-center text-slate-950 max-md:pt-6 lg:pt-12">
            Building Amenities
          </h1>
        </div>
        <div className="grid max-md:grid-cols-1 lg:grid-cols-3 md:gap-5 place-items-center justify-items-center md:py-16 ">
          {Amenities.map((item) => (
            <div
              key={item.id}
              className="max-md:py-8 max-md:px-8 lg:py-24 lg:px-[7.5rem] rounded shadow-2xl flex justify-center items-center duration-500 flex-col group relative hover:bg-[#ff593cad] max-md:w-[22rem] max-md:h-[16rem] max-md:m-8"
            >
              <div className="bg-[#ff593c23] duration-500 group-hover:bg-slate-200  max-md:p-4 lg:w-24  lg:h-24 flex justify-center items-center rounded-full">
                <item.icon color="#ff5a3c" size={36} />
              </div>
              <p className="max-md:w-[15rem] from-neutral-800 text-slate-950 font-bold max-md:text-3xl max-md:text-center lg:text-lg pt-4">
                {item.title}
              </p>
              <div className="max-md:p-2 lg:w-14 lg:h-14  rounded-full bg-[#f2f6f7] shadow-lg absolute max-md:bottom-[-2rem] lg:bottom-[-1rem] flex justify-center items-center">
                <BsArrowRight
                  className="cursor-pointer  duration-500  group-hover:text-[#ff5a3c]"
                  size={32}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aminities;
