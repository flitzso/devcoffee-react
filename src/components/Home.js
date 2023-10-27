import React from 'react';
import '../components/css/Home.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
            <Nav.Link href="#link">Colaboradores</Nav.Link>
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
            <div className="col-md-3 mt-5 text-white custom-profile">
              <div className="d-flex justify-content-center mb-4">
                <img
                  className="rounded-circle"
                  src="https://img-a.udemycdn.com/course/240x135/2276761_b131_3.jpg?qWoVBZWqMDBC45PE1Z7vOc4LWAfwxZk0aYZirOc6MQ0K8x9dJc5Yw2pewn4wTs07RCusY3-Vpdju1UsD7aqU9r9pf-LJrCZb4v7J5f-8fVkNC12YFfGq5MdxLiYtfw"
                  alt="Profile"
                />
              </div>

              <div className="wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://i.imgur.com/X2oObC4.png" alt="" />
        </div>
        <div className="profile-body">
          <div className="author-img">
            <img src="https://i.imgur.com/4FbD7mF.png" alt="" />
          </div>
          <div className="name">Rafael Lima</div>
          <div className="intro">
            <div className="mb-3 mt-2" style={{ fontSize: '13px' }}>
              <strong>GitHub: </strong> RafaelLima99 <br />
              <strong>Linkedin: </strong> RafaelLima99 <br />
              <strong>Telefone: </strong> +55 (81) 9 94441288
            </div>
            <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-primary">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

