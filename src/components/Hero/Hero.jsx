/** Header component */
import './Hero.css';
import Headshot from '../../assets/DB.jpg';


function Hero() {
  // const location = useLocation();

  return (
    <section className="hero">
      <div className="hero__image">
        <img
         className="hero__profile-pic"
         src={Headshot}
         alt="a head shot of a smiling Daniel"
        />
      </div>
      <h1 className='hero__title'>Hi, I'm Daniel Beaulne</h1>
      <p className='hero__profile-blurb'>I'm a seasoned Controls Specialist with over 25 years of experience in industrial automation, specializing in PLC programming, systems integration, and the commissioning of complex assembly lines across North America. In recent years, I've expanded my expertise into full-stack web development, completing a Software Engineering diploma at BrainStation and acquiring modern skills in JavaScript, TypeScript, React, Node.js, and MySQL. I'm now focused on merging my deep industrial knowledge with emerging technologies, including AI-powered solutions, to create innovative tools that enhance efficiency and automation workflows. As a self-employed professional, I bring both technical excellence and entrepreneurial vision to every project.</p>
    </section>
  );
}
export default Hero;