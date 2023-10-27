import React from 'react';
import '../components/css/Coffee.css';

function Cadastro() {
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
        <form action="" method="post" className="login-form" id="form-cadastro">
          <input className="form-control" type="text" placeholder="Nome" />
          <br />
          <input className="form-control" type="text" name="" id="" placeholder="Sobrenome" />
          <br />
          <input className="form-control" type="text" placeholder="E-mail" />
          <br />
          <input className="form-control" id="senha" type="password" placeholder="Senha" />
          <br />
          <input className="form-control" id="confirmarsenha" type="password" placeholder="Confirmar senha" />
          <br />
          <input type="checkbox" id="mostrarsenha" /><span>Mostrar senha</span>
          <br />
          <input className="btn btn-primary custom-button" type="submit" value="Enviar" />
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

export default Cadastro;
