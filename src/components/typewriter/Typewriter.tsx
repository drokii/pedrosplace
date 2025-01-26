import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
}

/*
    Gives text a cool typewriter effect. Speed is in ms.
*/
const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText((prev) => prev + text.charAt(prev.length));
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return <>{displayedText}</>;
};

export default Typewriter;

export const PARAGRAPH_SPEED = 10;
export const PRIMARY_CONTENT_DELAY = 500;
export const SECONDARY_CONTENT_DELAY = 1200;