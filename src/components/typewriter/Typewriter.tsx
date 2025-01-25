import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
}
/*
    Gives text a cool typewriter effect. Speed is in ms.
*/
const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 75 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(prev.length));
        }, speed);

        return () => clearInterval(interval);
    }, []);


    return <>{displayedText}</>;
};

export default Typewriter;

export const PARAGRAPH_SPEED = 20;