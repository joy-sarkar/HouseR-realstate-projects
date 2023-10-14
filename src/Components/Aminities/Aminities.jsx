import { Amenities } from "../index";
import {BsArrowRight} from 'react-icons/bs'
const Aminities = () => {
  return (
    <div>
      <section className="bg-[#f2f6f7] md:px-14">
        <div><h1 className="text-[3.5rem] font-black text-center text-slate-950 pt-12">Building Amenities</h1></div>
        <div className="grid md:grid-cols-3 md:gap-5 place-items-center justify-items-center md:py-16 ">
          {Amenities.map((item) => (
            <div key={item.id} className="md:py-24 md:px-[7.5rem] rounded shadow-2xl flex justify-center items-center duration-500 flex-col group relative hover:bg-[#ff593cad]">
              <div className="bg-[#ff593c23] duration-500 group-hover:bg-slate-200 w-24 h-24 flex justify-center items-center rounded-full">
                <item.icon color="#ff5a3c" size={36} />
              </div>
              <p className="from-neutral-800 text-slate-950 font-bold text-lg pt-4">{item.title}</p>
              <div className="w-14 h-14  rounded-full bg-[#f2f6f7] shadow-lg absolute bottom-[-1rem] flex justify-center items-center">
              <BsArrowRight className="" size={32}/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aminities;
