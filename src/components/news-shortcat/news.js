import './news.css';
import React, { Component } from 'react';

export class news extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <h2 className="news-title">Новости</h2>
                <div className="news-block">
                    <p>Сергей Филоненко ЛОХ!</p>
                    <p>Сергей Филоненко ЛОХ!</p>
                    <p>Сергей Филоненко ЛОХ!</p>
                </div>
            </div>
        );
    }
}

export default news;
