import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileReviews from "./components/MobileReview";
import Footer from "./components/Footer";
import DesktopReview from "./components/DesktopReview";
import Cta from "./components/Cta";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DesktopReview />
      <MobileReviews />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
