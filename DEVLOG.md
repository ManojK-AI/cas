# Development Log

A journal tracking progress, learnings, and changes on the CAS project.

---

## 2026-01-31 — Initial Setup (by Sandeep)

**Summary:** Sandeep helped migrate from plain HTML/CSS to a React application.

**What was done:**
- Created React project using Create React App
- Set up the component structure (`components/`, `features/`, `data/`, `styles/`)
- Organized content into React components (Card, Hero, TabNavigator)
- Built TaskScheduler and ProgressTracker features
- Configured GitHub Pages deployment with `gh-pages` package
- Set up GitHub Actions for automatic deployment
- Connected repository to Git

**Architecture decisions:**
- Used functional components with React hooks (modern React patterns)
- localStorage for data persistence (keeps it simple, no backend needed)
- Modular CSS files organized by purpose (base, components, features, layout)
- Content stored as JavaScript objects in `data/content/` folder

---

## 2026-02-04 — Documentation Update

**Summary:** Updated README and cleaned up boilerplate code.

**What was done:**
- Replaced default Create React App README with actual project documentation
- Removed unused CSS classes from App.css (35 lines of boilerplate)
- Created this DEVLOG.md file

**What I learned:**
- [ ] _Fill this in: What did you learn today?_

---

## Template for New Entries

Copy this for new days:

```markdown
## YYYY-MM-DD — Short Title

**Summary:** One sentence about what you worked on.

**What was done:**
- Task 1
- Task 2

**What I learned:**
- Concept or skill you practiced
- Something new you discovered

**Questions/Next steps:**
- Things to explore next
```
