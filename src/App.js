    import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";

import "bulma/css/bulma.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Chuck Norris Reacts!!!</h1>
            </header>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Wrapper>
                    <Route path="/" exact component={CategoryList} />
                    <Route
                        path="/category/:quote_category?"
                        component={Quote}
                    />
                </Wrapper>
            </Router>
        </div>
    );
}

export default App;
