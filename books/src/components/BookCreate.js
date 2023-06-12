import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {

    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => { setTitle(event.target.value) };

    const handleSubmit = (event) => { 
        event.preventDefault();
        createBook(title);
        setTitle(''); //empty the input after submitting
    };

    return (
        <div className="book-create">
            <h3>Add a book to my reading list</h3>
            <form onSubmit={handleSubmit} >
                <label className="label">Title</label>
                <input className="input" type="text" placeholder="Text input" value={title} onChange={handleChange} />
                <button className="button">Create !!</button>
            </form>
        </div>
    );
}

export default BookCreate;