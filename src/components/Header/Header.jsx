import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand text-white" href="#">Gustavo Saab</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#sobre">Sobre Mim</a></li>
          <li className="nav-item"><a className="nav-link" href="#cursos">Meus Cursos</a></li>
          <li className="nav-item"><a className="nav-link" href="#projeto">Projetos</a></li>
          <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
