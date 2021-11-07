import React from 'react';
import {Container, ModalBody, ModalTitle} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <ModalTitle>Home</ModalTitle>
            <ModalBody>
                Willkommen auf der Seite von MX-3. Auf dieser Seite können Sie die nicht so bekannten Künstler der Schweiz entdecken.
                <br/>
                Wir wünschen Ihnen einen schönen Aufenthalt.
            </ModalBody>
        </Container>
    );
};

export default Home;