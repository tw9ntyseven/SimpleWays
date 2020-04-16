import React, {Component} from 'react';
import './maps.css';
import HeadBar from '../../components/header-bar/header-bar';
import {YMaps, Map, Placemark} from "react-yandex-maps";

import Footer from '../../components/footer/footer';
const mapData = {
    center: [
        44.948314, 34.100156
    ],
    zoom: 12
};

class Maps extends Component {
    render() {
        return (
            <div>
                <HeadBar/>
                <div style={{display: "block", width: "100%", height: "95vh", marginTop: "50px"}}>
                <YMaps
                     query={{
                     apikey: '1c80c4b3-7cec-4d86-8f33-0c2061e5f814',
                    }}>
                    <Map defaultState={mapData}
                     style={{width: "100%", height: "95vh", marginTop: "50px"}}
                     >
                    </Map> 
                </YMaps>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Maps;
