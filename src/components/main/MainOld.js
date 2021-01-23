import React from 'react';
import MyPicture from '../../assets/img/meicon.png';

const Main = () => {
    return (
        <div className="main">
            <div className="main-content">
                <img alt="myPicture" src={MyPicture} />
                <h1>Hello there my name is</h1>
                <div>
                    <div id="container">    
                        <span id="spin"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
