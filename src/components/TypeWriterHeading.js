// src/TypewriterHeading.js
import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';

const TypeWriterHeading = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleText.length < text.length) {
        setVisibleText(text.substring(0, visibleText.length + 1));
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [text, visibleText]);

  return (
    <h1 className="text-center text-4xl font-bold text-white mb-20">
      <Typical steps={[visibleText]} loop={false} />
    </h1>
  );
};

export default TypeWriterHeading;
