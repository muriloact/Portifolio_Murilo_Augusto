import './App.css'
import logoNome from '../images/logoNome.jpg'
import foto_Pessoal from '../images/Foto_Pessoal_1.jpg'
import iconHTML from '../images/iconhtml.png'
import iconCSS from '../images/iconcss.png'
import iconJavaScript from '../images/iconjs.png'
import iconReact from '../images/iconreact.png'
import iconNode from '../images/iconnode.png'
import iconPython from '../images/iconpython.png'
import iconEmail from '../images/iconEmail.png'
import iconLinkedin from '../images/iconlinkedin.png'
import iconGitHub from '../images/icongithub.png'


function App() {

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
              <li><a href='#'>Início</a></li>
              <li><a href='#'>Especialidades</a></li>
              <li><a href='#'>Projetos</a></li>
              <li><a href='#'>Contato</a></li>
            </ul>
          </nav>
          <div className='btn-contato'>
            <a href='#'>
              <button>Contato</button>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className='topo-do-site'>
          <div className='interface'>
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
                  <a href='#'>
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
        <section className='conhecimentos'>
          <div className="interface">
            <h2 className='titulo'>MEUS <span>CONHECIMENTOS</span></h2>
            <div className="flex">
              <div className='conhecimentos-box-html'>
                <a href='https://www.w3schools.com/html'>
                  <img class="icone-conhecimentos" src={iconHTML}></img>
                </a>
                <h3>HTML</h3>
                <p>Linguagem de marcação usada para estruturar páginas da web
                  (títulos, textos, imagens, links, formulários, etc).
                  É o “esqueleto” do site.
                </p>
              </div>
              <div className='conhecimentos-box-css'>
                <a href='https://www.w3schools.com/css'>
                  <img class="icone-conhecimentos" src={iconCSS}></img>
                </a>
                <h3>CSS</h3>
                <p>Usado para estilizar o HTML (cores, fontes, tamanhos,
                  espaçamentos, layout responsivo, animações).
                  É o “visual/roupa” do site.
                </p>
              </div>
              <div className='conhecimentos-box-javascript'>
                <a href='https://www.w3schools.com/js'>
                  <img class="icone-conhecimentos" src={iconJavaScript}></img>
                </a>
                <h3>JAVASCRIPT</h3>
                <p>Linguagem de programação que dá interatividade ao site (menus dinâmicos,
                  validação de formulários, sliders, jogos, integrações com APIs).
                  É o “cérebro” do site.
                </p>
              </div>
              <div className='conhecimentos-box-react'>
                <a href='https://react.dev'>
                  <img class="icone-conhecimentos" src={iconReact}></img>
                </a>
                <h3>REACT</h3>
                <p>Biblioteca JavaScript focada no frontend para criar interfaces modernas,
                  rápidas e reutilizáveis através de componentes</p>
              </div>
              <div className='conhecimentos-box-node'>
                <a href='https://nodejs.org/pt'>
                  <img class="icone-conhecimentos" src={iconNode}></img>
                </a>
                <h3>NODE.JS</h3>
                <p>Ambiente que permite rodar JavaScript no servidor (backend). Serve para criar APIs,
                  sistemas web completos, automações e até apps em tempo real.
                </p>
              </div>
              <div className='conhecimentos-box-python'>
                <a href='https://www.python.org'>
                  <img class="icone-conhecimentos" src={iconPython}></img>
                </a>
                <h3>PYTHON</h3>
                <p>Linguagem de programação versátil, usada em várias áreas: backend, ciência de dados,
                  inteligência artificial, automação, análise de dados e até aplicações desktop.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="projetos">
          <div className="interface">
            <h2 className="titulo">MEUS <span>PROJETOS</span></h2>
            <div className="flex">
              <div className="img-port">

              </div>
              <div className="img-port">

              </div>
              <div className="img-port">

              </div>
            </div>
          </div>
        </section>
        <section className="formulario-conato">
          <div className="interface">
            <h2 className="titulo">FALA<span> COMIGO</span></h2>
            <div className="flex"></div>
            <form action="">
              <input type="text" name="" id="" className="name" placeholder='Seu nome completo:' required />
              <input type="text" name="" id="" className="email" placeholder='Seu E-mail:' required />
              <input type="text" name="" id="" className="telefone" placeholder='Seu número:' />
              <textarea name="" id="" placeholder='Assunto... ' required></textarea>
              <div className="btn-enviar"><input type="submit" value="ENVIAR" /></div>
            </form>
          </div>
        </section>
        <section className="contatos">

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