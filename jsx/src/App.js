import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section class="hero is-link">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <ProfileCard 
                                title='Alexa' 
                                handle='@alexa99' 
                                image={AlexaImage}
                                description='Alexa was created by Amazon and it helps you buy things.' 
                            />
                        </div>
                        <div className="column">
                            <ProfileCard 
                                title='Cortana' 
                                handle='@cortana32' 
                                image={CortanaImage} 
                                description='Cortana was made by Microsoft. Who knows what it does?'
                            />
                        </div>
                        <div className="column">
                            <ProfileCard 
                                title='Siri' 
                                handle='@siri01' 
                                image={SiriImage}
                                description='Siri was made by Apple and is being phased out.' 
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;











// // Step 0 : Create a component and export it


// export default App;


// function App() {
//     const minValue = 5;
//     const message = 'enter age';
//     // return <input type="number" min={7} max={10} style={{ color: 'red', border: '3px solid red'}} />
//     return <textarea autoFocus={true}></textarea>
//     // return <input placeholder='hi'/>

//     // let message = 'bye there !';
//     // if(Math.random() > 0.5){
//     //     message = 'hello there !';
//     // }

//     // return <h1>{new Date().toLocaleTimeString()} {message}</h1>
// }