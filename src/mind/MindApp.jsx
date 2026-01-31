import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { TabNavigator } from './components/TabNavigator';
import { Card } from './components/Card';
import { ALL_TABS } from './data/content/tabs';
import './styles/base.css';
import './styles/components.css';
import './styles/layout.css';
import './styles/features.css';
import { TaskScheduler } from './features/TaskScheduler';
import { ProgressTracker } from './features/ProgressTracker';

export function MindApp() {
  const [currentTab, setCurrentTab] = useState(() => {
    return localStorage.getItem('mind_current_tab') || 'start';
  });

  useEffect(() => {
    localStorage.setItem('mind_current_tab', currentTab);
  }, [currentTab]);

  const switchTab = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="mind-root">
      <Hero title="Cognitive Architecture System" subtitle="Storage → Processor Migration Guide" />
      <div className="container">
        <TabNavigator
          tabs={ALL_TABS.map(t => ({ id: t.id, name: t.name }))}
          activeTab={currentTab}
          onTabChange={switchTab}
        />

        <div id="tab-contents-container">
          {ALL_TABS.map(tab => (
            <div key={tab.id} id={tab.id} className={`tab-content ${tab.id === currentTab ? 'active' : ''}`}>
              {tab.cards.map(card => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  labels={card.labels || []}
                  defaultExpanded={card.expanded}
                >
                  {/* Special interactive areas */}
                  {tab.id === 'system' && card.id === 'todays-schedule' ? (
                    <TaskScheduler mode="today" />
                  ) : tab.id === 'system' && card.id === 'plan-tomorrow' ? (
                    <TaskScheduler mode="plan" />
                  ) : tab.id === 'tracker' && card.id === 'progress-patterns' ? (
                    <ProgressTracker />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: card.content }} />
                  )}
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
