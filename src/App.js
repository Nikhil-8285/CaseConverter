import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
    const [myStyle, setMyStyle] = useState(`light`);

    const modeChanger = () => {
        if (myStyle === `light`) {
            setMyStyle(`dark`);
            setMode('Enable Light Mode');
            document.body.style.backgroundColor = '#0a0a0b';
            document.body.style.color = 'white';
        } else {
            setMyStyle(`light`);
            setMode('Enable Dark Mode');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    };

    const [mode, setMode] = useState('Enable dark Mode');

    return (
        <>
            <Navbar titles="TextUtils" mode={mode} myStyle={myStyle} modeChanger={modeChanger} />
            <div className="container">
                <TextForm heading="Type Your Thoughts Here!" />
            </div>
        </>
    );
}

export default App;
