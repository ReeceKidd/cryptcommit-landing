import Header from "./components/Header/Header";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import TeamMemberSection from "./components/TeamMemberSection/TeamMemberSection";
import Footer from "./components/Footer/Footer";
import PreloaderWrapper from "./components/PreLoaderWrapper/PreloaderWrapper";
import BackToTop from "./components/BackToTop/BackToTop";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutUsSection />
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
