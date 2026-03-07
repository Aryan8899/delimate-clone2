import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import EarnMoney from './components/EarnMoney';
import RecentDeliveries from "./components/RecentDeliveries"
//import PersonalParcelHub from './components/PersonalParcelHub';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Safety from './components/Safety';


// force updatekk
function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
     
      <Stats />
      <Features />
      <HowItWorks />
      <EarnMoney/>
      <RecentDeliveries/>
      
      <Safety/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default App;
