import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

import { HiOutlineUserAdd } from 'react-icons/hi'

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>
              <HiOutlineUserAdd
                color="#ff6600"
                size="100px"
              />
              React Bootstrap
            </h1>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
