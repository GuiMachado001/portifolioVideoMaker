
import './App.css'

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Sobre from './components/SobreMim/Sobre';
import LinhaSeparadora from './components/Line/Line';
import ContainerVideo from './components/VideosPortifolio/containerVideo';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <LinhaSeparadora />
      <ContainerVideo />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
