import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllHeader from "./view/Headers";
import AllHero from "./view/Heros";
import AllOurTeam from "./view/OurTeams";
import AllFaqs from "./components/faqs/Faqs";
import AllAboutUs from "./view/AboutUs";
import AllRoadmap from "./components/roadmap/Roadmap";
import AllFooter from "./components/footer/Footer";
import ViewButtons from "./components/ViewButtons";
import { Route, Routes } from "react-router-dom";
import Forms from "./view/Forms";
import Video from "./components/video/Video";
import TableTailwind from "./components/table/TableTailwind";
import Slider from "./view/Slider";

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
          <Route path="/form" element={<Forms />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/roadmap" element={<AllRoadmap />} />
          <Route path="/table" element={<TableTailwind />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
