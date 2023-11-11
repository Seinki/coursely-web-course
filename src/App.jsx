import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import KelasPages from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import Navbar from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/kelas" Component={KelasPages} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>

      <FooterComponent/>
    </div>
  );
}

export default App;
