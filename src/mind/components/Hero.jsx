import React from 'react';

export function Hero({ title, subtitle }) {
  return (
    <div className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
