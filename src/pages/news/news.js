import React, { Component } from 'react';
import './news.css';

import HeadBar from '../../components/header-bar/header-bar';
import NewsItem from '../../components/newsItem/newsItem';
import Footer from '../../components/footer/footer';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: '',
        }
        this.handleNews = this
        .handleNews
        .bind(this);
        this.handleSubmit = this
        .handleSubmit
        .bind(this);
}
handleSubmit(event) {
    event.preventDefault();
    console.log('form is submited. value is', this.state.numWay);
}
handleNews(event) {
    console.log('news was changed', event.target.value);
    this.setState({news: event.target.value});
}
    render(){
        return(
            <div className="wrapperNews">
                <HeadBar />
                <div className="content">
                    <h1 className="newsTitle">Новости</h1>
                    <div className="searchNews">
                        <form onSubmit={this.handleSubmit}>
                                <input
                                className="login newsInput"
                                placeholder="Поиск Новостей"
                                value={this.state.news}
                                onChange={this.handleNews}/>
                                <button className="ways-button newsButton"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
             <div className="contentNews">
                 <div className="wrapperContentNews">
                     <NewsItem
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
                        {
                            link: '#',
                            title: "В NASA перенесли первый полёт вертолёта на Марсе",
                            subtitle: "Первый испытательный полет беспилотного вертолета Ingenuity на Марсе, который должен был состояться 11 апреля, перенесли. Об этом сообщила пресс-служба NASA. В пресс-службе подчеркнули, что летательный аппарат полностью исправен. Перенос связан со сбоем, который привел к досрочному завершению попытки раскрутить винты дрона до больших скоростей, в настоящее время специалисты выясняют причины инцидента.",
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
        </div>
        );
    }
 }
 export default News;