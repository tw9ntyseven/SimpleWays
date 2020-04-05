import React, {Component} from 'react';
import './maps.css';
import HeadBar from '../../components/header-bar/header-bar';

class Maps extends Component {
    render() {
        return (
            <div>
                <HeadBar/>
                <div
                    id="map"
                    style={{
                    width: "100%",
                    height: "100vh",
                    paddingTop: "50px"
                }}></div>
            </div>
        );
    }
}

export default Maps;
