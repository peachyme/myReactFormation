import 'bulma/css/bulma.css';
import { useState } from "react";

function SearchBar({ onSubmit }){

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => { 
        event.preventDefault(); //to stop the browser from reloading the page and sending a request with wtv is in the input
        
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div className="container pt-5">
            <form onSubmit={handleFormSubmit} >
                <label class="label">Search an image</label>
                <input className="input is-rounded" type="text" value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;