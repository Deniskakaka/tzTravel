import React from "react";
import PropTypes from 'prop-types';

function Deleted({ messages, email }) {
    return (
        <div className="deletedMessages">
            {messages.filter(elem => elem.email === email).map(elem => {
                return <div className="message" key={Math.random()}>
                    <p>{elem.whom}</p>
                    <p>{elem.text}</p>
                </div>
            })}
        </div>
    )
}

Deleted.propTypes = {
    messages: PropTypes.array,
    email: PropTypes.string
}

export default Deleted;