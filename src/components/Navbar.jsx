import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

function BasicExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="violet" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link onClick={handleShow}>Employee Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-overlay d-flex align-items-center justify-content-center">
          <div className="form-container">
            <h2>Enter Employee Details</h2>
            <form>
              <div className="form-group mb-2">
                <input  placeholder="Name" type="text" className="form-control" id="employee-id" />
              </div>
              <div className="form-group mb-2">
                <input className="mb-1" placeholder="Designation" type="text" className="form-control" id="employee-name" />
              </div>
              <div className="form-group mb-2">
                <input  placeholder="Location" type="text" className="form-control" id="employee-email" />
              </div>
              <div className="form-group mb-2">
                <input  placeholder="Salary" type="number" className="form-control" id="employee-email" />
              </div>
              <button  type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
          </div>
        </div>
        </Modal.Body>
      </Modal>
      
    </Navbar>
  );
}

export default BasicExample;








