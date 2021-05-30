import React, { useState } from "react";
import AppRouter from './AppRouter';

const App = () => {
    const [userObj, setUserObj] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
            </header>
        </div>
    );
}

export default App;
