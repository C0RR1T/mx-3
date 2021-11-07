import React from 'react';
import {Modal} from "react-bootstrap";
import {Band} from "./api/Band";

const BandInfo = ({band}: { band: Band }) => {
    return <Modal>
        <Modal.Header>
            <img src={band.image} alt={`Bild von der Band ${band.name}`}/>
        </Modal.Header>
        <Modal.Body>
            {
                band.biographies.find(
                    val => val.language_code.toLowerCase() === 'de'
                )?.description || band.biographies[0]?.description
                || <i>Keine Beschreibung</i>
            }
        </Modal.Body>
    </Modal>;
};

export default BandInfo;