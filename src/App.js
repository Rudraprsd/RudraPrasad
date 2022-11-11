import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
// import Contact from './components/contact/contact'; 
import Footer from './components/footer/footer';
import ReactGA from 'react-ga';
import Projects from './components/projects/projects';


const App = () => {
    return (
        <>
        <Header />

        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Projects />
            {/* <Services />  */}

            <Qualification />
            {/* <Contact />  */}
            <Footer />
        </main>
        </>
    )
}

export default App