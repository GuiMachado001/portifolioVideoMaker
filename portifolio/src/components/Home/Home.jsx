import './Home.css';
import banner1 from '../../assets/img/banner/banner1.avif';
import foto1 from '../../assets/img/foto/gus3.webp'

import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section id="home">
      <div className="containerBannerPrincipal">

        <div className="delimiterFoto">
            <div className="containerFotoHome">
                <img className='foto1' src={foto1} alt="" />
            </div>
        </div>

        <img className='bannerPrincipal' src={banner1} alt="Banner principal" />
        <div className="bannerOverlay"></div>
        <div className="bannerText">
          <Typewriter
            words={['Gustavo Saab - Videomaker']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
