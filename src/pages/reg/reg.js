import React, {Component} from 'react';
import './reg.css';
import HeadBar from '../../components/header-bar/header-bar';

class reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            accPass: ''
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
        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.handleSurnameChange = this
            .handleSurnameChange
            .bind(this);
        this.handleaccPassChange = this
            .handleaccPassChange
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
    handleNameChange(event) {
        console.log('name was changed', event.target.value);
        this.setState({name: event.target.value});
    }
    handleSurnameChange(event) {
        console.log('surname was changed', event.target.value);
        this.setState({surname: event.target.value});
    }
    handleaccPassChange(event) {
        console.log('accPass was changed', event.target.value);
        this.setState({accPass: event.target.value});
    }
    render() {
        return (
            <div className="wrapper">
                <HeadBar/>
                <div className="reg-wrapper">
                    <div className="reg">
                        <div className="reg-form">
                            <h2 className="reg-form_title">Регистрация</h2>
                            <p className="reg-form_subtitle">Создайте аккаунт SimpleWays</p>

                            {/* Form for registration */}

                            <form onSubmit={this.handleSubmit}>
                                <input
                                    className="login"
                                    type="name"
                                    name="name"
                                    placeholder="Имя"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}/>
                                <input
                                    className="login"
                                    type="surname"
                                    name="surname"
                                    placeholder="Фамилия"
                                    value={this.state.surname}
                                    onChange={this.handleSurnameChange}/>
                                <input
                                    className="login"
                                    type="login"
                                    name="login"
                                    placeholder="Введите адрес эл. почты"
                                    value={this.state.Regemail}
                                    onChange={this.handleEmailChange}/>
                                <input
                                    className="password"
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value={this.state.Regpassword}
                                    onChange={this.handlePasswordChange}/>
                                <input
                                    className="password"
                                    type="password"
                                    name="acc-pass"
                                    placeholder="Подтвердите пароль"
                                    value={this.state.accPass}
                                    onChange={this.handleaccPassChange}/>
                            </form>
                            <button onClick={this.handleSubmit} className="button-reg">Зарегестрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reg;
