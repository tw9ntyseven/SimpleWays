import React from 'react';
import './App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {BrowserRouter as Router, Route, HashRouter, Switch, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import HeadBar from './components/header-bar/header-bar';
import Sign from './pages/sign/sign';
import Reg from './pages/reg/reg';
import ways from './pages/ways/ways';
import Maps from './pages/maps/maps';
import News from './components/news-shortcat/news';
import Corona from './pages/corona/corona';

function Home() {
    return (
        <div>
            <HeadBar/>
            <div className="wrapper">
                <div className="wrapper-slideshow">
                    <Tabs>
                        <TabPanel className="slideshow">
                                <div className="slide">
                                    <i className="far fa-map icon-map"></i>
                                    <div className="slide-text">
                                        <span className="slide-title">Карта</span>
                                        <p className="slide-subtitle">Карта для просмотра маршрутов по Крыму</p>
                                        <div className="cards">
                                            <div className="card">
                                            <i class="fas fa-map-signs icon"></i>
                                            <a href="/maps" className="cardTitle">Просмотр заведений поблизости</a>
                                            </div>
                                            <div className="card">
                                            <i class="fas fa-road icon"></i>
                                                <a href="/maps" className="cardTitle">Актуальное отображение пробок</a>
                                            </div>
                                            <div className="card">
                                            <i class="fas fa-street-view icon"></i>
                                            <a href="/maps" className="cardTitle">Изучайте панорманый вид дорог</a>
                                            </div>
                                        </div>
                                        <a href="/maps" className="slide-route">перейти к карте &#10095;</a>
                                    </div>
                                </div>
                        </TabPanel>

                        <TabPanel>
                                <div className="slide-wrapper">
                                    <div className="slide">
                                        <i className="fas fa-bus icon-map"></i>
                                        <div className="slide-text">
                                            <span className="slide-title">Маршруты</span>
                                            <p className="slide-subtitle">Маршруты Крыма в одном месте</p>
                                            <div className="cards">
                                            <div className="card">
                                            <i class="fas fa-bus-alt icon"></i>
                                            <Link to="/ways" className="cardTitle">Поиск по номерам маршрутов</Link>
                                            </div>
                                            <div className="card">
                                            <i class="far fa-building icon"></i>
                                            <Link to="/ways" className="cardTitle">Поиск маршрутов по адресу</Link>
                                            </div>
                                            <div className="card">
                                            <i class="fas fa-info-circle icon"></i>
                                            <Link to="/ways" className="cardTitle">Изучайте маршруты города</Link>
                                            </div>
                                        </div>
                                            <Link to="/ways" className="slide-route">перейти к маршрутам &#10095;</Link>
                                        </div>
                                    </div>
                                </div>
                        </TabPanel>

                        <TabPanel>
                                <div className="slide">
                                    <i className="far fa-newspaper icon-map"></i>
                                    <div className="slide-text">
                                        <span className="slide-title">Новости</span>
                                        <p className="slide-subtitle">Актуальные новости Крымкой республики</p>
                                        <Link to="#" className="slide-route">перейти к новостям &#10095;</Link>
                                    </div>
                                </div>
                        </TabPanel>

                        <TabList className="tablist">
                            <Tab className="tablist_item">
                                <i className="far fa-map"></i>
                            </Tab>
                            <Tab className="tablist_item">
                                <i className="fas fa-bus"></i>
                            </Tab>
                            <Tab className="tablist_item">
                                <i className="far fa-newspaper"></i>
                            </Tab>
                        </TabList>
                    </Tabs>
                </div>

                <News/>

            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Switch history={HashRouter}>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/sign" exact={true} component={Sign}/>
                <Route path="/reg" exact={true} component={Reg}/>
                <Route path="/ways" exact={true} component={ways}/>
                <Route path="/maps" exact={true} component={Maps}/>
                <Route path="/corona" exact={true} component={Corona}/>
            </Switch>
        </Router>
    );
}

export default App;
