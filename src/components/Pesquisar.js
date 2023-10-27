import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pesquisar() {
  return (
    <div>
    <Navbar bg="body-tertiary" bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">Dev&Coffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Notificações</Nav.Link>
            <Nav.Link href="#link">OpenSource</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Pesquisar por devs" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5">
              <div>
                <form className="form-inline">
                  <div className="input-group mb-3" id="input-search">
                    <input type="text" className="form-control form-control-sm" placeholder="Pesquisar por devs" />
                    <div className="input-group-append">
                      <button className="btn btn-search btn-sm" type="button" id="button-addon2">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="button" className="btn btn-dark btn-sm" id="btn-filtro">
                    Filtro <i className="fa fa-caret-down pl-2" aria-hidden="true"></i>
                  </button>
                  <button type="button" className="btn btn-dark btn-sm" id="btn-filtro2">
                    Filtro <i className="fa fa-caret-up pl-2" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="row" id="filtro" style={{ color: 'white' }}>
                <div className="col-md-12 col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="blankRadio1">Estagiario</label>
                  </div>
                </div>
                <div className="col-md-12 col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="blankRadio2">Estagiario</label>
                  </div>
                </div>
                <div className="col-md-12 col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio3" value="option3" />
                    <label className="form-check-label" htmlFor="blankRadio3">Estagiario</label>
                  </div>
                </div>
                <div className="col-md-12 col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio4" value="option4" />
                    <label className="form-check-label" htmlFor="blankRadio4">Estagiario</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 mt-5">
              {/* Seu conteúdo aqui */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pesquisar;
