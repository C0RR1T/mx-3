import React, { useRef } from 'react';
import { Button, Col, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const AppNavbar = () => {
    const input = useRef<HTMLInputElement>(null);
    const history = useHistory();

    return (
        <Navbar expand={'lg'}>
            <Navbar.Brand>MX-3</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Link className={'nav-link'} to={'/'}>
                        Home
                    </Link>
                    <Link to={'/popular-bands'} className={'nav-link'}>
                        Popular Bands
                    </Link>
                </Nav>
                <Nav>
                    <Row>
                        <Col>
                            <FormControl
                                ref={input}
                                placeholder={'Nach Band suchen'}
                            />
                        </Col>
                        <Col>
                            <Button
                                onClick={() =>
                                    history.push(
                                        `/search?query=${encodeURI(
                                            input?.current?.value!
                                        )}`
                                    )
                                }>
                                Band suchen
                            </Button>
                        </Col>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
