import { aboutData } from "..";
import about_img from "../../assets/about_section_Img.jpg";
import { FaRegHandPointRight } from "react-icons/fa6";
import { sellProperty } from "../index";
const About = () => {
  //   console.log("Inside data", aboutData[0].microFeature);
  return (
    <>
      <section className="bg-[#fdfdff] flex">
        <div className=" py-11 pl-11">
          <img
            src={about_img}
            className="shadow-lg w-[30rem] object-cover rounded"
            alt=""
          />
        </div>
        <div className="w-1/2 relative">
          <div className="textContainer absolute top-44 left-6">
            <p className="text-sm text-[#ff5a3c] bg-[#e2766338] w-20 p-2 rounded-md font-semibold mt-8">
              {aboutData[0].topTitle}
            </p>
            <h1 className="text-[2.5rem]  font-bold text-[#071c1f]">
              {aboutData[0].title}
            </h1>
            <p>{aboutData[0].subTitle}</p>
            <div className="grid grid-cols-2 p-3 mt-2">
              {aboutData[0].microFeature.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center">
                    <item.icon className="-[#071c1f]" color="#ff5a3c" size={22}  />
                    <p className="text-[#071c1f] p-2 ">{item.text}</p>
                    <button>{item.btnText}</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#ff5a3c] text-[#071c1f] w-36 mt-8 p-4 rounded-md font-semibold">
              Our Services
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f6f7] py-8">
        <div className="flex px-[2rem]">
          <div className="w-[38rem] px-16">
            <h1 className="text-[2.5rem] text-[#071c1f] font-bold mt-24">
              {sellProperty[0].title}
            </h1>
            <p className="text-md">{sellProperty[0].subtitle}</p>
            <div className="pb-8">
              {sellProperty[0].facilities.map((item) => (
                <div key={item.id}>
                  <p className=" pt-4">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="pb-4 flex justify-center text-center">
              {sellProperty[0].features.map((item) => (
                <div className="p-4" key={item.id}>
                  <p className=" pt-4">{item.title1}</p>
                  <p className=" pt-4">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <figure className="pl-8">
              <img
                className="w-[30rem] object-cover rounded"
                src={sellProperty[0].imgUrl}
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
