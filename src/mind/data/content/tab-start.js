export const TAB_START = {
    id: 'start',
    name: 'Start Here',
    cards: [
        {
            id: 'core-identity',
            title: 'Your Core Identity',
            labels: ['diagnostic'],
            expanded: true,
            content: `
                <h3 style="margin-top: 0;">First-Principles Pattern Matcher</h3>
                <p>You are biologically incapable of surface-level knowledge. You crave structural understanding (how roads connect, how weather forms, how servers communicate). This is high-level System 2 thinking.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Glitch</div>
                    "Learning from base" is energy-expensive. Combined with job-hunt pressure (5% odds, sponsorship), your brain blows a fuse. You retreat to "slop" (numbs anxiety) and FIFA (pattern-matching satisfaction you're not getting from work).
                </div>

                <div class="diagram">
                    <h3 style="margin-top: 0;">The Bottleneck</h3>
                    <div class="flow-horizontal">
                        <div class="flow-box">High Openness<br>(Informatics hunger)</div>
                        <span class="arrow">+</span>
                        <div class="flow-box">First Principles Tax<br>(Energy expensive)</div>
                        <span class="arrow">+</span>
                        <div class="flow-box">High Stakes<br>(Immigration pressure)</div>
                        <span class="arrow">=</span>
                        <div class="flow-box" style="background: #ff6b6b; color: white;">System Freeze<br>(Retreat to slop)</div>
                    </div>
                </div>
            `
        },
        {
            id: 'informatics-identity',
            title: 'Informatics Identity vs Information Overload',
            labels: [],
            expanded: false,
            content: `
                <div class="two-col">
                    <div class="compare-box bad">
                        <strong>Information Overload (Victim)</strong>
                        <p>World floods you with data (news, feeds, infinite job posts). You feel small, drowning. You become the bucket catching the deluge.</p>
                    </div>
                    <div class="compare-box good">
                        <strong>Informatics Identity (Master)</strong>
                        <p>You stand outside the data flow. You observe the structure (e.g., "How does this news cycle work?" "How does job market funnel candidates?"). You're the engineer of data, not the bucket.</p>
                    </div>
                </div>
            `
        },
        {
            id: 'solution-model',
            title: 'The Solution Model',
            labels: [],
            expanded: false,
            content: `
                <table>
                    <tr>
                        <th>Aspect</th>
                        <th>Storage Model (Current)</th>
                        <th>Processor Model (Target)</th>
                    </tr>
                    <tr>
                        <td><strong>Learning</strong></td>
                        <td>Memorize definitions, store syntax</td>
                        <td>Understand patterns, derive logic</td>
                    </tr>
                    <tr>
                        <td><strong>Energy</strong></td>
                        <td>Willpower (finite battery)</td>
                        <td>Curiosity (renewable fuel)</td>
                    </tr>
                    <tr>
                        <td><strong>Recovery</strong></td>
                        <td>Slop content (crash)</td>
                        <td>Observation (ventilation)</td>
                    </tr>
                    <tr>
                        <td><strong>Identity</strong></td>
                        <td>Ronaldo (out-work system)</td>
                        <td>Messi (out-think system)</td>
                    </tr>
                    <tr>
                        <td><strong>Result</strong></td>
                        <td>Heaviness, paralysis, guilt</td>
                        <td>Lightness, flow, satisfaction</td>
                    </tr>
                </table>

                <button class="action-btn" data-action="navigate-system">See Daily System →</button>
            `
        }
    ]
};
