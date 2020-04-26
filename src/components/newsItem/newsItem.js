import React from 'react'
import './newsItem.css';
import {Link} from 'react-router-dom';

const NewsItem = ({items}) => {
    return (
        <div className="newsItemWrapper">
            {items.map((item, index) => (
                <div className="newsItem">
                    <Link to={item.link} className="newsItemLink">
                    <span className="newsItemTitle">{item.title}</span>
                    <span className="newsItemSubtitle">{item.subtitle}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
NewsItem.defaultProps = {
    items: []
};
export default NewsItem;