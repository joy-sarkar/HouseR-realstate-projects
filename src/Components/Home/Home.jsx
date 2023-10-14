import About from "../About/About";
import Aminities from "../Aminities/Aminities";
import CTA from "../CTA/CTA";
import FeatureItem from "../Services/FeatureItem/FeatureItem";
import Services from "../Services/Services";
import Counter from "./Counter/Counter";
import HeroSection from "./HeroSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Counter area={60} apartment={80} construction={60} room={90}/>
      <Services/>
      <FeatureItem/>
      <Aminities/>
      <CTA/>
    </div>
  );
};

export default Home;
