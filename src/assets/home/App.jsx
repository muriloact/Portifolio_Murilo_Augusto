// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

  // const [count, setCount] = useState(0)

function App() {

  return (
    <>
      <header>
        <div className='interface'>
          <div className='logo'>
            <a href='#'>
              <img src="./logoNome.jpg" className='img-logoMurilo' alt="Logo Murilo Augusto" />
            </a>
          </div>
          <nav className='menu-desktop'>
            <ul>
              <li><a href='#'>Início</a></li>
              <li><a href='#'>Especialidades</a></li>
              <li><a href='#'>Sobre</a></li>
              <li><a href='#'>Projetos</a></li>
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
                  <span>Murilo Augusto, </span>
                  desenvolvedor focado em soluções empresariais,<br/>
                  enxerga desafios como oportunidades de criar inovaçÕES
                </h1>
                <p>Acredito que a programação é uma ferramenta de mudança: <br/>
                  cada linha de código pode facilitar a vida de alguém. Gosto de trabalhar em equipe,<br/>
                  compartilhando conhecimento e aprendendo com diferentes perspectivas.
                </p>
                <div className='btn-contato'>
                  <a href='#'>
                    <button>Entre em Contato</button>
                  </a>
                </div>
              </div>
              <div className="img-topo-site">
                <img className='minhaFoto' src='./Foto_Pessoal_1.jpg' alt='FotoPessoal'></img>
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
                  <img class="icone-conhecimentos" src='./iconhtml.png'></img>
                </a>
                  <h3>HTML</h3>
                  <p>Linguagem de marcação usada para estruturar páginas da web 
                    (títulos, textos, imagens, links, formulários, etc). 
                    É o “esqueleto” do site.
                  </p>
              </div>
              <div className='conhecimentos-box-css'>
                <a href='https://www.w3schools.com/css'> 
                  <img class="icone-conhecimentos" src='./iconcss.png'></img>
                </a>
                <h3>CSS</h3>
                <p>Usado para estilizar o HTML (cores, fontes, tamanhos, 
                  espaçamentos, layout responsivo, animações). 
                  É o “visual/roupa” do site.
                </p>
              </div>
              <div className='conhecimentos-box-javascript'>
                <a href='https://www.w3schools.com/js'> 
                  <img class="icone-conhecimentos" src='./iconjs.png'></img>
                </a>
                  <h3>JAVASCRIPT</h3>
                  <p>Linguagem de programação que dá interatividade ao site (menus dinâmicos,
                    validação de formulários, sliders, jogos, integrações com APIs). 
                    É o “cérebro” do site.
                  </p>
              </div>
              <div className='conhecimentos-box-react'>
                <a href='https://react.dev'> 
                <img class="icone-conhecimentos" src='./iconreact.png'></img>
                </a>
                <h3>REACT</h3>
                <p>Biblioteca JavaScript focada no frontend para criar interfaces modernas, 
                  rápidas e reutilizáveis através de componentes</p>
              </div>
              <div className='conhecimentos-box-node'>
                <a href='https://nodejs.org/pt'> 
                  <img class="icone-conhecimentos"src='./iconnode.png'></img>
                </a>
                  <h3>NODE.JS</h3>
                  <p>Ambiente que permite rodar JavaScript no servidor (backend). Serve para criar APIs, 
                    sistemas web completos, automações e até apps em tempo real.
                  </p>
              </div>
              <div className='conhecimentos-box-python'>
                <a href='https://www.python.org'> 
                <img class="icone-conhecimentos" src='./iconpython.png'></img>
                </a>
                <h3>PYTHON</h3>
                <p>Linguagem de programação versátil, usada em várias áreas: backend, ciência de dados, 
                  inteligência artificial, automação, análise de dados e até aplicações desktop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contatos">
          <div className="interface">
            <a href="https://outlook.live.com/mail/0/deeplink/compose?to=muriloact@hotmail.com&subject=Dúvida&body=Olá, gostaria de mais informações." className="Email">
              <img src="./iconEmail.png" alt="" className="iconeEmail"/>
            </a>
            <a href="" className="linkedin">
              <img src="./iconlinkedin.png" alt="" className="iconeLinkedin"/>
            </a>
            <a href="" className="github">
              <img src="./icongithub.png" alt="" className="iconeGitHub"/>
            </a>
          </div>
        </section>
      </main>

    </>
  )
}

export default App

/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  
  */
    //#region primeira tentativa

      /* <header>
            <div className='barComNome'>
              <h2 className=''>Murilo Augusto Campanha Teixeira</h2>
              <div className='linkdLinkedin'>
                <a className='Logo_Linkedin' href='https://www.linkedin.com/in/murilo-augusto-campanha-teixeira-403845268'>
                  <img className='LogoLinkedin' src='./linkedin.png'></img>
                </a>
                <a href='https://wa.me/+5565999358060'>
                  <img className='WhatsApp' src='./whatsapp.png'></img>
                </a>
              </div>
            </div>
        </header>
        
        <div className='dApresentacao'>
          <h2> Sobre Mim</h2>
          <div className='dSobreMim'>
            <img className='Foto_Perfil' src='./FotoPessoal.jpeg' >
            </img>
            <p>
              Olá, Sou o Murilo Augusto, Desenvolvedor fullstack <br />
              Sou formado na área de Analise e Desenvolvimento de Sistemas
            </p>
          </div>
        </div>

        <div className='dConhecimentoContainer'>
          <h2> Conhecimentos</h2>
          <div className='dConhecimentos'>
            <div className='Container_Back'>
              <h3>Linguagens BackEnd</h3>
              <div className='dListaBackEnd'>
                <ul className='listaBackEnd'>
                  <li>Node.JS</li>
                  <li>C#</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
            <div className='Container_Front'>
              <h3>Linguagens BackEnd</h3>
              <div className='dlistaFrontEnd'>
                <ul className='listaFrontEnd'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>REACT</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */
    //#endregion