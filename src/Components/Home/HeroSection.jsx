import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {IoHome} from "react-icons/io5";
import { SliderData } from "../static";
import { Autoplay, Navigation } from "swiper/modules";
const HeroSection = () => {
  // lg:max-w-screen-2xl
  return (
    <section className=" h-1/2 bg-[#f2f6f7] p-3">
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          //   add moro module for more functionality
          className="mySwiper"
          navigation={{
            nextEl: ".button-next1",
            prevEl: ".button-prev1",
          }}
        >
          {SliderData.map((item) => (
            <div key={item.id}>
              {/* h-4/5 */}
              <SwiperSlide className="relative ">
                <div className="px-[2rem]">
                  <div>
                    <div className="absolute top-[9rem] left-[8.8rem] flex ">
                      <IoHome style={{ color: "#ff5a3c" }}/>
                    <p className="ml-2 text-[#ff5a3c]">{item.topTitle}</p>
                    </div>
                    <h2 className="text-[2.8rem] w-[27rem] font-black	text-[#071c1f] absolute top-[10rem] left-[8.6rem] text-wrap">
                      {item.title}
                    </h2>
                    <p className="absolute text-[#ff5a3c] text-md top-[20rem] w-[28rem] left-[8.6rem]">{item.subTitle}</p>
                    <button className="absolute duration-300 btn outline-none hover:text-[#ff5a3c] top-[24rem] text-[#071c1f] rounded-md bg-[#ff5a3c] p-2 left-[8.6rem]">KNOW MORE</button>
                  </div>
                  <div className="w-[35rem] h-[30rem]">
                    <img
                      src={item.imgUrl}
                      className="absolute object-cover top-[.8rem] right-[5rem]"
                      // w-[40rem] h-[35rem]
                      alt="house image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
          <div className="NavigationBtn flex w-full justify-between absolute top-1/2 z-10">
            <div className="leftArrow button-prev1 cursor-pointer ml-8 mr-8 w-10 bg-[#071c1f] rounded-full grid items-center justify-center  hover:bg-[#1c3f44]">
              <AiOutlineArrowLeft size={23} />
            </div>
            <div className="rightArrow button-next1 cursor-pointer mr-8 w-10 rounded-full h-10 bg-[#071c1f] grid hover:bg-[#1c3f44] items-center justify-center">
              <AiOutlineArrowRight size={23} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
