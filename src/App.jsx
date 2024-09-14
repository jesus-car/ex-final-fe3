import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="app">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/favs" element={<Favs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/detail/:id" element={<Detail/>}/>
              <Route path="*" element={<h1>Page not found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
