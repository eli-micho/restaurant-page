import React from 'react';
import { Link } from 'react-router-dom';
import cafe from './../../assets/holdcafe.png';
import './styles.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="leftContent">
                <h2>Come for the high quality premium coffee.</h2>
                <h4>Stay for the unbeatable atmosphere.</h4>

                <div className="description">
                    <p>
                        High-quality coffee should balance acidity, sweetness, and bitterness in one sip, with a smooth flavor, and no off-notes.
                        It shouldn't taste burnt, charred, or raw. 
                        <br/>
                        It should have sophisticated and nuanced flavors.
                        <br/>That's a complex way to say that that good quality coffee should taste good. 
                    </p>
                </div>

                <span className="linkWrap">
                    <Link to="/menu" className="toMenuLink">Menu</Link>
                </span>
            </div>

            <div className="rightContent">
                <img src={cafe} alt="hand holding coffee cup" className="coffee"/>
            </div>
        </div>
    )
};

export default Homepage;