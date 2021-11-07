import React from 'react';
import { Band } from './api/Band';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BandDisplay = ({ band, onInfo }: { band: Band, onInfo: () => void }) => {
    const history = useHistory();
    return (
        <Card style={{ width: '20rem', maxHeight: '50rem' }}>
            <Card.Img
                src={band.url_for_image_thumb}
                alt={`Bild von ${band.name}`}
                variant={'top'}
                style={{ height: '10rem', objectFit: 'contain' }}
            />
            <Card.Body>
                <Card.Title>{band.name}</Card.Title>
                <Card.Body>
                    {formatDescription(
                        band.biographies.find(
                            val => val.language_code.toLowerCase() === 'de'
                        )?.description || band.biographies[0]?.description
                    ) || <i>Keine Beschreibung</i>}
                </Card.Body>
            </Card.Body>
            <Card.Footer>
                <Button onClick={onInfo}>
                    Mehr Infos anzeigen
                </Button>
            </Card.Footer>
        </Card>
    );
};

const formatDescription = (description?: string): string | undefined =>
    description
        ? description.length > 25
            ? description.substr(0, 23) + '...'
            : description
        : description;

export default BandDisplay;
