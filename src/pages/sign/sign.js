import './sign.css';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import '../../components/button/button.css';
import {slide as Menu} from 'react-burger-menu';
import '../../components/input-login.css';
import '../../components/input-password.css';

class sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Регистрация",
            email: '',
            password: ''
        };
        this.handleEmailChange = this
            .handleEmailChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handlePasswordChange = this
            .handlePasswordChange
            .bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited. value is', this.state.email, this.state.password);
    }
    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        console.log('pass was changed', event.target.value);
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div className="wrapper">

                {/* This NavBar for work sign and reg and refresh for Map */}

                <div>
                    <div className="header-bar">
                        <div className="header-bar_menu">
                            <Link to="/" className="header-bar_logo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
                            <a href="/maps">
                                <i className="fas fa-map"></i>
                                Карта
                            </a>
                            <Link to="/ways">
                                <i className="fas fa-bus"></i>
                                Маршруты
                            </Link>
                            <Link to="#">
                                <i className="far fa-newspaper"></i>
                                Новости
                            </Link>
                            <Link to="/reg" className="header-bar_button">
                                <i className="fas fa-sign-in-alt"></i>
                                {this.state.text}
                            </Link>
                        </div>
                    </div>

                    {/* Menu */}

                    <Menu className="menu">
                        <Link to="/reg" className="bm-item">
                            <i className="fas fa-sign-in-alt"></i>
                            {this.state.text}
                        </Link>
                        <a href="/maps">
                            <i className="fas fa-map"></i>
                            Карта
                        </a>
                        <Link to="/ways">
                            <i className="fas fa-bus"></i>
                            Маршруты
                        </Link>
                        <Link to="#">
                            <i className="far fa-newspaper"></i>
                            Новости
                        </Link>
                    </Menu>
                    <div className="header-title">
                        <Link to="/" className="header-title_logo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
                    </div>
                </div>

                {/* This page */}

                <div className="sign-wrapper">
                    <div className="sign">
                        <div className="sign-form">
                            <h2 className="sign-form_title">Вход</h2>
                            <p className="sign-form_subtitle">Используйте аккаунт SimpleWays</p>

                            {/* Form sign in */}

                            <form onSubmit={this.handleSubmit}>
                                <input pattern={["^.{8,}$", "(?=.*\\d)", "(?=.*[A-Z])"]} //no work
                                    className="login" type="login" name="login" placeholder="Введите адрес эл. почты" value={this.state.email} onChange={this.handleEmailChange}/>
                                <input
                                    className="password"
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}/>
                            </form>

                            <div className="sign-form_buttons">
                                <Link to="/reg" className="sign-form_add">
                                    Создать аккаунт
                                </Link>
                                <button onClick={this.handleSubmit} className="sign-button button">Вход</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default sign;
