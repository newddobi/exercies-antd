import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import RunnerTabs from "./features/RunnerTabs";
import SignIn from "./features/SignIn";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <RunnerTabs userObj={userObj} />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
