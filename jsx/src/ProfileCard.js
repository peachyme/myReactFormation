function ProfileCard({ title, handle, image, description }) { //function ProfileCard(props) {
    // const {title , handle} = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt='PDA Logo' />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4" >{title}</p>
                    <p className="subtitle is-6" >{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;