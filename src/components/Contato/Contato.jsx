import './Contato.css';

function Contato(){
    return(

        <section id='contato'>
        <div className="containerTitleContato">
            <h2 className='titleContato'>Entre em Contato</h2>
        </div>

        <div className="containerBtnContato">
            <a href="https://www.instagram.com/saab_gustavo/" target='_blank'>
            <button>
                <i class="bi bi-instagram"></i>
                <span>Instragram</span>
            </button>
            </a>

            <a href="https://wa.me/556799372259" target='_blank'>
            <button>
                <i class="bi bi-whatsapp"></i>
                <span>whatsapp</span>
            </button>
            </a>

            <button>
                <i class="bi bi-envelope-at-fill"></i>
                <span>E-mail</span>
            </button>
        </div>
    </section>
    )
}

export default Contato;