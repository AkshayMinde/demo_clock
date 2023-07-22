import React, { useState } from 'react';

const App = () => {
    const [ currTime, setCurrTime] = useState(new Date().toLocaleDateString());
    const updateTime = () => {
        setCurrTime(new Date().toLocaleTimeString());
    };
    setInterval(updateTime, 1000);
    return (
        <>
            <h1>{currTime}</h1>
            <button onClick={updateTime}>Update Time</button>
        </>
    )
}

export default App;