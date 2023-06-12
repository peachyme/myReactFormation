import { useContext } from 'react';
import BooksContext from '../context/BookContext';

function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;