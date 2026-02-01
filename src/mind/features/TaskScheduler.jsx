import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'cas_today_schedule';
const TOMORROW_KEY = 'cas_tomorrow_schedule';

function parseTasks(inputText) {
  const lines = inputText.split('\n').filter(line => line.trim());
  const tasks = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    let duration = 30;
    let taskName = trimmed;

    const bracketMatch = trimmed.match(/^\[(\d+)(m|h)\]\s*(.+)$/i);
    if (bracketMatch) {
      const num = parseInt(bracketMatch[1]);
      const unit = bracketMatch[2].toLowerCase();
      duration = unit === 'h' ? num * 60 : num;
      taskName = bracketMatch[3];
    } else {
      const suffixMatch = trimmed.match(/^(.+?)\s*\((\d+)\s*(min|m|h|hr|hours?)\)$/i);
      if (suffixMatch) {
        taskName = suffixMatch[1];
        const num = parseInt(suffixMatch[2]);
        const unit = suffixMatch[3].toLowerCase();
        duration = unit.startsWith('h') ? num * 60 : num;
      }
    }

    tasks.push({
      id: `task_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,
      name: taskName.trim(),
      duration,
      slot: null,
      completed: false
    });
  }

  return tasks;
}

export function TaskScheduler({ mode = 'today' }) {
  const [today, setToday] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  });
  const [input, setInput] = useState('');
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if (mode === 'plan') {
      setPreview(parseTasks(input));
    }
  }, [input, mode]);

  const savePlan = () => {
    const tasks = parseTasks(input);
    const payload = { date: new Date().toISOString().split('T')[0], tasks };
    localStorage.setItem(TOMORROW_KEY, JSON.stringify(payload));
    alert('Plan saved for tomorrow');
  };

  const completeTask = (taskId) => {
    if (!today) return;
    const newTasks = today.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
    const payload = { ...today, tasks: newTasks };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setToday(payload);
  };

  const promoteTomorrow = () => {
    const raw = localStorage.getItem(TOMORROW_KEY);
    if (!raw) { alert('No plan for tomorrow'); return; }
    localStorage.setItem(STORAGE_KEY, raw);
    localStorage.removeItem(TOMORROW_KEY);
    setToday(JSON.parse(raw));
    alert('Promoted tomorrow to today');
  };

  if (mode === 'today') {
    return (
      <div className="task-scheduler">
        <div className="today-schedule">
          <div className="schedule-header">
            <h4>Today's Schedule</h4>
            <div>
              <button className="task-btn secondary small" onClick={promoteTomorrow}>Promote Tomorrow → Today</button>
            </div>
          </div>

          {today && today.tasks && today.tasks.length > 0 ? (
            <div className="schedule-block">
              {today.tasks.map(t => (
                <div key={t.id} className={`schedule-task ${t.completed ? 'completed' : ''}`}>
                  <input type="checkbox" checked={t.completed} onChange={() => completeTask(t.id)} />
                  <div className="task-name">{t.name}</div>
                  <div className="task-duration">{t.duration}m</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-tasks">
              <p>No tasks scheduled for today.</p>
              <p>Use Plan Tomorrow to add tasks.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Plan mode
  return (
    <div className="task-scheduler">
      <div className="task-input-section">
        <h4>Plan Tomorrow</h4>
        <p className="task-hint">Enter tasks, one per line. Optional duration: [30m] or (1h)</p>
        <textarea id="task-input" rows={6} value={input} onChange={(e) => setInput(e.target.value)} placeholder={"[60m] Finish cloud module\n[30m] Apply to 5 jobs"} />
        <div style={{ marginTop: 8 }}>
          <button className="task-btn primary" onClick={savePlan}>Save Plan</button>
        </div>

        <div className="suggestion-block">
          <div className="block-header">Preview</div>
          {preview.length === 0 ? (
            <div className="no-tasks"><p>No tasks to preview.</p></div>
          ) : (
            <div>
              {preview.map(t => (
                <div key={t.id} className="suggestion-task">
                  <div className="task-name">{t.name}</div>
                  <div className="task-duration">{t.duration}m</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
