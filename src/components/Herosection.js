import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './Herosection.css';

function Herosection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonlabel,
    img,
    alt,
    imgStart,
}) {
    return (
        <div
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkbg'}
        >
            <div className="container">
                <div className="row home__hero-row" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="topline">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}> {headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__subtitle-dark'}>{description}</p>
                            <Link to='/sign-up' ></Link>
                            <Button buttonSize='btn-wide' buttonColor='blue'>{buttonlabel}</Button>
                        </div>
                    </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={src} alt={alt} className='home__hero=img'/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
