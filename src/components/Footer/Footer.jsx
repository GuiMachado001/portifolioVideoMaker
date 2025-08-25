import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <p>© {new Date().getFullYear()} Gustavo Saab. Todos os direitos reservados.</p>
        <p className="footerCredit"><a className='creditos' href="https://guilhermemachadodev.netlify.app/" target='_blank'>Feito por Guilherme Machado</a></p>
      </div>
    </footer>
  );
}

export default Footer;
