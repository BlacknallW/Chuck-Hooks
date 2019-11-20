    import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";
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
                <Route path="/" exact component={CategoryList} />
                <Route path="/category/:quote_category?" component={Quote} />
            </Router>
        </div>
    );
}

export default App;
