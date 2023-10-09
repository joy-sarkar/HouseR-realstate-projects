import img1 from "../../src/assets/slider1.png";
import img2 from "../../src/assets/slider2 .png";
import img3 from "../../src/assets/slider3.png";
import img4 from "../../src/assets/slider4.png";
import featureImg from '../assets/cover 0122.jpg'
// react icon
// import { TbHomeHeart } from "react-icons/tb";
// data for hero slider
export const SliderData = [
  {
    id: "1",
    title: "Find Your Dream House By Us",
    topTitle: "Real Estale Agency",
    subTitle:
      "Home is where you make memories, and your dream home is where you make them last.",
    imgUrl: img1,
  },
  {
    id: "2",
    title: "The Right Place of House Finding",
    topTitle: "Real Estale Agency",
    subTitle:
      "Your dream home is a masterpiece waiting to be discovered. Start your journey today.",
    imgUrl: img2,
  },
  {
    id: "3",
    title: "Elegance, comfort, and your dreams",
    topTitle: "Real Estale Agency",
    subTitle:
      "Your dream home is more than a property; it's a reflection of your aspirations",
    imgUrl: img3,
  },
  {
    id: "4",
    title: "There's no place like a dream home",
    topTitle: "Real Estale Agency",
    subTitle:
      "Home is where your story begins, and we're here to help you find the perfect chapter",
    imgUrl: img4,
  },
];

// data for about section
export const aboutData = [
  {
    topTitle: "About Us",
    title: "The Leading Real Estate Rental Marketplace",
    subTitle:
      "Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services",
    microFeature: [{ id: 1, text: "Smart Home Design", icon: 1 }],
  },
];
export const sellProperty = [
  {
    title: "Today Sells Properties",
    subtitle:
      "HouseR allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information",
      imgUrl: featureImg,
    facilities: [
      { id: 1, title: "Live Music Concerts at Luviana" },
      { id: 2, title: "Our SecretIsland Boat Tour is Just for You" },
      { id: 3, title: "Live Music Cocerts at Luviana" },
      { id: 4, title: "Live Music Concerts at Luviana" },
    ],
    features: [
      { id: 1, title1: 3, title: "Bedrooms" },
      { id: 2, title1: 2, title: "Bathrooms" },
      { id: 3, title1: 2, title: "Car parking" },
      { id: 4, title1: 3450, title: "square Ft" },
    ],
  },
];
// service main focus
export const services =[
  {id:1,
    title: "Buy a House",
    text:"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText:"Buy a House"
  },
  {id:1,
    title: "Rent a House",
    text:"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText:"Rent a House"
  },
  {id:1,
    title: "Sell a House",
    text:"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText:"Sell a House"
  }
]
