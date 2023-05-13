import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import './style.css';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div  style={{ backgroundColor: 'yellow' }}>
      <Container >
        <h1 className="text-center">Employee Dashboard</h1>
        <Row className="justify-content-center flex-wrap ">
          {users.map((user) => (
            <Col key={user.id} md={4} className="mb-4">
              <Card className="card custom-bg" style={{ width: "19rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>ID:{user.id}</ListGroup.Item>
                  <ListGroup.Item>Name:{user.name}</ListGroup.Item>
                  <ListGroup.Item>Email-Id:{user.email}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;




