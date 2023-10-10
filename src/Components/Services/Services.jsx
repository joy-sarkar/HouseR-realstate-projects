import { services } from "../index";
import {BiRightArrowAlt} from 'react-icons/bi'
const Services = () => {
  return (
    <section className="bg-[#f2f6f7] py-24">
      <div>
        <div className="flex justify-center">
          <p className="text-center text-[#ff5a3c] bg-[#ff593c3f] w-24">
            Services
          </p>
        </div>
        <h1 className="text-[2.5rem] text-[#ff5a3c] pt-8 font-poppins font-bold text-center">
          Our Main Focus
        </h1>
        <div className="px-16 flex">
          {services.map((item) => (
            <div
              className="w-[24rem] p-8 bg-[#ffffff] border-2 border-[#ff5a3c]"
              key={item.id}
            >
              <h1 className="text-black">{item.title}</h1>
              <p>{item.text}</p>
              <button className="text-[#ff5a3c] bg-[#ff593c3f] w-36 p-2 rounded-md flex items-center">{item.btnText}<BiRightArrowAlt/></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
