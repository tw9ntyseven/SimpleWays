import './news.css';
import React, { Component } from 'react';

import NewsItem from '../newsItem/newsItem';

export class newsShortcat extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <h2 className="news-title">Новости</h2>
                <div className="news-block">
                <NewsItem className="newsBlockItems"
                items={[
                         {
                             link: '/corona',
                             title: "Главное о COVID-19",
                             subtitle: "Единая горячая линия:8-800-2000-112 Основные меры предосторожности для защиты от новой коронавирусной инфекции:",
                         },
                         {
                             link: '/ways',
                             title: "Маршруты города Симферополя",
                             subtitle: "Узнайте больше о маршрутах города Симферополя, а также изучайте путь движения полюбившегося транспорта.",
                         },
                ]}
                 />
                </div>
            </div>
        );
    }
}

export default newsShortcat;
