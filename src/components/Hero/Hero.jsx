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
      <h1>Hi, I'm Daniel Beaulne</h1>
    </section>
  );
}
export default Hero;