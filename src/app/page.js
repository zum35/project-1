"use client"
import App from 'next/app';
import React, { useState } from 'react';
 
const Homepage = () => {
  const [urls, setUrls] = useState([]);
  const handleClick = () => {
    const newUrl = `https://picsum.photos/seed/${crypto.randomUUID()}/150/150`;
    setUrls([...urls, newUrl]);
  };
 
  return (
    <>
      <button onClick={handleClick}>Resim ekle</button>
      <br />
      {urls.length > 0 && <ImageShow urls={urls} />}
    </>
  );
}
 
function ImageShow({ urls }) {
  const [clicks, setClicks] = useState({});
 
  const handleButtonClick = (index) => {
    setClicks((prevClicks) => ({...prevClicks,[index]: (prevClicks[index] || 1) + 1}));
  };
 
  return (
    <>
      {urls.map((url, index) => (
        <div key={index} style={{ display: "inline-block", margin: "10px" }}>
          <img
         
            src={url}
            alt="random images"
            style={{ margin: "10px 5px" }}
            onClick={() => handleButtonClick(index)}
          />
          <button
            className="transparent-button"
            style={{ fontSize: `${clicks[index] || 1}em` }}
            onClick={() => handleButtonClick(index)}
          >
            👍
          </button>
        </div>
      ))}
    </>
  );
}
 
export default Homepage