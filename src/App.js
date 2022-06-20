import { Route, Routes } from "react-router-dom";
import Contact from "./Comp/Contact";
import Acueil from "./Comp/Acueil";
import Blog from "./Comp/Blog";
import Portfolio from "./Comp/Projects";
import Header from "./Comp/Header";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes> 
    </>
  );
}
export default App;