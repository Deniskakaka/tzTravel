import React from "react";
import { connect } from 'react-redux';
import { check } from "../../generalFunction.js";
import { Link } from 'react-router-dom';
import { getEmail } from "../../redux/actionsMain.js";
import "./registrationPage.scss";

class ReagistrationPage extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            wrongPassword: false,
            wrongValueEmail: false
        }
    }

    Submit(e) {
        e.preventDefault();
    }

    handelEmailChanche = (event) => {
        this.setState({ email: event.target.value })
    }

    handelPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    changeWrongPassword = () => {
        this.setState({
            wrongPassword: true
        })
    }

    changeWrongEmail = () => {
        this.setState({
            wrongValueEmail: true
        })
    }

    render() {
        
        return (
            <form onSubmit={this.Submit} className="formAuthorization">
                <img
                    className="formAuthorization__image"
                    src="https://dostav.im/wp-content/uploads/2018/06/back5.jpg"
                />
                <label
                    className="formAuthorization__mail"
                    onFocus={() => this.setState({ wrongValueEmail: false })}
                >
                    <span>Email</span>
                    <input
                        type="mail"
                        value={this.state.email}
                        onChange={this.handelEmailChanche}
                    />
                    {this.state.wrongValueEmail
                        ? <p className="formAuthorization__mail-wrong">{"Incorrect email value"}</p>
                        : ""}
                </label>
                <label
                    className="formAuthorization__password"
                    onFocus={() => this.setState({ wrongPassword: false })}
                >
                    <span>Password</span>
                    <input
                        type="password"
                        className="formAuthorization__password-"
                        value={this.state.password}
                        onChange={this.handelPasswordChange}
                    />
                    {this.state.wrongPassword
                        ? <p className="formAuthorization__password-wrong">{"Wrong password"}</p>
                        : ""}
                </label>
                <Link to={"/incoming"}><button
                    type="submit"
                    className="formAuthorization__send"
                    onClick={() => check(
                        this.props.checkValidate,
                        this.props.mainPage,
                        this.props.users,
                        this.state.email,
                        this.state.password,
                        this.changeWrongPassword,
                        this.changeWrongEmail,
                        this.props.getEmailUser)}>
                    Authorization
                </button></Link>
            </form>
        )
    }
}

const mapState = state => {
    return {
        users: state.mainStore.users
    }
}

const mapDispatch = {
    getEmailUser: getEmail,
}

export default connect(mapState, mapDispatch)(ReagistrationPage)