import './Contato.css';

function Contato(){
    return(

        <section id='contato'>
        <div className="containerTitleContato">
            <h2 className='titleContato'>Entre em Contato</h2>
        </div>

        <div className="containerBtnContato">
            <button>
                <i class="bi bi-instagram"></i>
                <span>Instragram</span>
            </button>

            <button>
                <i class="bi bi-whatsapp"></i>
                <span>whatsapp</span>
            </button>

            <button>
                <i class="bi bi-envelope-at-fill"></i>
                <span>E-mail</span>
            </button>
        </div>
    </section>
    )
}

export default Contato;