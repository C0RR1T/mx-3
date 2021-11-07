import React, {useRef} from 'react';
import {Button, Col, FormControl, Nav, Navbar, Row, Form} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

const AppNavbar = () => {
    const input = useRef<HTMLInputElement>(null);
    const history = useHistory();

    return (
        <Navbar>
            <Navbar.Brand>MX-3</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Link className={'nav-link'} to={'/'}>
                        Home
                    </Link>
                </Nav>
                <Nav>
                    <Form onSubmit={(e) => {
                        history.push(
                            `/search?query=${encodeURI(
                                input?.current?.value!
                            )}`
                        )
                        e.preventDefault();
                    }}>

                        <Row>
                            <Col>
                                <FormControl
                                    ref={input}
                                    placeholder={'Nach Band suchen'}
                                />
                            </Col>
                            <Col>
                                <Button
                                    type={'submit'} variant={'primary'}>
                                    Band suchen
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
