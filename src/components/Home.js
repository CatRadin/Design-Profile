import '../css/Home.css'
import { Link } from "react-router-dom";
import sparkle from '../assets/sparkle.gif'
import gardener from '../assets/gardener.jpg'
import gamer from '../assets/switch.jpg'


const images = [gardener, gamer]

export default function Home() {
    return (
        <div className='home'>
            <img className='sparkle' src={sparkle} alt='sparkle gif' />

            <div className='middle-section'>
                <div className='links'>
                    <ul>
                        <il>
                            {/* <Link to="/">Home</Link> */}
                        </il>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/designs">Designs</Link>
                        </li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>

                </div>
                <p><span className='name'>Catherine </span>
                    is a UX <span className='pink-accent'>/</span> UI Designer <span className='pink-accent'>+</span> <br />
                    Full Stack Web Developer <span className='pink-accent'>&</span> <br />
                    canging text here<span className='pink-accent'>.</span></p>
            </div>
            <div className='image-container'>
                <img className='images' src={images[0]} alt="intrest pictures" />
            </div>
            <p className='img-count'>1 / 4</p>
            <div className='bottom-box'>
                <div className='center-color-box'>
                </div>
            </div>
        </div>

    );
}