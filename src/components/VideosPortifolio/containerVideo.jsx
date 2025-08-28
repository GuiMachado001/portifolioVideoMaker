// Video.jsx
import './ContainerVideo.css';

import institutoDaFaceVideo from '../../assets/videos/institutoDaFace.mp4';
import institutoDaFaceThumb from '../../assets/img/thumbnail/institutoDaFace.png'

import BalnearioShoppingVideo from '../../assets/videos/BalnearioShopping.mp4';
import BalnearioShoppingThumb from '../../assets/img/thumbnail/BalnearioShopping.png';

import citroenVideo from '../../assets/videos/Citroen_junho.mp4';
import citroenThumb from '../../assets/img/thumbnail/citroen.png';

import aguasDeBonitoVideo from '../../assets/videos/AguasDeBonito.mp4';
import aguasDeBonitoThumb from '../../assets/img/thumbnail/AguasDeBonito.png';

import chevroletVideo from '../../assets/videos/chevrolet.mp4';
import chevroletThumb from '../../assets/img/thumbnail/chevrolet.png'

import superProVideo from '../../assets/videos/SuperPro.mp4';
import superProThumb from '../../assets/img/thumbnail/SuperPro.png'

import sertaoVideo from '../../assets/videos/Sertao.mp4';
import sertaoThumb from '../../assets/img/thumbnail/Sertao.png'

import superPro2Video from '../../assets/videos/SuperPro2.mp4';
import superPro2Thumb from '../../assets/img/thumbnail/SuperPro2.png';

import sertao2Video from '../../assets/videos/Sertao2.mp4';
import sertao2Thumb from '../../assets/img/thumbnail/Sertao2.png'

import acpVideo from '../../assets/videos/acp.mp4';
import acpThumb from '../../assets/img/thumbnail/acp.png'

import CijusVideo from '../../assets/videos/Cijus.mp4';
import CijusThumb from '../../assets/img/thumbnail/Cijus.png'

import bonnaVideo from '../../assets/videos/bonna.mp4';
import bonnaThumb from '../../assets/img/thumbnail/bonna.png'

import TJMSVideo from '../../assets/videos/TJMS.mp4';
import TJMSThumb from '../../assets/img/thumbnail/TJMS.png'


import Video from './Video/Video';


function ContainerVideo() {
  return (
    <section id="videos" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <div className="containerTitle">
        <h2 className='titleTrabalho'>Meus Trabalhos</h2>
      </div>

      <div className="containerAllVideos">
        <Video src={institutoDaFaceVideo} thumb={institutoDaFaceThumb} title="instituto Da Face Junho" />
        <Video src={BalnearioShoppingVideo} thumb={BalnearioShoppingThumb} title="Balneario Shopping" />
        <Video src={citroenVideo} thumb={citroenThumb} title="Citroën Junho" />
        <Video src={aguasDeBonitoVideo} thumb={aguasDeBonitoThumb} title="Aguas de Bonito" />
        <Video src={chevroletVideo} thumb={chevroletThumb} title="Chevrolet" />
        <Video src={superProVideo} thumb={superProThumb} title="Super Pro" />
        <Video src={sertaoVideo} thumb={sertaoThumb} title="Sertão" />
        <Video src={superPro2Video} thumb={superPro2Thumb} title="Super Pro" />
        <Video src={sertao2Video} thumb={sertao2Thumb} title="Sertão" />
        <Video src={acpVideo} thumb={acpThumb} title="acp" />
        <Video src={CijusVideo} thumb={CijusThumb} title="Cijus" />
        <Video src={bonnaVideo} thumb={bonnaThumb} title="bonna" />
        <Video src={TJMSVideo} thumb={TJMSThumb} title="TJMS" />
      </div>
    </section>
  );
}

export default ContainerVideo;
