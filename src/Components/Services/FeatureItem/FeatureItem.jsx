// import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { featuredList } from "../..";
import { SwiperSlide, Swiper } from "swiper/react";
// import { IoHome } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FeatureItem = () => {
  return (
    <section className=" relative bg-[#fff] py-28 px-16">
      <div className="flex justify-center">
        <h1 className="absolute top-[-1rem]  text-[2.5rem] text-[#ff5a3c] rounded-lg py-8 font-poppins font-bold text-center">
          Featured Listings
        </h1>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            // 640: {
            //   width: 768,
            //   slidesPerView: 3,
            // },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 3,
              spaceBetween:10
            },
            // for mobile devices
            // 480: {
            //   // width: 768,
            //   slidesPerView: 2,
            //   spaceBetween:15
            // },
          }}
          //   add moro module for more functionality
          className="mySwiper2"
          navigation={{
            nextEl: ".button-next2",
            prevEl: ".button-prev2",
          }}
        >
          <div className="">
            {featuredList.map((item) => (
              <div key={item.id}>
                <SwiperSlide key={item.id} className="relative bottom-2">
                  <div className="shadow-lg">
                    <div>
                    <p  className="text-[#fff] text-md absolute top-[1rem] right-[1rem] bg-[#ff593c86] px-2 py-1 rounded">{item.category}</p>
                      <div className="absolute top-[12rem] left-[3rem] flex bg-[#ff593c86] p-1">
                        <p className="text-[#fff] text-md">
                          <GoLocation className="inline-block mr-2" />
                          {item.location}
                        </p>
                        
                      </div>
                      <div className="absolute top-[16rem] left-[8.8rem] flex ">
                        <h3 className="text-[#ff5a3c] text-md">
                          $
                          <span className="text-lg font-semibold">
                            {item.price}
                          </span>
                          /Month
                        </h3>
                      </div>

                      <h2 className="text-[1.5rem]  font-md	text-[#071c1f] font-semibold absolute top-[18rem] z-10 left-[3rem] text-wrap">
                        {item.title}
                      </h2>
                      <div
                        key={item.id}
                        className="absolute flex items-center ml-8 justify-center text-center top-[23rem] [&>*:nth-child(3)]:border-none"
                        // style={{ }}
                      >
                        {item.features.map((el) => (
                          <div key={el.id} className="p-4 border-r-2">
                            <p className="text-black">{el.quantity}</p>
                            <p className="text-black">{el.names}</p>
                          </div>
                        ))}
                      </div>
                      <button className="absolute w-[10rem] duration-300 outline-none hover:text-[#ff5a3c] top-[28.5rem] text-[#071c1f] rounded-md bg-[#ff593ca4] p-2 left-[7rem]">
                        VIEW{" "}
                        <BsArrowRightShort className="inline-block" size={30} />
                      </button>
                    </div>
                    <div className="w-[25rem] h-[35rem]">
                      <img
                        src={item.imgURL}
                        className=" w-[24.5rem] object-cover h-[15rem]"
                        alt="house image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
          <div className="NavigationBtn mt-4 flex w-full justify-between absolute top-1/2 z-10">
            <div className="leftArrow button-prev2 cursor-pointer mx-4  w-10 bg-[#071c1f] rounded-full grid items-center justify-center  hover:bg-[#1c3f44]">
              <AiOutlineArrowLeft size={23} />
            </div>
            <div className="rightArrow button-next2 cursor-pointer mr-8 w-10 rounded-full h-10 bg-[#071c1f] grid hover:bg-[#1c3f44] items-center justify-center">
              <AiOutlineArrowRight size={23} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureItem;
