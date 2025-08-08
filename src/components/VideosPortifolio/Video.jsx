import LinhaVertical from './LineVertical/LineVertical';

function Video() {
  return (
    <section id="videos" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h2>Meus Trabalhos</h2>
      <LinhaVertical />
      <div className="videosGrid">
        {/* seus vídeos aqui */}
      </div>
    </section>
  );
}

export default Video;
