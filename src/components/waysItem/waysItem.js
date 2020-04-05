import React from 'react'
import './waysItem.css';
import {Button} from 'antd';

const WaysItem = ({items}) => {
    return (
        <div className="waysItemWrapper">
            {items.map((item, index) => (
                <div className="waysItem">
                    <div>
                    <span className="waysItemNumber">{item.number}</span>
                    <span className="waysItemTitle">{item.title}</span>
                    </div>
                    <div className="waysItemBtnBlock">
                        <button className="waysItemBtnMap">Маршрут на карте</button>
                        <button className="waysItemBtnList waysItemBtnMap">Список остановок</button>
                        {/* admin? */}
                        {/* <Button danger>Delete</Button> */}
                    </div>
                </div>
            ))}
        </div>
    );
}
WaysItem.defaultProps = {
    items: []
};
export default WaysItem;