import React, { useState, useEffect } from "react";

interface IAnimatedTextProps {
  text: string[];
}

export const AnimatedText: React.FC<IAnimatedTextProps> = (props) => {
  const textArray: string[] = props.text;

  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [rest, setRest] = useState(false);

  const handleTyping = (currentString: string) => {
    if (charIndex < currentString.length) {
      setCharIndex((prevCharIndex) => prevCharIndex + 1);
    } else {
      setRest(true);
    }
  };

  useEffect(() => {
    if (rest) {
      setTimeout(() => {
        setRest(false);
        setIsTyping(false);
      }, 5000);
    }
  }, [rest]);

  const handleErasing = () => {
    if (charIndex > 0) {
      setCharIndex((prevCharIndex) => prevCharIndex - 1);
    } else {
      setIsTyping(true);
      setStringIndex((prevStringIndex) => {
        let nextIndex = prevStringIndex + 1;
        if (nextIndex >= textArray.length) {
          nextIndex = 0;
        }
        return nextIndex;
      });
      setCharIndex(0);
    }
  };

  useEffect(() => {
    const typeJs = () => {
      if (stringIndex > textArray.length) return;

      const currentString = textArray[stringIndex];

      if (isTyping) return handleTyping(currentString);

      if (!isTyping && !rest) return handleErasing();
    };

    const intervalId = setInterval(typeJs, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [stringIndex, charIndex, isTyping, textArray]);

  return (
    <p
      className={`border-r border-r-[#FFFFFFB3] transition-all ease-in-out  tracking-wider inline ${
        rest ? "blink_animation" : ""
      }`}
    >
      {textArray[stringIndex].substring(0, charIndex)}
    </p>
  );
};
