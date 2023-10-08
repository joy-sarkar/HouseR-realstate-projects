import { aboutData } from "..";
import about_img from "../../assets/about_section_Img.jpg";
const About = () => {
//   console.log("Inside data", aboutData[0].microFeature);
  return (
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
          <h1 className="text-[2.9rem] font-black font-anton text-[#071c1f]">
            {aboutData[0].title}
          </h1>
          <p>{aboutData[0].subTitle}</p>
          <div className="grid grid-cols-2">
            {aboutData[0].microFeature.map((item) => (
              <div key={item.id}>
                <div>
                    {item.icon}
                </div>
                <p className="text-[#071c1f]">{item.text}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#ff5a3c] text-[#071c1f] w-36 mt-8 p-4 rounded-md font-semibold">Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default About;
