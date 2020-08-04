import React from "react";

function Outgoing({ messages, email, change }) {

    return (
        <div className="OutgoingMessages">
            {messages.filter(elem => elem.email === email).map(elem => {
                return <div className="message" key={Math.random()}>
                    <p>{elem.whom}</p>
                    <p>{elem.text}</p>
                    <button onClick={() => change(elem.id, elem)} className="message__button">
                        <img src="https://img.icons8.com/office/16/000000/delete-sign.png" />
                    </button>
                </div>
            })}
        </div>
    )
};

export default Outgoing;