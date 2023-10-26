import "./App.css";
import AllHeader from "./components/view/AllHeader";
import AllHero from "./components/view/AllHero";
import AllOurTeam from "./components/view/AllOurTeam";
import AllFaqs from "./components/view/AllFaqs";
import AllAboutUs from "./components/view/AllAboutUs";
import AllFooter from "./components/view/AllFooter";
import ViewButtons from "./components/view/ViewButtons";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderLast from "./components/HeaderLast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ViewButtons />} />
        <Route path="/header" element={<AllHeader />} />
        <Route path="/hero" element={<AllHero />} />
        <Route path="/ourteam" element={<AllOurTeam />} />
        <Route path="/faqs" element={<AllFaqs />} />
        <Route path="/aboutus" element={<AllAboutUs />} />
        <Route path="/footer" element={<AllFooter />} />
      </Routes>
    
    </>
  );
}

export default App;
