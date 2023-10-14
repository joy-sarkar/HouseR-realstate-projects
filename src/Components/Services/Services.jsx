import { services } from "../index";
import { BiRightArrowAlt } from "react-icons/bi";
const Services = () => {
  return (
    <section className="bg-[#f2f6f7] py-24">
      <div>
        <div className="flex justify-center">
          <p className="text-center rounded-lg py-2 px-4  text-[#ff5a3c] bg-[#ff593c3f] w-28">
            Services
          </p>
        </div>
        <h1 className="text-[2.5rem] text-[#ff5a3c] rounded-lg py-8 font-poppins font-bold text-center">
          Our Main Focus
        </h1>
        <div className="md:px-16 flex max-md:flex-col">
          {services.map((item) => (
            <div
              className="w-[24rem] flex flex-col justify-center items-center drop-shadow-md p-8 bg-[#ffffff] m-1 "
              key={item.id}
            >
              <div>
                <img src={item.imgurl} className="w-[10rem]" alt={item.imgurl} />
              </div>
              <h1
                className="text-black text-lg font-medium my-7
              "
              >
                {item.title}
              </h1>
              <p>{item.text}</p>
              <button className="text-[#ff5a3c] bg-[#ff593c3f] w-[9.2rem] p-3 rounded-md flex items-center cursor-pointer mt-6">
                {item.btnText}
                <BiRightArrowAlt />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
