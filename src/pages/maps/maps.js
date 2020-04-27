import React, {Component} from 'react';
import './maps.css';
import HeadBar from '../../components/header-bar/header-bar';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Footer from '../../components/footer/footer';

const mapData = {
    center: [
        44.948314, 34.100156
    ],
    zoom: 12
};
const antIcon = <LoadingOutlined style={{ fontSize: 64, color: "#2039b3", display: "flex", justifyContent: "center", alignItems: "center" }} spin />;

class Maps extends Component {
    state = {
        loaded: false,
    }
    onMapLoaded = () => {
        this.setState({ loaded : true });
    }
    render() {
        const {loaded} = this.state;
        return (
            <div>
                <HeadBar/>
                <div style={{display: "block", width: "100%", height: "95vh", marginTop: "50px"}}>
                { !loaded &&  <YMaps query={{apikey: '1c80c4b3-7cec-4d86-8f33-0c2061e5f814'}} onLoad={this.onMapLoaded}>
                    <Map defaultState={mapData} style={{width: "100%", height: "95vh", marginTop: "50px"}}>
                    </Map>
                    <Spin indicator={antIcon} />
                </YMaps>}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Maps;
