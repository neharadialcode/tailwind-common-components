import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderLast from "./components/HeaderLast";
import OurTeam from "./components/OurTeam";
import FaqSection from "./components/FaqSection";
import FaqSecond from "./components/FaqSecond";
import AboutUsFirst from "./components/AboutUsFirst";
import AboutUsSecond from "./components/AboutUsSecond";

function App() {
  return (
    <>
      <Header />
      <HeaderMiddle />
      <HeaderLast/>
      <OurTeam />
      <FaqSection />
      <FaqSecond />
      <AboutUsFirst />
      <AboutUsSecond/>
    </>
  );
}

export default App;
