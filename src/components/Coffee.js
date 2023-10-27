import React from 'react';
import '../components/css/Coffee.css';
import { Link } from 'react-router-dom';

function Coffee() {
  return (
    <div>
      <div className="header">
        <div className="logo-ladding-page">
          {/* Conteúdo do logo */}
        </div>
        <h4>&lt;/CODE COFFEE&gt;</h4>
      </div>
      <div className="main-ladding-page justify-content-center">
        <div className="text-home-ladding-page text-center">
          {/* Conteúdo do texto da página */}
        </div>
        <div className="text-center justify-content-center container-form">
          <form id="form-login" className="login-form" action="" method="post">
            <input className="form-control" type="text" name="usuario" placeholder="Usuario" autoComplete="off" />
            <br />
            <input className="form-control" id="senha" type="password" name="senha" placeholder="Senha" autoComplete="new-password" />
            <br />
            <input type="checkbox" id="mostrarsenha" /><span>Mostrar senha</span>
            <br />
            <input className="btn btn-primary custom-button" type="submit" value="Entrar" />
            <div>
              Ainda não se cadastrou? <Link to="/cadastro" className="blue-text">Clique aqui!</Link>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className="footer-ladding-page text-center">
        <h4>&lt;/CODE COFFEE&gt;</h4>
          &copy; Todos os direitos reservados 2020
        </div>
      </footer>
    </div>
  );
}

export default Coffee;
