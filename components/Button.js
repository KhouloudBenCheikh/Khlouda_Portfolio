// Button.js
import React from "react";

const Button = () => {
    const clickMe = () => {
        alert('You clicked me');
    };

    return (
        <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank" rel="noopener noreferrer">
            <button onClick={clickMe}>Click Me</button>
        </a>
    );
};

export default Button;
