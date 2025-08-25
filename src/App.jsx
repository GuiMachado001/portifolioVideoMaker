
import './App.css'

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Sobre from './components/SobreMim/Sobre';
import LinhaSeparadora from './components/Line/Line';
import Video from './components/VideosPortifolio/Video';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <LinhaSeparadora />
      <Video />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
