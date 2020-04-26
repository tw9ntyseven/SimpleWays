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
                             link: '/ways',
                             title: "Маршруты города Симферополя",
                             subtitle: "Узнайте больше о маршрутах города Симферополя, а также изучайте путь движения полюбившегося транспорта.",
                         },
                     ]}
                     />
                 </div>
             </div>
        </div>
        );
    }
 }
 export default News;