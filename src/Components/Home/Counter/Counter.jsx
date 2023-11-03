import { useState, useEffect } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBuildings, BsBuildingAdd } from "react-icons/bs";
import { BiArea } from "react-icons/bi";

function Counter({ area, apartment, construction, room }) {
  const [totalArea, setTotalArea] = useState(0);
  const [totalApartment, setTotalApartment] = useState(0);
  const [totalConstruction, setTotalConstruction] = useState(0);
  const [totalRoom, setTotalRoom] = useState(0);

  useEffect(() => {
    let areaCounter;

    if (totalArea < area) {
      areaCounter = setInterval(() => {
        setTotalArea((prevCount) => prevCount + 1);
      }, 100); // Change this to control the speed of counting (in milliseconds)
    }

    return () => {
      clearInterval(areaCounter);
    };
  }, [totalArea, area]);
  //   apartment counter
  useEffect(() => {
    let apartmentCounter;

    if (totalApartment < apartment) {
      apartmentCounter = setInterval(() => {
        setTotalApartment((prevCount) => prevCount + 1);
      }, 100); // Change this to control the speed of counting (in milliseconds)
    }

    return () => {
      clearInterval(apartmentCounter);
    };
  }, [totalApartment, apartment]);
  //   construction counter
  useEffect(() => {
    let constructionCounter;

    if (totalConstruction < construction) {
      constructionCounter = setInterval(() => {
        setTotalConstruction((prevCount) => prevCount + 1);
      }, 100); // Change this to control the speed of counting (in milliseconds)
    }

    return () => {
      clearInterval(constructionCounter);
    };
  }, [totalConstruction, construction]);
  //   Rooms Counter
  useEffect(() => {
    let roomCounter;

    if (totalRoom < room) {
      roomCounter = setInterval(() => {
        setTotalRoom((prevCount) => prevCount + 1);
      }, 100); // Change this to control the speed of counting (in milliseconds)
    }

    return () => {
      clearInterval(roomCounter);
    };
  }, [totalRoom, room]);

  return (
    <section className="bg-[#fff] px-16">
      <div className="counterContent md:flex justify-between py-20">
        <div className="flex flex-col justify-center max-md:p-8 items-center">
          <BiArea color="#ff5a3c" size={26} />
          <h1 className="font-extrabold text-4xl text-[#181717]">
            {totalArea}+
          </h1>
          <h3 className="font-bold text-2xl">Total Area Sq</h3>
        </div>
        <div className="flex flex-col justify-center max-md:p-8 items-center">
          <BsBuildings color="#ff5a3c" size={26} />
          <h1 className="font-extrabold text-4xl text-[#181717]">
            {totalApartment}+
          </h1>
          <h3 className="font-bold text-2xl">Apartments Sold</h3>
        </div>
        <div className="flex flex-col justify-center max-md:p-8 max-md:text-center items-center">
          <BsBuildingAdd  color="#ff5a3c" size={30} />
          <h1 className="font-extrabold text-4xl text-[#181717]">
            {totalConstruction}+
          </h1>
          <h3 className="font-bold text-2xl">Total Constructions</h3>
        </div>
        <div className="flex flex-col justify-center max-md:p-8 items-center">
          <SiGoogleclassroom color="#ff5a3c" size={26} />
          <h1 className="font-extrabold text-4xl text-[#181717]">
            {totalRoom}+
          </h1>
          <h3 className="font-bold text-2xl">Apartio Rooms</h3>
        </div>
      </div>
    </section>
  );
}

export default Counter;
