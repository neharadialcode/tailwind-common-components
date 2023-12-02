import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllHeader from "./view/Headers";
import AllHero from "./view/Heros";
import AllOurTeam from "./view/OurTeams";
import AllFaqs from "./components/faqs/Faqs";
import AllAboutUs from "./view/AboutUs";
import AllFooter from "./components/footer/Footer";
import ViewButtons from "./components/ViewButtons";
import { Route, Routes } from "react-router-dom";
import AllForms from "./view/Forms";
import Video from "./components/video/Video";
import CustomSlider from "./components/slider/CustomSlider";
import AllRoadmap from "./components/roadmap/Roadmap";
import NavbarSpaceCenter from "./components/headersection/NavbarSpaceCenter";
import NavbarAlignRight from "./components/headersection/NavbarAlignRight";
import NavbarCentered from "./components/headersection/NavbarCentered";
import HeroFirst from "./components/herosection/HeroFirst";
import HeroSecond from "./components/herosection/HeroSecond";
import HeroThird from "./components/herosection/HeroThird";
import AbsoluteHeroFirst from "./components/herosection/AbsoluteHeroFirst";
import AbsoluteHeroSecond from "./components/herosection/AbsoluteHeroSecond";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<ViewButtons />} />
          <Route path="/header" element={<AllHeader />} />
          <Route path="/hero" element={<AllHero />} />
          <Route path="/ourteam" element={<AllOurTeam />} />
          <Route path="/faqs" element={<AllFaqs />} />
          <Route path="/aboutus" element={<AllAboutUs />} />
          <Route path="/footer" element={<AllFooter />} />
          <Route path="/video" element={<Video />} />
          <Route path="/form" element={<AllForms />} />
          <Route path="/slider" element={<CustomSlider />} />
          <Route path="/roadmap" element={<AllRoadmap />} />
        </Routes>
      </div>
      {/* <NavbarSpaceCenter/> */}
      {/* <NavbarAlignRight/> */}
      {/* <NavbarCentered/> */}
      {/* <HeroFirst/> */}
      {/* <HeroSecond/> */}
      {/* <HeroThird/> */}
      {/* <AbsoluteHeroFirst/> */}
      {/* <AbsoluteHeroSecond/> */}
    </>
  );
}

export default App;
