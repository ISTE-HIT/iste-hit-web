import { Footer, Navbar } from "../components";
import {
  About,
  Contributors,
  Explore,
  Hero,
  JoinUs,
  Message,
  RecentEvent,
} from "../sections";

const Home = () => (
  <div>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <JoinUs />
    </div>
    <div className="relative">
      <RecentEvent />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Explore />
      <div className="gradient-04 z-0" />
      <Message />
      <div className="bg-black z-0" />
    </div>
      <Contributors />
  </div>
);

export default Home;
