import { TAB_START } from './tab-start';

export const TAB_QUESTIONS = {
  id: 'questions',
  name: 'Your Questions',
  cards: [
        {
            id: 'q1',
            title: 'Q1: What\'s happening in my case?',
            labels: [],
            expanded: true,
            content: `
                <div class="key-insight">
                    <strong>Answer:</strong> Classic conflict between high-level intellectual curiosity (Trait Openness) and low-level neurobiological friction (First Principles Tax + Dopamine Deficit).
                </div>
            `
        },
        {
            id: 'q2',
            title: 'Q2: Am I not really into informatics? Just lying to myself?',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">Your Logic</div>
                    "If I love them I should be refreshed when doing that. And if I love that I would go for that when free. But instead I love FIFA (650 hours). What's happening?"
                </div>

                <div class="key-insight">
                    <strong>Answer:</strong> No. You genuinely love informatics. But you're "Passive Consumer" of informatics and "Active Master" of FIFA.
                    <br><br>
                    <strong>Reason you don't feel refreshed:</strong> First Principles approach (starting from base) is ACTIVE process = "Write" mode. FIFA (650 hours mastered) = "Read" mode. Your brain seeks recovery state with zero processing power.
                    <br><br>
                    <strong>The 650 hours PROVE you're a pattern matcher</strong> - just in wrong domain because feedback loop is instant vs. delayed.
                </div>

                <div class="diagram">
                    <h3>The Energy Economics</h3>
                    <table>
                        <tr>
                            <th>Activity</th>
                            <th>Mode</th>
                            <th>Feedback</th>
                            <th>Why Brain Chooses It</th>
                        </tr>
                        <tr>
                            <td>Learning Physics</td>
                            <td>WRITE (active)</td>
                            <td>Delayed, abstract</td>
                            <td>High value, high cost</td>
                        </tr>
                        <tr>
                            <td>FIFA</td>
                            <td>READ (pattern match)</td>
                            <td>Instant, clear</td>
                            <td>Medium value, low cost</td>
                        </tr>
                        <tr>
                            <td>Slop</td>
                            <td>CONSUME (passive)</td>
                            <td>Instant spike</td>
                            <td>Zero value, zero cost</td>
                        </tr>
                    </table>
                </div>

                <button class="action-btn" data-action="navigate-fixes">See Quick Fixes →</button>
            `
        },
        {
            id: 'q3',
            title: 'Q3: Should I be observer rather than consumer?',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">Your Context</div>
                    "I try to learn during cooking breaks, boiling water, brushing teeth, parking lot waits. But I fall into slop video hole."
                </div>

                <div class="key-insight">
                    <strong>Answer:</strong> YES. Critical shift. Every 2-min phone check = Cognitive Switching Penalty. Brain leaves 20% power on last content. Across day = entire reduced capacity.
                </div>

                <div class="two-col">
                    <div class="compare-box bad">
                        <strong>Consumer Mode</strong>
                        <p>"I am bored. Entertain me."</p>
                        <p>Passive. Heavy. Screen-dependent.</p>
                        <p><strong>Result:</strong> Context switching tax, dopamine crashes, no pattern building</p>
                    </div>
                    <div class="compare-box good">
                        <strong>Observer Mode</strong>
                        <p>"I am curious. How does this work?"</p>
                        <p>Active. Light. Reality-grounded.</p>
                        <p><strong>Result:</strong> No context switch, trains system design thinking, keeps baseline low</p>
                    </div>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">The Fix: Micro-Moment Observation</div>
                    <strong>Examples:</strong>
                    <ul>
                        <li>Boiling water → Watch bubble physics, pressure changes (Rate Limiting pattern)</li>
                        <li>Brushing → Watch drainage flow (Bottleneck pattern)</li>
                        <li>Parking → Observe traffic logic (Load Balancing pattern)</li>
                    </ul>
                    <p><strong>Benefit:</strong> No context switching penalty. You save 20% brain power per micro-moment. You train the EXACT cognitive muscle needed for system design interviews.</p>
                </div>

                <button class="action-btn" data-action="navigate-system">See Daily System →</button>
            `
        },
        {
            id: 'q4',
            title: 'Q4: Why do I feel like 2nd or 3rd even when I try hard?',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">Your History</div>
                    "In 7th grade I woke at 5:15 AM, removed everything except work. I was 'one of the best not THE best.' This hampered creativity. Made me strict person, not enjoyable to talk to. I feel like I did not make anything original."
                </div>

                <div class="key-insight">
                    <strong>Answer:</strong> You achieved Maximum Exploitation (depth) but sacrificed Exploration (breadth). You felt unoriginal because you weren't feeding brain diverse data to combine.
                </div>

                <table>
                    <tr>
                        <th>Type</th>
                        <th>Approach</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                        <td>Merely Hard-Working (Rank 2-3)</td>
                        <td>Master patterns others created. Follow book perfectly.</td>
                        <td>Super-Hardwired but unoriginal</td>
                    </tr>
                    <tr>
                        <td>1% Best (Rank 1)</td>
                        <td>T-Shaped Skills: Deep in one area BUT broad Informatics interests</td>
                        <td>Original, creative solutions</td>
                    </tr>
                </table>

                <div class="mechanism">
                    <div class="mechanism-title">The Science</div>
                    <strong>Creativity = Combinatorial Evolution.</strong> Take pattern from "Weather" → Apply to "Data Pipelines." If you cut out everything except "work," you have no outside patterns to combine. This is why you felt uncreative.
                    <br><br>
                    <strong>The 1% Best:</strong> They don't work MORE hours. They feed their brain diverse inputs, then let subconscious combine them. They understand that 20% "chaos time" (learning random things) fuels 80% work output.
                </div>

                <button class="action-btn" data-action="navigate-science">See How It Works →</button>
            `
        },
        {
            id: 'q5',
            title: 'Q5: I don\'t want Ronaldo model, I want Messi model',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">Your Statement</div>
                    "But all my life I achieved like Ronaldo."
                </div>

                <table>
                    <tr>
                        <th>Model</th>
                        <th>Strategy</th>
                        <th>Energy</th>
                        <th>Result</th>
                        <th>For You</th>
                    </tr>
                    <tr>
                        <td><strong>Ronaldo</strong></td>
                        <td>Out-work system</td>
                        <td>Willpower (finite)</td>
                        <td>Rank 2-3 (Grinder)</td>
                        <td>Breaks your hardware</td>
                    </tr>
                    <tr>
                        <td><strong>Messi</strong></td>
                        <td>Out-think system</td>
                        <td>Curiosity (renewable)</td>
                        <td>Rank 1 (Original)</td>
                        <td>Prevents heaviness, allows 10-year game</td>
                    </tr>
                </table>

                <div class="key-insight">
                    <strong>Why Messi for You:</strong> As immigrant in small room with high stress, Ronaldo model will break hardware. You don't have "cooling system" (social support/wealth/certainty) to run that much heat.
                    <br><br>
                    <strong>Messi approach:</strong>
                    <ul>
                        <li>Values rest as observation time</li>
                        <li>Prioritizes logic over storage</li>
                        <li>Stays in game 10 years vs. burning out 6 months</li>
                        <li>Plays at CURRENT level, then advances (like your FIFA progression)</li>
                    </ul>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">The FIFA Lesson</div>
                    When you started, AI kicked your ass on Legendary. You were pissed, frustrated. But you didn't stay there. You dropped to Beginner, understood patterns at that level, then moved up step by step. Many losses in between, but you advanced because you played at YOUR level.
                    <br><br>
                    <strong>The Pattern:</strong> Diving into deep complexity when you don't have the base → You feel "not enough" → If you don't push through despite falls, distraction becomes escape → Impossible to advance.
                    <br><br>
                    <strong>The Fix:</strong> Play the game at your CURRENT level. Understand the patterns there. THEN advance. Same for job hunt. Same for Cloud learning. Same for life.
                </div>

                <button class="action-btn" data-action="navigate-system">See Daily System →</button>
            `
        },
        {
            id: 'q6',
            title: 'Q6: How do I fight urges? Willpower is limited battery',
            labels: [],
            expanded: false,
            content: `
                <div class="key-insight">
                    <strong>Answer:</strong> Stop treating urge as enemy to FIGHT. Treat as signal to REROUTE.
                    <br><br>
                    <strong>Engineering analogy:</strong> Pipe under pressure → Don't hold hand over leak (Willpower) → Open bypass valve (System Design)
                </div>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>Bypass Valve 1: 10-Minute Buffer</strong>
                        Urge is chemical spike lasting 10-15 min. Don't fight it. Wait it out. Set timer: "I CAN watch it, but wait 10 min." Do physical reset (water, pushups, window). By minute 11, spike subsides.
                    </div>
                    <div class="protocol-item">
                        <strong>Bypass Valve 2: Environmental Friction</strong>
                        Make temptation physically hard to reach. Phone in different room. Browser blockers. Timed lockbox. Brain does Cost-Benefit in milliseconds. High cost = gives up on urge.
                    </div>
                    <div class="protocol-item">
                        <strong>Bypass Valve 3: Sensory Displacement</strong>
                        Give brain different input. Look out window, observe systems. Walk hallway. Call someone. Redirects dopamine-seeking to healthier channel.
                    </div>
                </div>

                <button class="action-btn" data-action="navigate-fixes">See All Quick Fixes →</button>
            `
        },
        {
            id: 'q7',
            title: 'Q7: How do super performers think? Should I even think about them at beginner level?',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">Your Concern</div>
                    "Maybe I should just continue my ritual and that will set me up for good?"
                </div>

                <div class="key-insight">
                    <strong>Answer:</strong> Super performers think EXACTLY like you're starting to think now. They don't have superpowers - they have superior system management.
                </div>

                <h3>Three Systems They Master</h3>

                <div class="mechanism">
                    <div class="mechanism-title">1. Pattern Aggregation</div>
                    They don't "know more" (Storage). They process better. Look for Abstract Pattern vs. storing syntax.
                    <br><br>
                    <strong>Example:</strong> They see "Rate Limiting" pattern in: API throttling, traffic lights, water pressure, immune response. One pattern → 100 applications.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">2. Dopamine Management</div>
                    Obsessed with Signal-to-Noise ratio. They KNOW slop/political rage thermal throttles Prefrontal Cortex. They guard attention like you guard money.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">3. Architect Identity</div>
                    Motivation isn't External (money/status). It's Internal (joy of puzzle). They're playing a different game - not "beat others" but "solve elegant problem."
                </div>

                <div class="key-insight">
                    <strong>Your ritual (Work → Ventilation → No Slop) IS their Operating System.</strong> You're building EXACTLY the right habits.
                    <br><br>
                    The difference? They've been running this OS for 5-10 years. You're on Day 1. Give it time.
                </div>

                <button class="action-btn" data-action="navigate-science">See The Science →</button>
            `
        },
        {
            id: 'q8',
            title: 'Q8: What makes them winners? How do they stay focused for deep work hours?',
            labels: [],
            expanded: false,
            content: `
                <div class="key-insight">
                    <strong>Answer:</strong> They don't work 12 hours straight. They work in 2-hour High-Intensity Sprints followed by Total Ventilation (silence/walking/nature).
                </div>

                <h3>The Special Moves</h3>

                <div class="mechanism">
                    <div class="mechanism-title">Move 1: Standardize the Mundane</div>
                    Rituals like yours (no phone morning, specific zones, scheduled rewards) → Don't waste Willpower Battery on small decisions → Save 100% Processor Power for complex domain patterns.
                    <br><br>
                    <strong>Example:</strong> Steve Jobs wore same outfit. Zuckerberg same shirt. Not because lazy - because decision fatigue is real.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Move 2: Micro-Wins for Dopamine Flow</div>
                    Not "Get a Job" (too big, too far). Instead: "Map logic of this specific S3 bucket" (small, completable).
                    <br><br>
                    Each micro-win releases dopamine → Keeps momentum → Prevents need for slop.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Move 3: Obsessive Recovery</div>
                    They know: Productivity = Work × Recovery. If Recovery = 0, Productivity = 0.
                    <br><br>
                    They SCHEDULE: walks, silence, social time, observation. Not "if I have time" - it's IN the calendar.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Move 4: Low Baseline, High Peaks</div>
                    Morning = Zero stimulation (no coffee, no screens, no news). Keeps dopamine baseline LOW. Then work feels interesting by comparison. Evening = High stimulation allowed (FIFA, content) as reward.
                </div>

                <button class="action-btn" data-action="navigate-system">See Daily System →</button>
            `
        },
        {
            id: 'q9',
            title: 'Q9: The IIT student who went Rank 32 → 1. How?',
            labels: [],
            expanded: false,
            content: `
                <div class="mechanism">
                    <div class="mechanism-title">What He Did</div>
                    <ol>
                        <li><strong>Recursive Improvement:</strong> Every wrong answer → "What flaw in my LOGIC?" Fixed base logic. Never made mistake again.</li>
                        <li><strong>Pattern Recognition:</strong> Realized all 1000 Physics problems = 3-4 Fundamental Patterns. Stopped "studying" → Started "deriving."</li>
                        <li><strong>Emotional Lightness:</strong> Wasn't "fighting" other students → Playing "match" against Subject.</li>
                        <li><strong>System Over Willpower:</strong> Strict shutdown ritual. Kept Processor cool. Others panic-studied till 2 AM (High Heat/Low Efficiency).</li>
                        <li><strong>Lowered Stakes:</strong> Stopped "trying to be Rank 1" → Started "being Architect of his day." Once he perfected Daily System, rank followed naturally.</li>
                    </ol>
                </div>

                <div class="key-insight">
                    <strong>For You:</strong> You're at "Rank 32" of job search. Don't try to jump to Rank 1 by working 20 hours/day.
                    <br><br>
                    <strong>Mimic him:</strong>
                    <ul>
                        <li>Focus on Logic (not memorization)</li>
                        <li>Standardize Excellence (not sporadic heroics)</li>
                        <li>Make your Rituals so strong that success becomes only logical outcome of system</li>
                    </ul>
                </div>

                <div class="diagram">
                    <h3>The Math</h3>
                    <p><strong>Rank 32 Student (Before):</strong><br>
                    Study Time = 10 hours/day × 50% efficiency = 5 effective hours</p>

                    <p><strong>Rank 1 Student (After):</strong><br>
                    Study Time = 6 hours/day × 95% efficiency = 5.7 effective hours<br>
                    + Pattern recognition (1 concept → 100 applications)<br>
                    + Zero cognitive leaks (no context switching)<br>
                    + Perfect recovery (brain always fresh)</p>

                    <p><strong>Result:</strong> Same input, 5x output. System design > willpower.</p>
                </div>

                <button class="action-btn" data-action="navigate-system">See Your System →</button>
            `
        }
    ]
};

export const TAB_SCIENCE = {
    id: 'science',
    name: 'How It Works',
    cards: [
        {
            id: 'mechanism-1',
            title: 'Mechanism 1: The "First Principles" Tax',
            labels: ['science'],
            expanded: true,
            content: `
                <span class="label science">Neuroscience</span>
                <p>Understanding the BASE (e.g., "What IS a server?") takes 10x more ATP and System 2 effort than memorizing a definition.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Economic Model</div>
                    <strong>Surface Learning (Storage):</strong> Fast upfront, requires constant refreshing. Like renting - pay monthly forever.<br><br>
                    <strong>First Principles (Processor):</strong> Slow upfront, permanent understanding. Like mortgage - pay once, own forever.
                </div>

                <div class="code-block">Cognitive Battery Drain = Base_Learning_Cost × Complexity × Time</div>

                <p><strong>Result:</strong> After engineering work, your battery is drained. Even though you VALUE learning physics/geography, your brain views it as "more work" not "rest."</p>
            `
        },
        {
            id: 'mechanism-2',
            title: 'Mechanism 2: Low-Friction vs High-Friction Rewards',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>Your brain follows Hyperbolic Discounting - overvalues immediate rewards when tired.</p>

                <table>
                    <tr>
                        <th>Activity Type</th>
                        <th>Friction Level</th>
                        <th>Dopamine</th>
                        <th>What It Does</th>
                    </tr>
                    <tr>
                        <td>Learning Physics</td>
                        <td>HIGH</td>
                        <td>Delayed, abstract</td>
                        <td>Requires System 2 activation</td>
                    </tr>
                    <tr>
                        <td>FIFA (650 hours)</td>
                        <td>MEDIUM</td>
                        <td>Instant, high-fidelity feedback</td>
                        <td>Pattern-matching in safe environment</td>
                    </tr>
                    <tr>
                        <td>Slop (Kai Cenat)</td>
                        <td>ZERO</td>
                        <td>Instant spike, sharp crash</td>
                        <td>Numbs pain, zero processing</td>
                    </tr>
                </table>

                <div class="key-insight">
                    <strong>Critical Insight:</strong> Playing FIFA doesn't mean you don't love Informatics. Your brain seeks a recovery state requiring zero processing power. The 650 hours prove you're a pattern matcher - you're just pattern-matching in the wrong domain because the feedback loop is instant vs. delayed.
                </div>
            `
        },
        {
            id: 'mechanism-3',
            title: 'Mechanism 3: The Morning "Front-Loading" Error',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>By starting with coffee + political content/Reddit, you set your Dopamine Baseline too high at 9 AM.</p>

                <div class="diagram">
                    <div class="mechanism-title">The Cascade</div>
                    <div class="flow-horizontal">
                        <div class="flow-box">9 AM: High-arousal content</div>
                        <span class="arrow">→</span>
                        <div class="flow-box">Baseline spikes</div>
                        <span class="arrow">→</span>
                        <div class="flow-box">Job apps feel BORING</div>
                        <span class="arrow">→</span>
                        <div class="flow-box">Brain resists all day</div>
                    </div>
                </div>

                <p><strong>The Fix:</strong> Keep baseline LOW in morning so "boring" work becomes most interesting thing available.</p>
            `
        },
        {
            id: 'mechanism-4',
            title: 'Mechanism 4: Micro-Time "Slop" and Context Switching',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>Every 2-minute phone check while boiling water incurs a Cognitive Switching Penalty.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Tax</div>
                    Your brain leaves 20% of processing power on the last content. You return to work with only 80% capacity. Across a day: 10 micro-checks × 2 min = 20 min lost + accumulated context residue = entire day of reduced capacity.
                </div>

                <div class="code-block">Effective_Capacity = Base_Capacity × (1 - 0.2 × Context_Switches)</div>
            `
        },
        {
            id: 'mechanism-5',
            title: 'Mechanism 5: The "Heaviness" is Cognitive Rigidity',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>That physical chest pressure = your brain in Hyper-Focus without release valves.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Science</div>
                    Creativity happens during Incubation (Default Mode Network), not during focus. When you refuse to talk to others or observe surroundings (fear of "deviation"), you prevent brain from connecting "Software patterns" to "Real World patterns." You're running CPU at 100% heat - it throttles, then crashes into slop.
                </div>

                <div class="two-col">
                    <div>
                        <strong>Causes:</strong>
                        <ol>
                            <li>Storage Overload - trying to "store" syntax vs. "process" logic</li>
                            <li>Isolation - no cognitive ventilation</li>
                            <li>Open Loops - 5+ tasks at 50% completion</li>
                        </ol>
                    </div>
                    <div>
                        <strong>Fixes:</strong>
                        <ol>
                            <li>Draw diagrams (externalize)</li>
                            <li>Talk to humans (flush cache)</li>
                            <li>Close ONE loop completely</li>
                        </ol>
                    </div>
                </div>
            `
        },
        {
            id: 'mechanism-6',
            title: 'Mechanism 6: "High-Fidelity Storage" Paralysis',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>When reading Benjamin Franklin, you tried to capture "perfect words" and "every meaning" - treating brain like Photocopy Machine vs. Synthesizer.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Problem</div>
                    You focus on SYNTAX (specific words) instead of SEMANTICS (meaning). Because you worry about "losing" information, you never actually USE it. You're downloading a 4K movie over dial-up - system hangs.
                </div>

                <div class="key-insight">
                    <strong>The Irony:</strong> Franklin was a First Principles thinker. He didn't memorize "perfect words" about electricity - he cared about how lightning MOVED. You're using the wrong method to study the right model.
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">The Solution: Lossy Compression</div>
                    <strong>INTAKE (15-20 min):</strong> Read/watch. NO notes. NO pausing. Let it flow into RAM.<br><br>
                    <strong>SYNTHESIS (5-10 min):</strong> Close source. SCRAP paper. DRAW logic with boxes + arrows. Can't draw? → Didn't understand → Go back.<br><br>
                    <strong>ARCHIVE (2 min):</strong> ONE sentence capturing pattern. That's it.
                </div>
            `
        },
        {
            id: 'mechanism-7',
            title: 'Mechanism 7: Productive Procrastination',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>You have "feeling of being knowledgeable." In your brain, gathering information FEELS like progress.</p>

                <div class="mechanism">
                    <div class="mechanism-title">The Trap</div>
                    2-hour political/informatics rabbit hole → brain releases dopamine mimicking "working" → You're "snacking" on information to avoid "heavy meal" of job hunting (high rejection, high uncertainty vs. YouTube's zero rejection, high certainty).
                </div>

                <div class="key-insight">
                    <strong>The Fix:</strong> Distinguish between Signal (job apps, cloud study) and Noise (political rage, doomscrolling). Information consumption that doesn't lead to action = Noise, regardless of how "educational" it feels.
                </div>
            `
        },
        {
            id: 'mechanism-8',
            title: 'Mechanism 8: The Satisfaction Gap',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>You aren't getting satisfaction because you're in Zero-Sum thinking.</p>

                <div class="code-block">Satisfaction = Competence + Autonomy + Relatedness</div>

                <div class="two-col">
                    <div class="compare-box bad">
                        <strong>When "Serious" (Machine Mode)</strong>
                        <p>Machines feel only "Functioning" or "Broken." No satisfaction, just execution.</p>
                    </div>
                    <div class="compare-box bad">
                        <strong>When "Shield Down" (Consumer Mode)</strong>
                        <p>Temporary pleasure from slop/FIFA but no deep satisfaction.</p>
                    </div>
                </div>

                <div class="key-insight">
                    <strong>The Solution:</strong> Architect mode balances all three. Competence (learning patterns), Autonomy (choosing how to learn), Relatedness (sharing insights with others). This is why cognitive ventilation is non-negotiable.
                </div>
            `
        },
        {
            id: 'mechanism-9',
            title: 'Mechanism 9: The "1% Best" Fallacy',
            labels: ['science'],
            expanded: false,
            content: `
                <span class="label science">Neuroscience</span>
                <p>In 7th grade: Aggression = Winning. But in complex fields like Software Engineering, aggression has diminishing returns.</p>

                <table>
                    <tr>
                        <th>Type</th>
                        <th>Approach</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                        <td>Merely Hard-Working (Rank 2-3)</td>
                        <td>Master patterns others created. Follow book perfectly.</td>
                        <td>Super-Hardwired but unoriginal</td>
                    </tr>
                    <tr>
                        <td>1% Best (Rank 1)</td>
                        <td>T-Shaped Skills: Deep in one area BUT broad Informatics interests</td>
                        <td>Original, creative solutions</td>
                    </tr>
                </table>

                <div class="mechanism">
                    <div class="mechanism-title">The Science</div>
                    Creativity = Combinatorial Evolution. Take pattern from "Weather" → Apply to "Data Pipelines." If you cut out everything except "work," you have no outside patterns to combine. This is why you felt uncreative.
                </div>

                <div class="key-insight">
                    <strong>The Permission:</strong> Your 20% "chaos time" (weather, roads, physics) isn't distraction. It's the raw material for creative breakthroughs. The 1% Best PROTECT this time because they know: Innovation = Cross-Domain Pattern Transfer.
                </div>
            `
        }
    ]
};

export const TAB_SYSTEM = {
    id: 'system',
    name: 'Daily System',
    cards: [
        {
            id: 'todays-schedule',
            title: "Today's Schedule",
            labels: ['system'],
            expanded: true,
            content: `
                <span class="label system">Dynamic</span>
                <p>Your tasks for today. Check them off as you complete them.</p>

                <div id="todays-schedule-container">
                    <!-- Today's Schedule UI will be injected here by JavaScript -->
                    <noscript>JavaScript is required for the schedule feature.</noscript>
                </div>
            `
        },
        {
            id: 'plan-tomorrow',
            title: 'Plan Tomorrow',
            labels: ['system'],
            expanded: true,
            content: `
                <span class="label system">Interactive</span>
                <p>Plan tomorrow's tasks. Preview updates instantly as you type.</p>

                <div id="plan-tomorrow-container">
                    <!-- Plan Tomorrow UI will be injected here by JavaScript -->
                    <noscript>JavaScript is required for the planning feature.</noscript>
                </div>
            `
        },
        {
            id: 'day-variants',
            title: 'Day Variants (Dinner Rotation)',
            labels: ['system'],
            expanded: true,
            content: `
                <span class="label system">Variants</span>
                <p>Schedule adjusts based on your dinner duty. Pre-compute weekly rotation on Sunday night.</p>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>🟢 STANDARD DAY (Break from cooking)</strong>
                        <br><br>
                        <em>3 days per week - no dinner duty</em>
                        <br><br>
                        • Full deep work blocks (9 AM - 5 PM)<br>
                        • GYM 6:00 - 8:00 PM<br>
                        • Calls 7:00 - 9:00 PM (flexible)<br>
                        • Full reward window 9:00 - 11:00 PM<br>
                        • Standard night routine
                    </div>
                    <div class="protocol-item">
                        <strong>🍳 COOKING DAY</strong>
                        <br><br>
                        <em>~1 day per week - you cook</em>
                        <br><br>
                        • End deep work ~5:00 PM<br>
                        • Cognitive Ventilation 5:00 - 6:00 PM<br>
                        • Free time / Prep 6:00 - 7:00 PM<br>
                        • <strong>Cooking 7:00 - 8:30 PM (1.5 hrs)</strong><br>
                        • <strong>NO GYM</strong> (cooking = physical activity)<br>
                        • Dinner ~8:30 PM<br>
                        • Shorter reward window 9:00 - 11:00 PM
                    </div>
                    <div class="protocol-item">
                        <strong>🧹 CLEAN DAY</strong>
                        <br><br>
                        <em>~1 day per week - you clean</em>
                        <br><br>
                        • Normal schedule until gym<br>
                        • GYM 6:00 - 8:00 PM<br>
                        • <strong>Cleaning 8:00 - 8:30 PM (30 min)</strong><br>
                        • Dinner ~8:30 PM<br>
                        • Rest of evening normal
                    </div>
                    <div class="protocol-item">
                        <strong>🔪 CHOP DAY</strong>
                        <br><br>
                        <em>~1 day per week - you chop</em>
                        <br><br>
                        • Normal schedule until 5:30 PM<br>
                        • <strong>Chopping 5:30 - 6:00 PM (30 min)</strong><br>
                        • GYM 6:00 - 8:00 PM<br>
                        • Dinner ~8:30 PM<br>
                        • Rest of evening normal
                    </div>
                </div>

                <div class="key-insight">
                    <strong>Weekly Rotation Example:</strong><br>
                    Mon: Off | Tue: Clean | Wed: Off | Thu: Chop | Fri: Off | Sat: Cook<br><br>
                    <em>Pre-compute this on Sunday night. Know your whole week in advance.</em>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Why Pre-Compute Weekly?</div>
                    Each morning you know the day type instantly. No decision overhead. Brain wires itself to the right rhythm when it wakes up seeing: "Today = Cooking Day."
                </div>
            `
        },
        {
            id: 'room-architecture',
            title: 'Room Architecture',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Environment</span>
                <p>Creating Zones in Small Space</p>

                <div class="key-insight">
                    <strong>The Problem:</strong> Work, eat, sleep in same 10×10 space → Brain gets "Context Confusion." Must create Mental Zones.
                </div>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>ZONE A: Data Center (Desk)</strong>
                        <br><br>
                        Purpose: Work ONLY<br>
                        Rules: No food, no FIFA, no YouTube, phone air-gapped<br>
                        Setup: Laptop + Water + Notebook. Clean surface.<br>
                        <br>
                        <em>Critical: If you eat/FIFA at desk → Brain never knows which mode</em>
                    </div>
                    <div class="protocol-item">
                        <strong>ZONE B: Observatory (Window/Balcony)</strong>
                        <br><br>
                        Purpose: Breaks + Observation<br>
                        Rules: No screens, standing only<br>
                        Use: Informatics breaks, watching traffic/nature, cooling down<br>
                        <br>
                        <em>Sensory reset without data input</em>
                    </div>
                    <div class="protocol-item">
                        <strong>ZONE C: Lounge (Bed/Chair)</strong>
                        <br><br>
                        Purpose: Recovery<br>
                        Rules: FIFA, calls, reading OK here (evening only)<br>
                        <br>
                        <em>Brain needs clear separation for rest mode</em>
                    </div>
                </div>
            `
        },
        {
            id: 'information-diet',
            title: 'Information Diet: Signal vs Noise',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Filter</span>

                <table>
                    <tr>
                        <th>Category</th>
                        <th>Examples</th>
                        <th>Energy Impact</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><strong>SIGNAL</strong></td>
                        <td>Job applications, Cloud study, Code projects</td>
                        <td>High-value output</td>
                        <td>Prioritize & Optimize</td>
                    </tr>
                    <tr>
                        <td><strong>NOISE</strong></td>
                        <td>Political rage, Slop content, Doomscrolling</td>
                        <td>Drains battery, Heats CPU, Zero output</td>
                        <td>BLOCK (Low-Pass Filter)</td>
                    </tr>
                    <tr>
                        <td><strong>MAINTENANCE</strong></td>
                        <td>FIFA (scheduled), Balcony breaks, Social calls</td>
                        <td>Recharges battery, Cools CPU</td>
                        <td>SCHEDULE (Essential for health)</td>
                    </tr>
                </table>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>Strict Removal List</strong>
                        • Political content (any source)<br>
                        • TikTok/Shorts/Reels<br>
                        • Doomscrolling news<br>
                        • Reaction videos<br>
                        • Kai Cenat/IShowSpeed
                    </div>
                    <div class="protocol-item">
                        <strong>Strategic Keep (Evening)</strong>
                        • FIFA after work<br>
                        • Nat Geo / Engineering Explained<br>
                        • How It's Made<br>
                        • Social calls (anytime - medicine)
                    </div>
                    <div class="protocol-item">
                        <strong>Creative Slop (30 min max)</strong>
                        • FIFA highlights<br>
                        • Music interviews<br>
                        • Sports analysis<br>
                        <br>Dessert after meal, not breakfast
                    </div>
                </div>
            `
        },
        {
            id: 'learning-protocols',
            title: 'Learning Protocols: Processor Mode',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Method</span>

                <h3>The 15-Minute Base Rule</h3>
                <div class="code-block">When curiosity triggers ("What IS a subnet?"):
  1. Set 15-min timer
  2. Understand in simplest terms
     → "Subnet = Logical section of network, like floors in office building"
  3. Draw quick diagram: [Network] → [Subnet A | B | C]
  4. Write one sentence: "Subnet divides big network into managed sections"
  5. TIMER ENDS
  6. Return to main task
  7. Trust: Foundation will be there when you need depth</div>

                <h3>"Lossy" Compression Protocol</h3>
                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>INTAKE (15-20 min)</strong>
                        Read/watch. NO notes. NO pausing. Let it flow into RAM.
                    </div>
                    <div class="protocol-item">
                        <strong>SYNTHESIS (5-10 min)</strong>
                        Close source. SCRAP paper. DRAW logic with boxes + arrows. Can't draw? → Didn't understand → Go back.
                    </div>
                    <div class="protocol-item">
                        <strong>ARCHIVE (2 min)</strong>
                        ONE sentence capturing pattern. That's it.
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Activity</th>
                        <th>Storage Way (Old)</th>
                        <th>Processor Way (New)</th>
                    </tr>
                    <tr>
                        <td>Reading Franklin</td>
                        <td>Highlight every word, look up every meaning</td>
                        <td>Read chapter → Close book → Explain main pattern</td>
                    </tr>
                    <tr>
                        <td>Learning Servers</td>
                        <td>Write "perfect definition" in GoodNotes</td>
                        <td>Draw messy sketch: Server = Post Office. Mail (data) arrives, sorted by address (IP)</td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>High fatigue, low speed, Heaviness</td>
                        <td>High speed, deep intuition, Lightness</td>
                    </tr>
                </table>
            `
        },
        {
            id: 'nightly-check',
            title: 'Nightly System Check + Pre-Compute',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Night Routine</span>
                <p>~11:00 PM - 12:00 AM: The brain that plans at night executes smoothly in the morning.</p>

                <h3>Step 1: Pre-Compute Tomorrow's Tasks (~11:00 PM)</h3>
                <div class="code-block">Write tomorrow's tasks (can be messy):
─────────────────────────────────────
Example input:
  "finish cloud module 3"
  "apply to 5 jobs"
  "call mom sometime"
  "30 min - review notes"
─────────────────────────────────────
System suggests time slots based on your day type.
You confirm or adjust. Done.</div>

                <h3>Step 2: System Log (~11:30 PM)</h3>
                <div class="code-block">Quick reflection:

1. LOGIC: Did I see one "Pattern" today?

2. FLOW: Processor (understanding) or Storage (memorizing)?

3. HEAVINESS: Score 1-10: [___]
              Trending down over week?

4. SIGNAL CHECK:
   □ Avoided Strict Removal list?
   □ Had 15+ min social ventilation?
   □ Closed at least ONE complete loop?

5. TOMORROW: Day type? (Standard/Cook/Clean/Chop)</div>

                <h3>Step 3: Shutdown (~11:55 PM)</h3>
                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>Phone</strong><br>
                        Set alarms. Charge across room. No "one last check."
                    </div>
                    <div class="protocol-item">
                        <strong>Mind</strong><br>
                        Tomorrow is pre-computed. Nothing to think about. Sleep.
                    </div>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Why Night Pre-Compute?</div>
                    Morning brain = execution mode (do what's planned).<br>
                    Night brain = planning mode (decide without time pressure).<br>
                    Pre-computing at night = smooth morning with zero decision overhead.
                </div>
            `
        },
    ]
};

export const TAB_FIXES = {
    id: 'fixes',
    name: 'Quick Fixes',
    cards: [
        {
            id: 'protocol-1',
            title: 'Protocol 1: The 10-Minute Buffer',
            labels: ['emergency'],
            expanded: true,
            content: `
                <span class="label emergency">Emergency</span>
                <h3>When: Urge to watch video/scroll Reddit</h3>

                <div class="code-block">When urge hits:
  1. Acknowledge: "Brain wants dopamine. Normal."
  2. Set 10-min timer: "I CAN watch it, but wait 10 min"
  3. During wait:
     - Splash cold water on face
     - Do 10 pushups / 2-min stretch
     - Look out window, find 3 new things
  4. Timer ends
  5. Check: "Still want it?"
     → 80% of time: No
     → 20% of time: Yes → Then decide consciously</div>

                <div class="mechanism">
                    <div class="mechanism-title">Why It Works</div>
                    By minute 11, dopamine spike subsides. Prefrontal Cortex back in control. You didn't use willpower to say "No" - you used timer to say "Later."
                </div>
            `
        },
        {
            id: 'protocol-2',
            title: 'Protocol 2: Environmental Friction',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Prevention</span>
                <h3>When: Setting up environment to prevent urges</h3>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>Phone</strong>
                        Different room or timed lockbox during work hours
                    </div>
                    <div class="protocol-item">
                        <strong>Browser</strong>
                        Extension to block YouTube/Reddit/Twitter during 8 AM - 6 PM
                    </div>
                    <div class="protocol-item">
                        <strong>Single Tab</strong>
                        Close everything except ONE task. Each tab = tiny focus leak.
                    </div>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">The Science</div>
                    Brain performs Cost-Benefit Analysis in milliseconds. If "cost" of getting distraction is high, brain gives up on urge. Willpower only needed when temptation is visible and reachable.
                </div>
            `
        },
        {
            id: 'protocol-3',
            title: 'Protocol 3: The "Frozen" State Reset',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Recovery</span>
                <h3>When: Sitting paralyzed, can't start</h3>

                <div class="code-block">Action:
  1. Stand up
  2. Move body for 60 seconds (jumping jacks / pace hallway)
  3. Sit in Work Zone chair
  4. Count down: 5-4-3-2-1... GO
  5. Execute 2-min entry: "Just opening laptop"</div>

                <div class="mechanism">
                    <div class="mechanism-title">Why It Works</div>
                    Increasing heart rate slightly signals nervous system: Time for Active Processing vs. Passive Consumption. You bypass the "thinking creates noise" problem. Motion creates motion.
                </div>

                <div class="key-insight">
                    <strong>The Micro-Commitment Strategy:</strong> Don't tell your brain "I'm going to work for 2 hours." Instead: "I'll just do 5 minutes" or "I'll just apply for 5 applications, that's all."
                    <br><br>
                    <strong>Why this works:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Brain doesn't resist because commitment feels trivial</li>
                        <li>No mental burden of "I NEED to sit for hours"</li>
                        <li>Once you start, you naturally develop momentum and taste</li>
                        <li>After 5 minutes/5 applications, you'll likely continue - but you're free to stop</li>
                        <li>Removes the activation energy barrier by lowering the commitment threshold</li>
                    </ul>
                    <br>
                    <strong>Example:</strong> "I'll just apply to 5 jobs and see how I feel" → Opens laptop → By job 3, resistance fades → Completes 12 applications. The hardest part was never the work - it was the IMAGINED heaviness of starting.
                </div>
            `
        },
        {
            id: 'protocol-4',
            title: 'Protocol 4: The Relapse Protocol',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Recovery</span>
                <h3>When: You clicked slop or spent too long on definition</h3>

                <div class="mechanism">
                    <div class="mechanism-title">The New Way</div>
                    Treat slip-up like System Bug. Don't beat yourself up (creates heaviness). Say: "Process error detected. Restarting Architect's Loop." Close tab, stand up, look out window 60 sec. Faster you restart, less damage bug does.
                </div>

                <div class="key-insight">
                    <strong>The Extinction Burst:</strong> When you deny habit its usual reward, brain tries one last desperate "surge." You might feel sudden spike in boredom/irritability around 7-8 PM. This is the habit DYING. Don't panic. Expect it. When it happens, smile: "This is the old pattern breaking."
                </div>
            `
        },
        {
            id: 'protocol-5',
            title: 'Protocol 5: Heaviness Emergency',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Recovery</span>
                <h3>When: Chest pressure, head feels "full"</h3>

                <div class="protocol-grid">
                    <div class="protocol-item">
                        <strong>Immediate (5 min)</strong>
                        Stand up. Walk to window. Name 5 things you see in detail. Feel body in space.
                    </div>
                    <div class="protocol-item">
                        <strong>Short-term (15 min)</strong>
                        Call someone. Explain day out loud. Or record voice memo to yourself explaining what you're working on.
                    </div>
                    <div class="protocol-item">
                        <strong>Long-term (rest of day)</strong>
                        Close ONE loop completely. Don't start new things. Archive what's done. Brain needs completion, not expansion.
                    </div>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">Why This Works</div>
                    Heaviness = Too many open loops + isolation + storage overload. Fix requires: (1) Externalize thoughts (talking/writing), (2) Human connection (even brief), (3) Complete something (dopamine from closure).
                </div>
            `
        },
        {
            id: 'protocol-6',
            title: 'Protocol 6: Pre-Computation Trick',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Prevention</span>
                <h3>When: Every night before sleep</h3>

                <div class="code-block">TONIGHT:
  → Find ONE specific job link OR ONE Cloud topic
  → Leave tab open (or write URL down)

TOMORROW:
  → You don't "start"
  → You just "resume"
  → No decision needed</div>

                <div class="mechanism">
                    <div class="mechanism-title">Why It Works</div>
                    Major reason for "starting problem" = Decision Fatigue. Sitting down and having to DECIDE which job/topic kills starting energy. By pre-computing, you remove the decision barrier. Brain defaults to action instead of deliberation.
                </div>
            `
        },
        {
            id: 'protocol-7',
            title: 'Protocol 7: Managing Extra Bandwidth',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Strategy</span>
                <h3>When: You have surplus energy from avoiding slop</h3>

                <div class="code-block">DO NOT pump it back into work.
If you work until collapse → Associate "No Videos" with "Pain"

INSTEAD:
  → Social Output: Call friend, talk to neighbor
  → Walk apartment complex, observe Human Informatics
  → Release heaviness through ANALOG interaction</div>

                <div class="key-insight">
                    Since you're not spending Processor cycles on slop, you'll have surplus energy. The goal is sustainable system, not maximum extraction. Use extra energy for ventilation, not more work.
                </div>
            `
        },
        {
            id: 'protocol-8',
            title: 'Protocol 8: Recovery vs Reward',
            labels: ['emergency'],
            expanded: false,
            content: `
                <span class="label emergency">Decision</span>
                <h3>When: Choosing between activities during break</h3>

                <table>
                    <tr>
                        <th>Activity</th>
                        <th>Type</th>
                        <th>Effect on Brain</th>
                        <th>When to Use</th>
                    </tr>
                    <tr>
                        <td>Balcony observation (20 min)</td>
                        <td>RECOVERY</td>
                        <td>Clears cache. Keeps brain in Low-Power Observation. Head stays LIGHT.</td>
                        <td>Mid-day after work block</td>
                    </tr>
                    <tr>
                        <td>FIFA</td>
                        <td>REWARD</td>
                        <td>High dopamine + pattern matching. Intense input. Switches to Competition Mode.</td>
                        <td>Evening ONLY after work complete</td>
                    </tr>
                </table>

                <div class="key-insight">
                    <strong>The Context Logic:</strong> You're in a winning streak after 2-hour work block. Balcony → Build momentum. FIFA now → Break circuit. Dopamine crash when returning to applications.
                </div>
            `
        }
    ]
};

export const TAB_TRACKER = {
    id: 'tracker',
    name: 'Progress Tracker',
    cards: [
        {
            id: 'progress-patterns',
            title: 'Task Patterns & Trends (Interactive)',
            labels: ['system'],
            expanded: true,
            content: `
                <span class="label system">Dynamic</span>
                <p>Automatically tracks your task completion patterns and heaviness scores.</p>

                <div id="progress-tracker-container">
                    <!-- Progress Tracker UI will be injected here by JavaScript -->
                    <noscript>JavaScript is required for the progress tracker feature.</noscript>
                </div>

                <div class="mechanism">
                    <div class="mechanism-title">What This Tracks</div>
                    <strong>Task Completion:</strong> What you planned vs completed each day<br>
                    <strong>Frequently Skipped:</strong> Tasks that keep rolling over<br>
                    <strong>Heaviness Trend:</strong> Is your mental weight going down over time?<br><br>
                    <em>Data comes from your nightly system log and task scheduler.</em>
                </div>
            `
        },
        {
            id: 'daily-checklist',
            title: 'Daily Checklist',
            labels: ['system'],
            expanded: true,
            content: `
                <span class="label system">Daily</span>
                <p>Takes <2 minutes. Track essential signals.</p>

                <h3>Morning Check (Start of Day)</h3>
                <ul class="checklist">
                    <li>Phone stayed across room overnight</li>
                    <li>Avoided screens before work setup</li>
                    <li>Did 5-min observation (window/balcony)</li>
                    <li>Pre-computed task from last night is ready</li>
                </ul>

                <h3>Evening Check (End of Day)</h3>
                <ul class="checklist">
                    <li>Completed at least ONE work block (2 hours)</li>
                    <li>Had 15+ min social ventilation (call/person/self)</li>
                    <li>Avoided Strict Removal list (politics/slop)</li>
                    <li>Closed at least ONE loop completely</li>
                    <li>Wrote tomorrow's first task</li>
                </ul>

                <h3>Heaviness Score (1-10)</h3>
                <p>Rate your mental "weight" today:</p>
                <div class="code-block">1 = Light, clear, energized
5 = Moderate pressure, manageable
10 = Heavy, paralyzed, overwhelmed

Today's score: [___]</div>
            `
        },
        {
            id: 'weekly-patterns',
            title: 'Weekly Pattern Detection',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Weekly</span>
                <p>Review every Sunday. Spot patterns over 7 days.</p>

                <table>
                    <tr>
                        <th>Day</th>
                        <th>Work Blocks</th>
                        <th>Heaviness (1-10)</th>
                        <th>Social Quota Met?</th>
                        <th>Slop Free?</th>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>[___]</td>
                        <td>[___]</td>
                        <td>☐</td>
                        <td>☐</td>
                    </tr>
                </table>

                <h3>Weekly Questions</h3>
                <ol>
                    <li><strong>Is heaviness trending DOWN?</strong> (Compare start vs end of week)</li>
                    <li><strong>Which days had lowest heaviness?</strong> What did you do differently?</li>
                    <li><strong>Which days had highest heaviness?</strong> What triggered it?</li>
                    <li><strong>Did social ventilation correlate with lower heaviness?</strong></li>
                    <li><strong>On slop-free days, did you have more energy?</strong></li>
                </ol>
            `
        },
        {
            id: 'system-log',
            title: 'System Log',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Reflection</span>
                <p>Quick daily notes. What's working, what's not.</p>

                <h3>Template (2 min/day)</h3>
                <div class="code-block">Date: [___]

What worked today:
-

What didn't work:
-

One pattern I noticed:
-

Adjustment for tomorrow:
-</div>

                <h3>Example Entries</h3>
                <div class="mechanism">
                    <div class="mechanism-title">Good Example</div>
                    <strong>What worked:</strong> Used 10-min buffer when wanted to watch video. Urge passed.<br>
                    <strong>What didn't work:</strong> Tried to work 3 hours straight. Got heavy.<br>
                    <strong>Pattern noticed:</strong> Balcony breaks = lower heaviness mid-day<br>
                    <strong>Adjustment:</strong> Tomorrow: Force 10-min break after every 50 min
                </div>
            `
        },
        {
            id: 'metrics-dashboard',
            title: 'Metrics Dashboard',
            labels: ['system'],
            expanded: false,
            content: `
                <span class="label system">Analytics</span>

                <div class="protocol-grid">
                    <div class="metric-box">
                        <div class="metric-label">Current Streak</div>
                        <div class="metric-value">[__] days</div>
                        <p>Days following system</p>
                    </div>
                    <div class="metric-box">
                        <div class="metric-label">Avg Heaviness</div>
                        <div class="metric-value">[__]/10</div>
                        <p>This week's average</p>
                    </div>
                    <div class="metric-box">
                        <div class="metric-label">Signal Ratio</div>
                        <div class="metric-value">[__]%</div>
                        <p>Work blocks completed</p>
                    </div>
                    <div class="metric-box">
                        <div class="metric-label">Social Quota</div>
                        <div class="metric-value">[__]/7</div>
                        <p>Days met weekly quota</p>
                    </div>
                </div>

                <h3>Success Criteria</h3>
                <div class="key-insight">
                    <strong>After 2 Weeks:</strong>
                    <ul>
                        <li>Heaviness score trending down (even if slowly)</li>
                        <li>Completing 1-2 work blocks daily</li>
                        <li>Slop consumption reduced by 50%+</li>
                    </ul>
                    <br>
                    <strong>After 4 Weeks:</strong>
                    <ul>
                        <li>Heaviness score consistently below 5</li>
                        <li>Work blocks feel "normal" not "forced"</li>
                        <li>Slop almost eliminated, FIFA scheduled</li>
                        <li>Social ventilation automatic</li>
                    </ul>
                </div>
            `
        }
    ]
};

export const ALL_TABS = [
  TAB_START,
  TAB_QUESTIONS,
  TAB_SCIENCE,
  TAB_SYSTEM,
  TAB_FIXES,
  TAB_TRACKER
];
