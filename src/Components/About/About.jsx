import { aboutData } from "..";
import about_img from "../../assets/about_section_Img.jpg";
import { FaRegHandPointRight } from "react-icons/fa6";
import { sellProperty } from "../index";
const About = () => {
  //   console.log("Inside data", aboutData[0].microFeature);
  return (
    <>
      <section id="about" className="bg-[#fdfdff] lg:flex">
        <div className="lg:py-11 lg:pl-11 p-4">
          <img
            src={about_img}
            className="shadow-lg max-md:w[15rem] lg:w-[30rem] object-cover rounded"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 relative">
          <div className="textContainer absolute lg:top-44 lg:left-6">
            <p className="text-sm max-md:mx-auto text-center  text-[#ff5a3c] bg-[#e2766338] max-md:w-24 max-md:text-justify lg:w-20 p-2 rounded-md font-semibold mt-8">
              {aboutData[0].topTitle}
            </p>
            <h1 className="lg:text-[2.5rem] max-md:text-[1.7rem] max-md:text-center font-bold text-[#071c1f]">
              {aboutData[0].title}
            </h1>
            <p className="max-md:top-[12rem]  max-md:p-4 max-md:absolute">{aboutData[0].subTitle}</p>
            <div className="grid max-md:grid-cols-1 max-md:absolute max-md:left-16 lg:grid-cols-2 p-3 max-md:bottom-[-20rem] mt-2">
              {aboutData[0].microFeature.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center">
                    <item.icon
                      className="-[#071c1f]"
                      color="#ff5a3c"
                      size={22}
                    />
                    <p className="text-[#071c1f]  p-2 ">{item.text}</p>
                    <button>{item.btnText}</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#ff5a3c] text-[#071c1f] lg:w-36 lg:mt-8 lg:p-4 max-md:p-2 max-md:absolute max-lg:left-[35%] max-md:bottom-[-22.5rem] rounded-md font-semibold">
              Our Services
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f6f7] relative py-8">
        <div className="flex max-md:flex-col px-[2rem]">
          <div className="lg:w-[38rem] lg:px-16">
            <h1 className="max-md:text-[1.8rem] lg:text-[2.5rem] text-[#071c1f] font-bold lg:mt-24">
              {sellProperty[0].title}
            </h1>
            <p className="text-md">{sellProperty[0].subtitle}</p>
            <div className="pb-8">
              {sellProperty[0].facilities.map((item) => (
                <div className="flex items-center" key={item.id}>
                  <FaRegHandPointRight color="#ff5a3c" className="mt-4 mr-2"/>
                  <p className=" pt-4">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="pb-4 flex max-md:flex-col justify-center text-center [&>*:nth-child(4)]:border-none">
              {sellProperty[0].features.map((item) => (
                <div className="p-4 lg:border-r-2" key={item.id}>
                  <p className="pt-4">{item.title1}</p>
                  <p className="pt-4">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <figure className="lg:pl-8">
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
