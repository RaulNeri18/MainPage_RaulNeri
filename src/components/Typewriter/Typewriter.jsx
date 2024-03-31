import { useEffect, useState } from 'react';
import './Typewriter.css'

function Typewriter({ myLines }) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [typingCompleted, setTypingCompleted] = useState(false);

    useEffect(() => {
        if (currentLineIndex < myLines.length) {
            const line = myLines[currentLineIndex];
            if (currentLetterIndex < line.length) {
                setCurrentText(line.substring(0, currentLetterIndex + 1));
                setTimeout(() => {
                    setCurrentLetterIndex(currentLetterIndex + 1);
                }, 100);
            } else {
                setTimeout(() => {
                    setCurrentLetterIndex(0);
                    setCurrentLineIndex(currentLineIndex + 1);
                }, 700);
            }
        } else {
            setTimeout(() => {
                setCurrentLineIndex(0);
                setTypingCompleted(true);
            }, 600);
        }
    }, [currentLineIndex, currentLetterIndex, myLines]);

    return (
        <div id="eveTypingText">
            {currentText}
            {!typingCompleted && <span className="cursor" aria-hidden="true"></span>}
        </div>
    );
}

export default Typewriter;
