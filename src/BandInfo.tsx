import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {Band} from "./api/Band";

const BandInfo = ({band, onClose}: { band?: Band , onClose: () => void}) => {
    return <Modal show={!!band}>
        <Modal.Header>
            <img src={band?.url_for_image_original} height={200} alt={`Bild von der Band ${band?.name}`}/>
        </Modal.Header>
        <Modal.Body>
            {
                band?.biographies.find(
                    val => val.language_code.toLowerCase() === 'de'
                )?.description || band?.biographies[0]?.description
                || <i>Keine Beschreibung</i>
            }
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'danger'} onClick={onClose}>Schliessen</Button>
        </Modal.Footer>
    </Modal>;
};

export default BandInfo;