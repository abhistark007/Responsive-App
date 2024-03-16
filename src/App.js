
import './App.css';
import AddYourOwnSection from './components/AddYourOwnSection';
import Footer from './components/Footer';
import GetStartedSection from './components/GetStartedSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SignInSection from './components/SignInSection';
import TestimonialSection from './components/TestimonialSection';
import up from '../src/assets/up.png'

function App() {
  return (
    <div id='toop' className="relative flex flex-col w-full font-['Poppins']">
      <div className='fixed z-20 bottom-5 right-5 h-[60px] w-[60px] rounded-full bg-white shadow-xl flex justify-center items-center cursor-pointer duration-200 hover:bg-[#8064A2]'>
        <a href="#toop" ><img src={up} alt="" /></a>
      </div>
      <Navbar/>
      <SignInSection/>
      <HeroSection/>
      <AddYourOwnSection/>
      <TestimonialSection/>
      <GetStartedSection/>
      <Footer/>
      <div className='bg-[#F7F5F9] w-full h-[78px] text-center font-[500] text-[14px] leading-[18px] tracking-[0.5%] flex items-center justify-center'>
      © Purple Cues Private Limited
      </div>
    </div>
  );
}

export default App;
