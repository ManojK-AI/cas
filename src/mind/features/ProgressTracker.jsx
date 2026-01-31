import React, { useEffect, useState } from 'react';

const HISTORY_KEY = 'cas_task_history';

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  } catch (e) { return {}; }
}

export function ProgressTracker() {
  const [history, setHistory] = useState(() => getHistory());

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const dates = Object.keys(history).sort().reverse();
  const summary = dates.slice(0, 7).map(d => ({ date: d, ...history[d] }));

  return (
    <div className="progress-tracker">
      <div className="progress-summary">
        <h4>Last 7 days</h4>
        {summary.length === 0 ? (
          <div className="no-tasks"><p>No history yet. Complete some tasks!</p></div>
        ) : (
          <div>
            {summary.map(s => (
              <div key={s.date} className="progress-stat">
                <div>
                  <div className="stat-label">{s.date}</div>
                  <div style={{ fontSize: 12 }}>{s.completed}/{s.total} completed</div>
                </div>
                <div className={`stat-value ${s.completed / s.total > 0.7 ? 'good' : ''}`}>{Math.round((s.completed / s.total) * 100) || 0}%</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h4>Skipped Tasks</h4>
        <div className="skipped-list">
          {dates.length === 0 ? <div className="no-tasks"><p>No skipped tasks recorded.</p></div> : null}
          {dates.map(d => (history[d].uncompletedTasks || []).map((t, i) => (
            <div key={`${d}-${i}`} className="skipped-item">
              <div>{t.name}</div>
              <div className="skipped-count">{d}</div>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
}
