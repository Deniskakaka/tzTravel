import React, { useState } from "react";
import "./popap.scss";

function Popap({ get, email, closePopap, createMessage }) {

    const [whom, setWhom] = useState("");
    const [text, setText] = useState("");

    function onsubmit(event) {
        event.preventDefault()
        closePopap(false)
    }

    function onChangeWhom(event) {
        setWhom(event.target.value)
    }

    function onChangeText(event) {
        setText(event.target.value)
    }

    return (
        <form className="popap" onSubmit={onsubmit}>
            <input type="text" value={whom} onChange={onChangeWhom} placeholder="Whom" className="popap__whom" />
            <textarea placeholder="Text" cols="59" rows="20" value={text} onChange={onChangeText} className="popap__text" />
            <div className="popap-buttons">
                <button
                    type="submit"
                    className="popap__submit"
                    onClick={() => createMessage({ "whom": whom, "text": text, "status": "outcoming", "email": email })}
                >Submit
                </button>
                <button className="popap__cancel" onClick={() => closePopap(false)}>Cancel</button>
            </div>
        </form>
    )
};


export default Popap