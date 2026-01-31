import React, { useState } from 'react';

export function Card({ id, title, labels = [], defaultExpanded = false, children }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => {
    setExpanded(e => !e);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} data-card-id={id}>
      <div className="card-header" onClick={toggle}>
        <div className="card-title">{title}</div>
        <div className="card-toggle">▼</div>
      </div>
      <div className="card-body">
        <div className="card-content">
          {labels.map(l => (
            <span key={l} className={`label ${l}`}>{l.toUpperCase()}</span>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
}
