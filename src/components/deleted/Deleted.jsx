import React from "react";

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

export default Deleted;