import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Fork } from '.';

const Header = ({ dark }) => (
  <header
    className={`header header-sticky ${
      dark ? 'header-minimal-dark' : 'header-minimal-light'
    }`}
  >
    <Fork />

    <Container>
      <Row noGutters>
        <Col>
          <Navbar
            bg={dark ? 'dark' : 'light'}
            variant={dark ? 'dark' : 'light'}
          >
            <Navbar.Brand>Awesom.earth</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contribute">Contribute</Nav.Link>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;