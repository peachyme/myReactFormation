import 'bulma/css/bulma.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term); // we use await so that it reruns an array, cuz if we dont it return a promis object which means we're executing the consolg.log early then we wait for the results

        setImages(result);
    }

    return (
        <div className='container'>
            <SearchBar onSubmit={handleSubmit} />

            <ImageList images={images} />
        </div>
    );
}

export default App;