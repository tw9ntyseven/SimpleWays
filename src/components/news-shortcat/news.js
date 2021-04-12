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
                            link: '#',
                            title: "Microsoft хочет купить компанию-разработчика ИИ за $16 млрд долларов",
                            subtitle: "Американская корпорация Microsoft ведет переговоры о покупке компании Nuance Communications, занимающейся технологиями искусственного интеллекта и распознавания голоса, сообщил Bloomberg со ссылкой на источники. По информации агентства, сделка оценивается в $16 млрд.",
                        },
                        {
                            link: '#',
                            title: "Опубликованы первые изображения конкурента Tesla Semi от Geely",
                            subtitle: "Китайская компания Geely планирует запустить электрический дальнемагистральный тягач, ключевым конкурентом которого станет Tesla Semi. Журналист Грег Кейбл опубликовал первые снимки новинки в своём твиттере. Сообщается, что они были взяты у одного из поставщиков Geely.",
                        },
                        //  {
                        //      link: '/ways',
                        //      title: "Маршруты города Симферополя",
                        //      subtitle: "Узнайте больше о маршрутах города Симферополя, а также изучайте путь движения полюбившегося транспорта.",
                        //  },
                ]}
                 />
                </div>
            </div>
        );
    }
}

export default newsShortcat;
