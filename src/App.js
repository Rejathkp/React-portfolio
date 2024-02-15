import Navbar from "./components/NavBar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/intro/Introduction";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
