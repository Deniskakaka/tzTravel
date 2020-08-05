import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Incoming from "../incoming/Incoming.jsx";
import Outgoing from "../outgoing/Outgoing.jsx";
import Deleted from "../deleted/Deleted.jsx";
import { get, change, create } from "../../redux/actionsMain.js";
import { incomingMessage, outcomingMessage, deletedMessages } from "../../redux/option.selector.js";
import Popap from "../popap/Popap.jsx";
import PropTypes from 'prop-types';
import "./mainPage.scss";

function MainPage({ get, messagesIncoming, messagesOutcoming, messagesDeleted, email, change, createMessage }) {

    const location = useLocation().pathname.slice(1);
    useEffect(() => {
        get()
    }, []);

    const [showPopap, setShowPopap] = useState(false);
    
    return (
        <section className="mainPage">
            <aside className="mainPage__saidBar">
                <button onClick={() => setShowPopap(true)}>
                    <img src="https://img.icons8.com/plasticine/100/000000/plus-math.png"></img>
                    Create Message
                </button>
                <Link
                    to={"/incoming"}
                    className={location === "incoming"
                        ? "mainPage__saidBar light" : "mainPage__saidBar"}>Incoming</Link>
                <Link
                    to={"/outgoing"}
                    className={location === "outgoing"
                        ? "mainPage__saidBar light" : "mainPage__saidBar"}>Outgoing</Link>
                <Link
                    to={"/deleted"}
                    className={location === "deleted"
                        ? "mainPage__saidBar light" : "mainPage__saidBar"}>Deleted</Link>
            </aside>
            <div className="mainPage-content">
                <Switch>
                    <Route path={"/incoming"}><Incoming messages={messagesIncoming} email={email} change={change} /></Route>
                    <Route path={"/outgoing"}><Outgoing messages={messagesOutcoming} email={email} change={change} /></Route>
                    <Route path={"/deleted"}><Deleted messages={messagesDeleted} email={email}></Deleted></Route>
                </Switch>
            </div>
            {showPopap ? <Popap createMessage={createMessage} email={email} closePopap={setShowPopap}></Popap> : ""}
        </section>
    )
};

const mapState = state => {
    return {
        messagesIncoming: incomingMessage(state),
        messagesOutcoming: outcomingMessage(state),
        messagesDeleted: deletedMessages(state),
        email: state.mainStore.emailUser,
    }
}

const mapDispatch = {
    get: get,
    change: change,
    createMessage: create
}

MainPage.propTypes = {
    messagesIncoming: PropTypes.array,
    messagesOutcoming: PropTypes.array,
    messagesDeleted: PropTypes.array,
}

export default connect(mapState, mapDispatch)(MainPage)