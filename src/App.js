import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}


export default App;

