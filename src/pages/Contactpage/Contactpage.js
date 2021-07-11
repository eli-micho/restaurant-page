import React, { useState } from 'react';
import './styles.scss';

const Contactpage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const api_key = process.env.REACT_APP_MAP_KEY;

    const resetForm = (e) => {
        e.preventDefault();
        setName('');
        setEmail('')
        setComment('')
    };
    return (
        <div className="contactpage">
            <h3>Location</h3>
            <div className="locationWrap">
                
                <div className="mapWrap">
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Downtown+Commerical,Calgary,Alberta,&zoom=13&size=800x350&maptype=roadmap
                        &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
                        &markers=color:red%7Clabel:C%7C40.718217,-73.998284
                        &key=${api_key}`}
                    />
                </div>

                <div className="locationInfo">
                    <h4>Address</h4>
                    <address>
                        1234 5th Avenue SW
                            <br/>
                        Calgary, AB
                    </address>

                    <h4>Contact Number</h4>
                    <p>(000) - 999 - 999</p>

                    <h4>Email</h4>
                    <p>management@lecafe.com</p>
                </div>
            </div>
            <div className="sendFormWrap">
                <h4>Questions? Feedback? Suggestions? Email us and we'll get back to you!</h4>
                <form className="contactForm" onSubmit={(e) => resetForm(e)}>
                    <div className="row">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name" name="name"/>
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label htmlFor="Email">Email</label>
                            <input type="text" placeholder="Email" name="email"/>
                        </div>
                    </div>

                    <textarea placeholder="Comment"></textarea>

                    <input type="submit" value="Send" className="sendBtn" />
                </form>
            </div>
        </div>
    )
};

export default Contactpage;