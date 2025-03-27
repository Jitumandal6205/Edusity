import React, { useState } from "react";
import Navbar from './components/NavBar/navbar';
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/programs";
import Title from "./components/Title/title";
import About from "./components/About/About";
import Campus from "./components/Campus/campus";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";
const App = () => {

  const [playState, setPlayState] = useState (false)

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subtitle ='Our Programs' Title ='What We Offer'></Title>
      <Programs />
      <About setPlayState = {setPlayState} />
      <Title subtitle ='Gallery' Title ='Campus Photos'></Title>
      <Campus />
      <Title subtitle ='Testimonials' Title ='What Student Says'></Title>
      <Testimonials />
      <Title subtitle ='Contact Us' Title ='Get In Touch'></Title>
      <Contact />
      <Footer />
      </div>
      <VideoPlayer playState = {playState} setPlayState = { setPlayState }/>
    </div>
  );
};

export default App;
