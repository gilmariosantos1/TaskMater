import './login.css';

const Login: React.FC = () => {
  return (
    <div className="pagina-login">
      <header className="cabecalho-login">
        <div className="logo-cabecalho">Task<span>Master</span></div>
      </header>
      
      <main className="conteudo-login">
        <div className="container-login">
          <h1 className="logo">
            <span className="texto-preto">Task</span>
            <span className="texto-azul">Master</span>
          </h1>
          <p className="subtitulo-login">preencha os dados para acessar!</p>

          <form className="formulario-login">
            <div className="grupo-input">
              <label>E-mail</label>
              <input type="email" />
            </div>
            
            <div className="grupo-input">
              <label>Senha</label>
              <input type="password" />
            </div>

            <button type="button" className="botao-entrar">
              Entrar
            </button>
          </form>

          <p className="texto-rodape">
            Se voce não tem conta - <a href="#">Cadastre-se</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
