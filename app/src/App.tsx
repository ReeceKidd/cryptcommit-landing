import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import CounterSection from "./components/CounterSection/CounterSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import TeamMemberSection from "./components/TeamMemberSection/TeamMemberSection";
import Footer from "./components/Footer/Footer";
import PreloaderWrapper from "./components/PreLoaderWrapper/PreloaderWrapper";
import BackToTop from "./components/BackToTop/BackToTop";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutUsSection />
      <CounterSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TeamMemberSection />
      <Footer />
      <PreloaderWrapper />
      <BackToTop />
    </div>
  );
}

export default App;
