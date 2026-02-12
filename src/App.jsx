import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Audience from './components/Audience';
import EarlyAccess from './components/EarlyAccess';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ButtonShowcase from '../src/components/ButtonShowcase';

function App() {
  return (
    <>
      {/* <ButtonShowcase /> */}
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Audience />
      {/* <EarlyAccess /> */}
      <CTA />
      <Footer />
    </>
  );
}

export default App;