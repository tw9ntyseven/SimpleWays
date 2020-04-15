import React, {Component} from 'react';
import './maps.css';
import HeadBar from '../../components/header-bar/header-bar';

import Footer from '../../components/footer/footer';

class Maps extends Component {
    render() {
        return (
            <div>
                <HeadBar/>
                <div
                    id="map"
                    style={{
                    width: "100%",
                    height: "95vh",
                    paddingTop: "50px"
                }}></div>
                <Footer />
            </div>
        );
    }
}

export default Maps;
