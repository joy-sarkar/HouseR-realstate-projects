import img1 from "../../src/assets/slider1.png";
import img2 from "../../src/assets/slider2 .png";
import img3 from "../../src/assets/slider3.png";
import img4 from "../../src/assets/slider4.png";
import featureImg from "../assets/cover 0122.jpg";
import featueImg1 from "../assets/featueImg1.jpg";
import featueImg2 from "../assets/featueImg2.jpg";
import featueImg3 from "../assets/featueImg3.jpg";
import featueImg4 from "../assets/featueImg4.jpg";
import featueImg5 from "../assets/featueImg5.jpg";
// react icon
import { TbHomeHeart } from "react-icons/tb";
import { MdSecurity,MdOutlineSecurity } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import { GiHills } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaSwimmingPool,FaHandHoldingMedical } from "react-icons/fa";
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
    microFeature: [
      { id: 1, text: "Smart Home Design", icon: TbHomeHeart },
      { id: 2, text: "Beautiful Scene Around", icon: GiHills },
      { id: 3, text: "Exceptional Lifestyle", icon: RiUserHeartLine },
      { id: 4, text: "Complete 24/7 Security", icon: MdSecurity },
    ],
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
export const services = [
  {
    id: 1,
    title: "Buy a House",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText: "Buy a House",
    imgurl: "https://quarter-nextjs.netlify.app/img/icons/icon-img/21.png",
  },
  {
    id: 1,
    title: "Rent a House",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText: "Rent a House",
    imgurl: "https://quarter-nextjs.netlify.app/img/icons/icon-img/22.png",
  },
  {
    id: 1,
    title: "Sell a House",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    btnText: "Sell a House",
    imgurl: "https://quarter-nextjs.netlify.app/img/icons/icon-img/23.png",
  },
];
// Featured Listings
export const featuredList = [
  {
    id: 1,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg1,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
  {
    id: 2,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg2,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
  {
    id: 3,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg3,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
  {
    id: 4,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg4,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
  {
    id: 5,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg5,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
  {
    id: 6,
    price: 69,
    category: "For sale",
    location: "New York",
    title: "Luxury villa in rego Park",
    imgURL: featueImg1,
    features: [
      { quantity: 2, names: "Bedrooms" },
      { quantity: 2, names: "Bathrooms" },
      { quantity: 2560, names: "Square Ft" },
    ],
  },
];

export const Amenities = [
  {
    id: 1,
    title: "Parking Space",
    icon: AiFillCar,
  },
  {
    id: 2,
    title: "Swimming Pool",
    icon: FaSwimmingPool,
  },
  {
    id: 3,
    title: "Private Security",
    icon: MdOutlineSecurity,
  },
  {
    id: 4,
    title: "Medical Center",
    icon: FaHandHoldingMedical,
  },
  {
    id: 5,
    title: "Library Area",
    icon: BiLibrary,
  },
  {
    id: 6,
    title: "Smart Home",
    icon: RiHomeHeartLine,
  },
];
