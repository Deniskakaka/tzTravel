import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import ReagistrationPage from "../components/registrationPage/ReagistrationPage.jsx";
import MainPage from "../components/mainPage/MainPage.jsx";

function App() {

    const [mainPage, setMainPage] = useState(false);

    return (
        <>
            <Switch>
                <Route exact render={() =>
                    mainPage ? <MainPage />
                        : <ReagistrationPage
                            path="/"
                            checkValidate={setMainPage}
                        />
                }></Route>
            </Switch>
        </>
    )
};

export default App;