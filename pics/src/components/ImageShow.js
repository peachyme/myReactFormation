import './ImageList.css';

function ImageShow({ image }) {
    return (
        <img src={image.urls.small} alt={image.alt_description} />
    )
}

export default ImageShow;