import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header() {
  const txtcenter = {
    textAlign: "center",
  };  
  return (
      <div style={txtcenter}>
        HEADER 02
      </div>
  );
}

export default Header;