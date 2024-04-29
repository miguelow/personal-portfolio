import './App.css';
import Header from './components/header/Header.jsx';
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Qualifications from "./components/qualifications/Qualifications.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Scroll from "./components/scroll/ScrollToTop.jsx";
function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Contact/>
      </main>
        <Footer />
        <Scroll/>
    </>
  );
}

export default App;
