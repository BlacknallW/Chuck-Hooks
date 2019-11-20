import React, { useState, useEffect } from "react";
import { loadData } from "../utils/loadData";

const Quote = (props) =>{
    const [quotes, setQuotes] = useState('')
    const [category, setCategories] = useState([]);
   


    useEffect ( () => {
        const category = props.match.params.quote_category;

        setCategories(category)

        renderQuote(category);
    },[props.match.params.quote_category])

    const renderQuote = async category => {
        const response = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = response.value;

        setQuotes(quote)
    };

    const refreshQuote = () => {
        renderQuote(category);
    };
        return (
            <>
                <p>{quotes}</p>
                <button onClick={refreshQuote}>
                    Get another quote from the {category} category
                </button>
            </>
        );
    }

export default Quote;
