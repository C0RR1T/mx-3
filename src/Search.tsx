import React, {useEffect, useState} from 'react';
import axios from './AxiosInstance';
import {Band} from './api/Band';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import BandDisplay from './BandDisplay';
import {useLocation} from 'react-router-dom';
import cancel from 'axios';
import BandInfo from "./BandInfo";

const Search = () => {
    const [bands, setBands] = useState<Array<Band>>([]);
    const [band, setBand] = useState<Band>();
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        const source = cancel.CancelToken.source();
        axios
            .get<{
                response: {
                    bands: Array<Band>;
                };
            }>(`/bands?query=${query}`, {
                cancelToken: source.token,
            })
            .then(r => setBands(r.data.response.bands))
            .finally(() => setIsLoading(false));

        return () => source.cancel('Operation canceled');
    }, [location]);

    return !isLoading ? (
        <Container>
            <BandInfo band={band} onClose={() => setBand(undefined)}/>
            <Row xs={1} md={2} lg={3} xl={5} className={'g-3'} aria-live={'polite'}>
                {
                    bands.map((val) =>
                        <Col className={'mr-5'}>
                            <BandDisplay band={val} onInfo={() => setBand(val)}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    ) : (
        <Container
            className={'d-flex align-items-center justify-content-center'}>
            <Spinner animation={'border'}/>
        </Container>
    );
};

function arrayToChunks<T>(size: number, arr: Array<T>): Array<Array<T>> {
    const newArr: Array<Array<T>> = [[]];
    arr.forEach(val => {
        if (newArr[newArr.length - 1].length < size)
            newArr[newArr.length - 1].push(val);
        else newArr.push([val]);
    });
    console.log(newArr);
    return newArr;
}

export default Search;
