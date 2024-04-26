import '../components/produtos/Produtos.tsx'
import './App.css'
import Produtos from '../components/produtos/Produtos.tsx'

function App() {


  return (
    <>
      <div className='conteudoprincipal'>
                <header>
                    <div className="cabecalho">
                        <div className="conteudocabecalho">
                            <div className="espaçologo">
                                <div className="logoemsi">
                                    <a href="../html/index.html" title="NightGames - Into your Dreams!">
                                        <img src="../res/0cab12555e.webp"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="separa_os_dois_doidos"></div>
                            <div className="espaçopesquisa">
                                <div className="pesquisaemsi">
                                    <form id="form-busca" action="/busca" method="get">
                                        <input id="auto-complete" type="text" name="p" placeholder="Digite o que você procura" autoComplete="off" className="ui-autocomplete-input"></input>
                                        <button className="botao botaobusca iconepesquisa" aria-label="busca">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="separa_os_dois_doidos2"></div>
                            <div className="espaçoconta">
                                <div className="minhaconta">
                                    <a href="...">Minha Conta</a>
                                    <ul className="barraconta">
                                        <li className="meuspedidos">
                                            <a href="...">Meus Pedidos</a>
                                        </li>
                                        <li className="faleconosco">
                                            <a href="...">Fale Conosco</a>
                                        </li>
                                        <div></div>
                                        <li className="entrar">
                                            <a href="...">Entrar</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="separa_os_dois_doidos3"></div>
                            <div className="espaçocarrinho_de_compras">
                                <div className="carrinhocompras">
                                    <a href="...">
                                        <img src="../res/shopping-cart_icon-icons.com_72552.svg"></img>
                                        {/* <span className="titulo" style="display: block;" >Carrinho vazio</span> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="conteudocabecalhodireito">
                            <div className="tituloplatafor"> 
                                <span> Procure sua plataforma para achar seus acessorios, consoles e jogos. </span>
                            </div>
                                    <div className="seleçãoplataformaeafins">
                                        <ul className="listaitens">
                                            <li className="categoriaPlatPlaystation PRINC">
                                                <a href="...">
                                                    <strong className="titulo cor-secundaria">Playstation</strong>
                                                </a>
                                                <ul className="categoriaPlatPlaystationParteBaixo">
                                                    <li className="PSONE mudança">
                                                        <a href="..." title="PLAY1">
                                                            PS1 
                                                        </a>
                                                    </li>
                                                    <li className="PS2 mudança">
                                                        <a href="..." title="PLAY2">
                                                            PS2 
                                                        </a>
                                                    </li>
                                                    <li className="PS3 mudança">
                                                        <a href="..." title="PLAY3">
                                                            PS3 
                                                        </a>
                                                    </li>
                                                    <li className="PS4 mudança">
                                                        <a href="..." title="PLAY4">
                                                            PS4 
                                                        </a>
                                                    </li>
                                                    <li className="PS5 mudança">
                                                        <a href="..." title="PLAY5">
                                                            PS5 
                                                        </a>
                                                    </li>
                                                    <li className="PSPortable mudança">
                                                        <a href="..." title="PLAYPortable">
                                                            PSP 
                                                        </a>
                                                    </li>
                                                    <li className="PSVita mudança">
                                                        <a href="..." title="PLAYVita">
                                                            PSVITA 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="categoriaPlatXbox PRINC">
                                                <a href="...">
                                                    <strong>Xbox</strong>
                                                </a>
                                                <ul className="categoriaPlatXboxParteBaixo">
                                                    <li className="XBOXclassNameic mudança">
                                                        <a href="..." title="XboxclassNameic">
                                                            XBOXclassNameic 
                                                        </a>
                                                    </li>
                                                    <li className="XBOX360 mudança">
                                                        <a href="..." title="Xbox360">
                                                            XBOX 360 
                                                        </a>
                                                    </li>
                                                    <li className="XBOXOne mudança">
                                                        <a href="..." title="Xboxone">
                                                            XBOX ONE 
                                                        </a>
                                                    </li>
                                                    <li className="XBOXSeriesS&X mudança">
                                                        <a href="..." title="Xboxseriess&x">
                                                            XBOXSERIESS&X 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="categoriaPlatNintendo PRINC">
                                                <a href="...">
                                                    <strong>Nintendo</strong>
                                                </a>
                                                <ul className="categoriaPlatNintendoParteBaixo">
                                                    <li className="NES mudança">
                                                        <a href="..." title="Nes">
                                                            NES 
                                                        </a>
                                                    </li>
                                                    <li className="SNES mudança">
                                                        <a href="..." title="Snes">
                                                            SNES 
                                                        </a>
                                                    </li>
                                                    <li className="N64 mudança">
                                                        <a href="..." title="n64">
                                                            N64 
                                                        </a>
                                                    </li>
                                                    <li className="GameCube mudança">
                                                        <a href="..." title="Gamecube">
                                                            GameCube 
                                                        </a>
                                                    </li>
                                                    <li className="Wii mudança">
                                                        <a href="..." title="WII">
                                                            WII 
                                                        </a>
                                                    </li>
                                                    <li className="WiiU mudança">
                                                        <a href="..." title="WIIU">
                                                            WIIU 
                                                        </a>
                                                    </li>
                                                    <li className="Switch mudança">
                                                        <a href="..." title="SWITCH">
                                                            SWITCH 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                        </div>
                        <span id="delimitador"></span>
                    </div>
                </header>
                <main>
                    <div id="corpo">
                        <div className="conteudocorpo">
                            <div id="listagemProd">
                                <div className="nomesessãoprincipalnovos">
                                    <strong>Novos na Loja</strong>
                                </div>
                                <Produtos>

                                </Produtos>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    {/* <!-- Aqui vamos adicionar o rodapé da página --> */}
                    <div className="conteudogrid">
                        <section className="listafooter">
                            <nav className="footer-navigation grid">
                                <ul>
                                    <li>
                                        <a target="_blank" className="naveg" rel="naoabre naoreferente" href="...">Suporte</a>
                                    </li>
                                    <li>
                                        <a target="_blank" className="naveg" rel="naoabre naoreferente" href="...">Blog</a>
                                    </li>
                                    <li>
                                        <a target="_blank" className="naveg" rel="naoabre naoreferente" href="...">Sobre</a>
                                    </li>
                                    <li>
                                        <a target="_blank" className="naveg" rel="naoabre naoreferente" href="...">Carreiras</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="footerlinhaseparadora"></div>
                        </section>
                        <section className="listafooter">
                            <nav className="footerredes">
                                <h4 className="footertitulo">Acompanhe-nos</h4>
                                <ul>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Youtube
                                        </a>
                                    </li>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Twitch
                                        </a>
                                    </li>
                                    <li className="gridsocial">
                                        <a href="..." target="_blank" className="botaosocial" rel="naoabre naoreferente">
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        <section className="listafooter">
                            <div className="footerlinhaseparadora2"> </div>
                            <div className="logofooter">
                                <a className="logo" data-text-powered="powered by" href="...">
                                    <img src="../res/logo-nightg-contrast-qIRTtaE5.webp"></img>
                                </a>
                                <small>© 2011 - 2024</small>
                            </div>
                            <nav className="legalfooter">
                                <ul>
                                    <li>
                                        <a href="...">Termos de Uso</a>
                                    </li>
                                    <li>
                                        <a href="...">Politica de Privacidade</a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </footer>
            </div>
    </>
  )
}

export default App
