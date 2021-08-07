import '../css/Home.css'
import React, { useState } from "react"
import { Link } from "react-router-dom";
import sparkle from '../assets/sparkle.gif'
import gardener from '../assets/gardener.jpg'
import gamer from '../assets/gamer.jpg'
import noise from '../assets/purpleBottom.png'
import reader from '../assets/reader.jpg'
import heartArrow from '../assets/heartArrow.webp'
import me from "../assets/Me.jpg"
import toast from "../assets/Toast.jpg"


const images = [me, toast, gardener, gamer, reader]
const text = ["", "a cat mom", "a gardner", "a gamer", "a reader"];


export default function Home() {

    const [currentImage, setCurrentImage] = useState(0);
    const length = images.length - 1;


    const handleClick = () => {
        setCurrentImage((currentImage) => {
            if (currentImage < length) {
                return currentImage + 1
            } else {
                return 0
            }
        })
    }










    return (
        <div className='home'>
            <div className='top-bar'></div>
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
                <p><span className='name'>Catherine <br /></span>
                    <span className='last-name' >Radin-Schneider</span> <br />
                    is a UX <span className='pink-accent'>/</span> UI Designer <span className='pink-accent'>+</span> <br />
                    Full Stack Web Developer <span className='pink-accent'>&</span>  <br />
                    <span className={text[currentImage]} >{text[currentImage]}</span>
                    <span className='pink-accent'>.</span></p>
            </div>
            <div className='image-container'>
                <img alt="" className='images' src={images[currentImage]}
                    onClick={handleClick} />
                <img onClick={handleClick} alt="" className="noise" src={noise} />
                <p className='img-count'>{currentImage + 1} / {images.length}</p>
            </div>

            <div className='bottom-box'>
                <p className="click">Click</p>
                <img className='heartArrow' src={heartArrow} />
                {/* <img className='heartArrow' src={yellowArrow} /> */}
                <div className='center-color-box'>
                </div>
            </div>
        </div>

    );
}