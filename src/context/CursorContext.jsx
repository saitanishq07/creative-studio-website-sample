import React, { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext({
  cursorState: { mode: 'default', text: '' },
  setCursor: () => {},
  resetCursor: () => {}
});

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState({ mode: 'default', text: '' });

  const setCursor = (mode, text = '') => {
    setCursorState({ mode, text });
  };

  const resetCursor = () => {
    setCursorState({ mode: 'default', text: '' });
  };

  useEffect(() => {
    // Only apply custom cursor class on desktop
    if (window.innerWidth >= 1024) {
      document.body.classList.add('has-custom-cursor');
    } else {
      document.body.classList.remove('has-custom-cursor');
    }
    return () => {
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorState, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
