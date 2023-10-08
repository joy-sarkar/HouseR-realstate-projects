import About from "../About/About";
import Counter from "./Counter/Counter";
import HeroSection from "./HeroSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Counter area={60} apartment={80} construction={60} room={90}/>
    </div>
  );
};

export default Home;
