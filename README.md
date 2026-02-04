# CAS - Cognitive Architecture System

A personal productivity and cognitive management application built with React. This system helps you transform from a "storage" mindset (remembering everything) to a "processor" mindset (efficiently managing and executing tasks).

## Live Demo

🌐 **[View Live App](https://ManojK-AI.github.io/cas)**

## Features

- **Tab-Based Navigation** - Organized content across multiple categories
- **Task Scheduler** - Plan and track daily tasks with localStorage persistence
- **Progress Tracker** - Monitor your completion patterns over time
- **Collapsible Cards** - Expandable content sections for better organization
- **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
cas/
├── public/                    # Static files
│   └── index.html            # HTML template
├── src/
│   ├── App.js                # Root component
│   ├── index.js              # Entry point
│   └── mind/                 # Main application
│       ├── MindApp.jsx       # Core app component
│       ├── components/       # Reusable UI components
│       │   ├── Card.jsx      # Collapsible card component
│       │   ├── Hero.jsx      # Header/hero section
│       │   └── TabNavigator.jsx  # Tab switching
│       ├── features/         # Interactive features
│       │   ├── TaskScheduler.jsx   # Task planning
│       │   └── ProgressTracker.jsx # Progress tracking
│       ├── data/content/     # Content data
│       │   ├── tabs.js       # Tab content definitions
│       │   └── tab-start.js  # Start page content
│       └── styles/           # CSS modules
│           ├── base.css      # Typography & resets
│           ├── components.css # Card & button styles
│           ├── features.css  # Feature-specific styles
│           └── layout.css    # Layout & responsive
├── package.json
└── README.md
```

## Tech Stack

- **React 19** - UI framework
- **Create React App** - Build tooling
- **GitHub Pages** - Hosting
- **localStorage** - Data persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ManojK-AI/cas.git
   cd cas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Run tests |

## Deployment

The app automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

To manually deploy:
```bash
npm run deploy
```

## How It Works

1. **MindApp.jsx** - The main component that orchestrates tabs and content
2. **TabNavigator** - Handles switching between different content tabs
3. **Card** - Displays collapsible content sections with labels
4. **TaskScheduler** - Allows planning tasks and tracking completion
5. **ProgressTracker** - Visualizes your progress patterns

Data is persisted in the browser's localStorage, so your progress is saved between sessions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and for personal use.
