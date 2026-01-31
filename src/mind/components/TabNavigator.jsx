import React from 'react';

export function TabNavigator({ tabs = [], activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`tab ${tab.id === activeTab ? 'active' : ''}`}
          data-tab={tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
}
