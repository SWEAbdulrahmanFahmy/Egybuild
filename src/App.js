import './App.css';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Gallory from './component/Gallory';
import Header from './component/Header';
import Landing from './component/Landing';
import Services from './component/Services';
import WhyChoosingUs from './component/WhyChoosingUs';
function App() {
  return (
    <div className="App font-montserrat text-[#3D3736] ">
    <Header/>
    <Landing/>
    <Services/>
    <Gallory/>
    <Contact/>
    <WhyChoosingUs/>
    <Footer/>
    </div>
  );
}

export default App;
