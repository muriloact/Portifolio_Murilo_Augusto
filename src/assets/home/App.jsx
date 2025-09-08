import './App.css'
import logoNome from '../../../public/logoNome.jpg'
import foto_Pessoal from '../../../public/Foto_Pessoal_1.jpg'
import iconHTML from '../../../public/iconhtml.png'
import iconCSS from '../../../public/iconcss.png'
import iconJavaScript from '../../../public/iconjs.png'
import iconReact from '../../../public/iconreact.png'
import iconNode from '../../../public/iconnode.png'
import iconPython from '../../../public/iconpython.png'
import iconEmail from '../../../public/iconEmail.png'
import iconLinkedin from '../../../public/iconlinkedin.png'
import iconGitHub from '../../../public/icongithub.png'
import iconBtnFechar from '../../../public/x-button.png'
import iconList from '../../../public/list-view.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser'


function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [menuOpen,setMenuOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email == '' || assunto === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParms = {
      from_name: name,
      email: email,
      telefone: telefone,
      assunto: assunto,
    }

    emailjs.send("service_diwf81n",
      "template_6imdjmb", templateParms, "9L50XJ067vkoxvCA1").then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setTelefone('')
        setAssunto('')
      }, (err) => {
        console.log('ERRO', err)
      })

  }



  return (
    <>
      <header>
        <div className='interface'>
          <div className='logo'>
            <a href='#'>
              <img src={logoNome} className='img-logoMurilo' alt="Logo Murilo Augusto" />
            </a>
          </div>
          <nav className='menu-desktop'>
            <ul>
              <li><a href='#inicio'>Início</a></li>
              <li><a href='#conhecimento'>Especialidades</a></li>
              <li><a href='#projeto'>Projetos</a></li>
              <li><a href='#contato'>Contato</a></li>
            </ul>
          </nav>
          <div className='btn-contato'>
            <a href='https://wa.me/5565999358060?text=Gostaria%20de%20saber%20mais%20sobre%20o%20os%20trabalhos'>
              <button>Contato</button>
            </a>
          </div>
          <div className="btn-abrir-menu" onClick={() => setMenuOpen(true)}>
            <img src={iconList}/>
          </div>

          <div className={`menu-mobile ${menuOpen ? "ativo" : ''}`}>
            <div className="btn-fechar" onClick={() => setMenuOpen(false)}>
              <img src={iconBtnFechar}/>
            </div>
            <nav >
              <ul>
                <li><a href='#inicio' onClick={() => setMenuOpen(false)}>Início</a></li>
                <li><a href='#conhecimento' onClick={() => setMenuOpen(false)}>Especialidades</a></li>
                <li><a href='#projeto' onClick={() => setMenuOpen(false)}>Projetos</a></li>
                <li><a href='#contato' onClick={() => setMenuOpen(false)}>Contato</a></li>
              </ul>
            </nav>
          </div>
          {menuOpen && <div className="overlay-menu" onClick={() => setMenuOpen(false)}></div>}
        </div>
      </header>
      <main>
        <section className='topo-do-site' id='inicio'>
          <div className='interface'>
            <h2 className="titulo">Sobre</h2>
            <div className="flex">
              <div className="txt-topo-site">
                <h1>
                  <span>Sou Murilo Augusto, </span>
                  desenvolvedor focado em soluções empresariais,
                  enxerga desafios como oportunidades de criar inovações
                </h1>
                <p>Acredito que a programação é uma ferramenta de mudança:
                  cada linha de código pode facilitar a vida de alguém. Gosto de trabalhar em equipe,
                  compartilhando conhecimento e aprendendo com diferentes perspectivas.
                </p>
                <div className='btn-contato'>
                  <a href='https://wa.me/5565999358060?text=Gostaria%20de%20saber%20mais%20sobre%20o%20os%20trabalhos'>
                    <button>Entre em Contato</button>
                  </a>
                </div>
              </div>
              <div className="img-topo-site">
                <img className='minhaFoto' src={foto_Pessoal} alt='FotoPessoal'></img>
              </div>
            </div>
          </div>
        </section>
        <section className='conhecimentos' id='conhecimento'>
          <div className="interface">
            <h2 className='titulo'>MEUS <span>CONHECIMENTOS</span></h2>
            <div className="flex">
              <div className='conhecimentos-box-html'>
                <a href='https://www.w3schools.com/html'>
                  <img className="icone-conhecimentos" src={iconHTML}></img>
                </a>
                <h3>HTML</h3>
                <p>Linguagem de marcação usada para estruturar páginas da web
                  (títulos, textos, imagens, links, formulários, etc).
                  É o “esqueleto” do site.
                </p>
              </div>
              <div className='conhecimentos-box-css'>
                <a href='https://www.w3schools.com/css'>
                  <img className="icone-conhecimentos" src={iconCSS}></img>
                </a>
                <h3>CSS</h3>
                <p>Usado para estilizar o HTML (cores, fontes, tamanhos,
                  espaçamentos, layout responsivo, animações).
                  É o “visual/roupa” do site.
                </p>
              </div>
              <div className='conhecimentos-box-javascript'>
                <a href='https://www.w3schools.com/js'>
                  <img className="icone-conhecimentos" src={iconJavaScript}></img>
                </a>
                <h3>JAVASCRIPT</h3>
                <p>Linguagem de programação que dá interatividade ao site (menus dinâmicos,
                  validação de formulários, sliders, jogos, integrações com APIs).
                  É o “cérebro” do site.
                </p>
              </div>
              <div className='conhecimentos-box-react'>
                <a href='https://react.dev'>
                  <img className="icone-conhecimentos" src={iconReact}></img>
                </a>
                <h3>REACT</h3>
                <p>Biblioteca JavaScript focada no frontend para criar interfaces modernas,
                  rápidas e reutilizáveis através de componentes</p>
              </div>
              <div className='conhecimentos-box-node'>
                <a href='https://nodejs.org/pt'>
                  <img className="icone-conhecimentos" src={iconNode}></img>
                </a>
                <h3>NODE.JS</h3>
                <p>Ambiente que permite rodar JavaScript no servidor (backend). Serve para criar APIs,
                  sistemas web completos, automações e até apps em tempo real.
                </p>
              </div>
              <div className='conhecimentos-box-python'>
                <a href='https://www.python.org'>
                  <img className="icone-conhecimentos" src={iconPython}></img>
                </a>
                <h3>PYTHON</h3>
                <p>Linguagem de programação versátil, usada em várias áreas: backend, ciência de dados,
                  inteligência artificial, automação, análise de dados e até aplicações desktop.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="projetos" id='projeto'>
          <div className="interface">
            <h2 className="titulo">MEUS <span>PROJETOS</span></h2>
            <div className="flex">
              <div className="img-port">
                <img src={iconNode} alt="" />
              </div>
              <div className="img-port">
                <img src={iconNode} alt="" />
              </div>
              <div className="img-port">
                <img src={iconNode} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="formulario-conato" id='contato'>
          <div className="interface">
            <h2 className="titulo">FALE<span> COMIGO</span></h2>
            <div className="flex"></div>
            <form className='form' onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Seu nome completo:' onChange={(e) => setName(e.target.value)} value={name} required />
              <input type="text" className="email" placeholder='Seu E-mail:' onChange={(e) => setEmail(e.target.value)} value={email} required />
              <input type="text" name="" id="" className="telefone" placeholder='Seu número:' onChange={(e) => setTelefone(e.target.value)} value={telefone} />
              <textarea name="" id="" placeholder='Assunto... ' className='assunto' onChange={(e) => setAssunto(e.target.value)} value={assunto} required></textarea>
              <div className="btn-enviar"><input type="submit" value="ENVIAR" onSubmit={sendEmail} /></div>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="interface">
          <div className="line-footer sup">
            <div className="flex">
              <div className="line-footer">
                <img src={logoNome} alt="" />
              </div>
              <div className="btn-social">
                <a href="https://outlook.live.com/mail/0/deeplink/compose?to=muriloact@hotmail.com&subject=Dúvida&body=Olá, gostaria de mais informações." className="Email">
                  <img src={iconEmail} alt="Outlook" className="iconeEmail" />
                </a>
                <a href="https://www.linkedin.com/in/murilo-augusto-campanha-teixeira-403845268" className="linkedin">
                  <img src={iconLinkedin} alt="Linkedin" className="iconeLinkedin" />
                </a>
                <a href="https://github.com/muriloact" className="github" >
                  <img src={iconGitHub} alt="GitHub" className="iconeGitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App