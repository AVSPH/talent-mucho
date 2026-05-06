export interface SessionNote {
  num: string;
  date: string;
  title: string;
  teachMin: number;
  buildMin: number;
  roles: { abie: string; mary: string };
  opening: string;
  demo: string[];
  blocks: { problem: string; fix: string }[];
  homeworkBrief: string[];
  talkingPoints: string[];
}

export const PLAYBOOK: SessionNote[] = [
  {
    num: "Kickoff",
    date: "Tue, Jun 2",
    title: "Welcome & Orientation",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Welcome, tone-set, live demo, circulate breakouts",
      mary: "Chat monitoring, tech support, timekeeping, Project troubleshooting",
    },
    opening:
      "\"Welcome to Cohort 1. I'm Abie, this is Mary — we both run our businesses on Claude every day. This isn't a theory course. There are no slides to get through. By the time we're done today, you'll have your first Claude Project loaded with your actual business docs. Let's go.\"",
    demo: [
      "Open claude.ai → Projects → New Project → name it 'Operations Hub'",
      "Upload 3 docs live: services/offer page, FAQ, one real client email",
      "Write custom instructions: 'You are my business assistant. You know my services and clients. Always draft in first person. Never use corporate jargon.'",
      "Send first prompt live: 'Help me draft a follow-up to a client who hasn't replied in 2 weeks'",
      "Show the output, ask the room: 'Would you have written it differently?' Tweak one instruction live.",
      "End demo: 'That took 8 minutes. Your turn.'",
    ],
    blocks: [
      { problem: "I don't have Pro yet", fix: "Free works today — upgrade before Thursday. You'll hit limits in Week 2." },
      { problem: "I don't know what project to pick", fix: "Ask: what takes most of your time right now? That's your project." },
      { problem: "My Claude looks different", fix: "UI varies. Follow the function, not the layout — same Claude under the hood." },
      { problem: "My docs are on Google Drive / Notion", fix: "Export as PDF or paste the text. Claude reads PDFs natively." },
    ],
    homeworkBrief: [
      "Before Thursday (W1·S1):",
      "1. Your first Claude Project should be live with at least 2 docs uploaded.",
      "2. Choose your ONE project for the month — drop it in #cohort-1 on Skool by Wednesday midnight.",
      "3. If you're not on Pro yet, upgrade before Thursday. You will hit the free limit mid-session.",
    ],
    talkingPoints: [
      "The format: 10 min context, 15 min live demo, 105 min you build, 30 min showcase, 20 min office hours.",
      "Meri is always in the chat — no question is too basic. Stuck for 5 minutes? Ask.",
      "Pick one project for the whole month. Building one real thing beats prototyping five.",
      "We ship working things, not pretty things. Done beats perfect, every time.",
    ],
  },
  {
    num: "W1·S1",
    date: "Thu, Jun 5",
    title: "The Interface, Projects",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Demo Voice project build, coach students on custom instructions",
      mary: "Track who committed a project in Skool, flag anyone who hasn't, chase in chat",
    },
    opening:
      "\"Quick wins first — who built their first Project? Drop it in chat. [pause] Beautiful. Now we're going deeper. Today's build is your Voice project. After this session, you'll have something that drafts in your exact tone, on demand.\"",
    demo: [
      "Create new Project 'Voice & Content'",
      "Custom instructions: 'You are [Name]'s content voice. Write like her — short paragraphs, direct, warm, no corporate speak. Use ~ instead of em-dash. She runs [business type] in [city].'",
      "Upload 3 real writing samples: recent posts, emails, or Slack messages (PDF or paste)",
      "Test prompt: 'Write an Instagram caption about [current topic]. 3-4 sentences. My tone.'",
      "Show before/after: default Claude vs Voice project. Point out the difference.",
      "Iterate live: add one more instruction based on what's still off.",
    ],
    blocks: [
      { problem: "It doesn't sound like me", fix: "Give more negative examples — tell it what NOT to say. 'Never use the word synergy. Never start with a question.'" },
      { problem: "I don't post content", fix: "Use it for client emails, proposals, or SOPs instead. Same principle." },
      { problem: "Custom instructions feel generic", fix: "Add specifics: industry, city, audience, one 'never do this'. Specificity = better output." },
      { problem: "I uploaded PDFs but Claude ignores them", fix: "Start your prompt with 'Based on my uploaded docs...' to signal Claude to reference them." },
    ],
    homeworkBrief: [
      "Before Tuesday (W1·S2):",
      "1. Write 5 prompts for your Voice project — things you actually write every week.",
      "2. Test each one. Screenshot your favourite output.",
      "3. Drop one screenshot in #wins on Skool.",
    ],
    talkingPoints: [
      "Projects persist. A chat is a Post-it note — a Project is a filing cabinet with memory.",
      "Custom instructions are a contract. Be specific about tone, format, and what to never do.",
      "The test: if a stranger reads the output and can't tell it's AI, the instructions are working.",
      "You're training a writing partner, not a robot. Iterate like you'd coach a human.",
    ],
  },
  {
    num: "W1·S2",
    date: "Tue, Jun 10",
    title: "Custom Instructions, File Uploads",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Demo Client Hub project, teach file upload strategies",
      mary: "Check that all students have completed Week 1 deliverable (3 Projects). Flag anyone behind.",
    },
    opening:
      "\"By the end of today, you'll have all three Week 1 Projects complete — and you'll know how to load Claude with documents so it can actually help you, not just talk at you. File uploads are where most people get stuck. We're going to fix that today.\"",
    demo: [
      "Create new Project 'Client Hub — [client name]'",
      "Upload: one client's proposal, their onboarding form, a past email thread (PDF)",
      "Custom instructions: 'This Project contains everything about [Client Name]. Always reference their actual documents. When drafting emails, match the tone of our previous correspondence.'",
      "Test: 'Draft a check-in email to this client asking for their feedback on last month's work'",
      "Show Claude pulling from the uploaded documents naturally",
      "Deliverable check: confirm all 3 Projects exist — Voice, Operations Hub, Client Hub",
    ],
    blocks: [
      { problem: "My PDF is too long / Claude skips parts", fix: "Break long docs into smaller files. Claude reads the whole thing but prioritises the start and end." },
      { problem: "Claude hallucinates client details", fix: "Make instructions more explicit: 'Only state facts from the uploaded documents. Never invent information.'" },
      { problem: "I have many clients, one Project each feels like a lot", fix: "One Project per major client or client type. Use the conversation for one-offs." },
      { problem: "I can't export emails as PDF", fix: "Copy-paste into a Google Doc, export to PDF. Or paste the text directly into Project knowledge." },
    ],
    homeworkBrief: [
      "Week 1 deliverable due tonight:",
      "1. All 3 Claude Projects live (Operations Hub, Voice & Content, Client Hub).",
      "2. Post a screenshot of your 3 Projects in #cohort-1 on Skool — this is your Week 1 completion.",
      "3. Before Thursday: read the Cowork setup guide in the Skool vault. We're installing it live in W2·S3.",
    ],
    talkingPoints: [
      "Files Claude reads well: PDF, DOCX, CSV, TXT. Avoid images of text — paste the text instead.",
      "Start a new conversation when: you're switching topics, the context is getting too long, or Claude starts confusing sessions.",
      "Don't dump your whole Google Drive. Curate. 3-5 focused docs beat 30 random ones.",
      "The 3-Project system is your Week 1 foundation. Everything in Weeks 2-4 builds on top of it.",
    ],
  },
  {
    num: "W2·S3",
    date: "Thu, Jun 12",
    title: "AI Employees — What Cowork Makes Real",
    teachMin: 35,
    buildMin: 145,
    roles: {
      abie: "Demo Cowork install + first folder automation, field permission questions",
      mary: "Watch for install failures — have the troubleshooting guide ready. Log which OS each student is on.",
    },
    opening:
      "\"Week 2. We're leaving Claude.ai and going one level deeper — Cowork. This is Claude with hands. It can open your files, organise your folders, and act on your computer on your behalf. By end of today, you'll have watched it organise a real folder of your files, live.\"",
    demo: [
      "Share screen: install Cowork from anthropic.com/cowork — Mac flow first, Windows notes alongside",
      "Grant Cowork access to your 'Claude folder' only — not the whole Desktop",
      "Live demo: 'Organise everything in this folder by date and rename files to match the project name'",
      "Watch it work. Narrate what it's doing and why.",
      "Test boundary: 'Delete everything in this folder' — show that it asks for confirmation",
      "Frame: 'This is an employee with file access. You give it a brief, it executes, it confirms before irreversible actions.'",
    ],
    blocks: [
      { problem: "Cowork won't install / permissions denied", fix: "Mac: System Settings → Privacy & Security → Full Disk Access → enable Cowork. Windows: run installer as admin." },
      { problem: "I'm scared to give it access to my files", fix: "Start with a test folder. Put 10 dummy files in it. Grant access to that folder only. You keep full control." },
      { problem: "It's not doing anything after I prompt", fix: "Be more specific. 'Organise this folder' → 'Rename all files in ~/Claude/Bootcamp to include today's date at the start of the filename.'" },
      { problem: "I'm on Windows and the install guide is Mac-only", fix: "Mary has the Windows guide — drop your name in chat and she'll send the direct link." },
    ],
    homeworkBrief: [
      "Before Tuesday (W2·S4):",
      "1. Cowork is installed and you've successfully run one task on a test folder.",
      "2. Think of 3 recurring tasks you hate doing manually. Pick the one Claude could do if it had file access.",
      "3. Write a one-paragraph 'brief' for that task — what it does, what good output looks like, what it should never touch.",
    ],
    talkingPoints: [
      "The 'AI employee' frame: it's not a chatbot. It has a role, a brief, a scope. You manage it like a person.",
      "Permissions are your boundary. Only give access to what it needs. You can always expand later.",
      "Cowork asks for confirmation before deleting. It's not reckless — but be specific about scope.",
      "Think of it this way: if you'd send a Loom to a VA explaining the task, you can brief Cowork instead.",
    ],
  },
  {
    num: "W2·S4",
    date: "Tue, Jun 17",
    title: "Build and Test Your First AI Employee",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Demo the brief framework, run 5-scenario stress test live",
      mary: "Collect 'AI employee role' choices from students in chat. Keep a running list — we'll reference names in W4.",
    },
    opening:
      "\"Today you're naming and briefing your first AI employee. Not a tool — an employee. It has a name, a role, and a scope. You'll test it against 5 real scenarios from your business. If it passes 4 out of 5, it's hired.\"",
    demo: [
      "Pick an employee type live: 'I'll build Inbox Triage. Her name is Ria.'",
      "Write the brief using the 4-part frame: Role, Scope, Output format, What she never does",
      "Brief example: 'Ria reads my email inbox and sorts by: [1] Needs reply today [2] Can wait [3] FYI only [4] Junk. She never drafts a reply without asking. She flags anything involving money or clients first.'",
      "Run 5 test scenarios: paste 5 real emails (anonymised), ask Ria to triage them",
      "Grade each response: Pass / Needs more instruction / Brief gap",
      "Update the brief based on what failed. Re-test scenario 3 live.",
    ],
    blocks: [
      { problem: "My brief is too vague and Claude does whatever it wants", fix: "Add more 'never do' rules. The brief should say what the employee does AND what they don't." },
      { problem: "I picked a role but I'm not sure it's automatable", fix: "Rule of thumb: if it's repeatable, rule-based, and doesn't require live conversation, it's automatable." },
      { problem: "Claude passes 2 out of 5 — feels broken", fix: "That's a brief gap, not a Claude problem. Look at what the 2 that passed had in common — write more instructions like that." },
      { problem: "I don't have 5 real scenarios ready", fix: "Use 3 real ones and invent 2 edge cases. Edge cases are more valuable for stress-testing anyway." },
    ],
    homeworkBrief: [
      "Week 2 deliverable due tonight:",
      "1. Your named AI employee is in Cowork with a brief that passes at least 4 of 5 stress-test scenarios.",
      "2. Post your employee name + role in #cohort-1. One sentence: 'My AI employee [Name] handles [task].'",
      "3. Before Thursday: watch the Claude Code intro in the Skool vault. We're building live in W3·S5.",
    ],
    talkingPoints: [
      "The 4-part brief: Role (what they do), Scope (what they touch), Output (format and length), Guardrails (what they never do).",
      "Test before you trust. 5 scenarios is the minimum bar. Real scenarios are better than invented ones.",
      "Name your employee. It sounds silly, but it helps you brief them like a person — with role clarity and expectations.",
      "Iteration is the job. The brief is never done — you update it as your business changes.",
    ],
  },
  {
    num: "W3·S5",
    date: "Thu, Jun 19",
    title: "Claude Code — Your First Build",
    teachMin: 35,
    buildMin: 145,
    roles: {
      abie: "Terminal walkthrough, vibe coding demo, ship something tiny live",
      mary: "Field terminal errors in chat — have common fix commands ready. Log who's on Mac vs Windows.",
    },
    opening:
      "\"Week 3. We're going somewhere new today. The terminal. I know — stick with me. You don't need to know how to code. You need to know how to describe what you want. Claude Code translates your English into working software. By end of today, you will have built and shipped something real.\"",
    demo: [
      "Open terminal (Mac: cmd+space → 'Terminal' / Windows: PowerShell)",
      "Run: `claude` — show the interface. 'This is your co-developer.'",
      "Pick a small problem live: 'I want a one-page tool that shows me a random prompt from my prompt library when I refresh.'",
      "Describe it in plain English to Claude Code. No syntax. No file names. Just describe.",
      "Watch it build. Narrate: 'It's creating files. It's writing code. I'm not touching any of it.'",
      "Open the result in a browser: `open index.html`. Show it working.",
      "Make a live change: 'Change the background to my brand colour.' Done in 30 seconds.",
    ],
    blocks: [
      { problem: "Terminal won't open / command not found", fix: "Mac: Spotlight → Terminal. Windows: Start → PowerShell. If `claude` not found, re-run the install from the setup guide." },
      { problem: "Claude Code is building something I didn't ask for", fix: "Stop it (Ctrl+C), be more specific. 'A single HTML file, no frameworks, that does exactly X.'" },
      { problem: "The thing it built doesn't work when I open it", fix: "Tell Claude Code: 'When I open this in Chrome, [describe what's broken]. Fix it.' It will." },
      { problem: "I'm scared I'll break my computer", fix: "Claude Code only touches the folder you're working in. It can't reach system files. You're safe." },
    ],
    homeworkBrief: [
      "Before Tuesday (W3·S6):",
      "1. Your Week 3 S5 build is open and working on your computer.",
      "2. Make one change to it yourself — in plain English to Claude Code. Just one.",
      "3. Screenshot the thing you built and drop it in #wins. Include one sentence: what it does.",
    ],
    talkingPoints: [
      "Vibe coding: you describe the outcome, Claude writes the code. You're the product manager, not the developer.",
      "Small builds first. A tool that solves one problem is worth more than a half-built platform.",
      "Claude Code works in your current folder. Start every session with: 'We're in ~/Claude/Bootcamp/[project].'",
      "The best prompt for Claude Code: 'Build me [thing] that does [function]. Use [HTML/Python/etc] and no external dependencies.'",
    ],
  },
  {
    num: "W3·S6",
    date: "Tue, Jun 24",
    title: "Build Your Business Dashboard",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Demo dashboard build from a Google Sheet, coach data setup",
      mary: "Help students prep their data source before the build sprint. Flag anyone without a data source by 0:20.",
    },
    opening:
      "\"Today we build something you'll actually use after the bootcamp. Your dashboard. Not Notion. Not Airtable. Yours — built in 90 minutes, pulling from your data, showing what you need to see. Let's go.\"",
    demo: [
      "Prep: have a Google Sheet with real data (client list, revenue by month, lead tracker — pick one)",
      "Export as CSV. In Claude Code: 'Build a dashboard that reads this CSV and shows [metric 1], [metric 2], [metric 3] as cards at the top.'",
      "Add a chart: 'Add a bar chart showing revenue by month from the data.'",
      "Style it: 'Use a dark background, beige text, and my brand colour #C4A882 for highlights.'",
      "Open in browser. Show it working with real data.",
      "Add one interactive element: a filter or a date range picker — show Claude Code handle the logic.",
    ],
    blocks: [
      { problem: "I don't have clean data to use", fix: "Start with a simple table: 5 columns, 10 rows of made-up data. Build the structure, populate with real data after." },
      { problem: "The dashboard is reading from a local CSV — will it work on my phone?", fix: "Local dashboard = computer only. Hosting it online is a Week 4 stretch goal if you want it everywhere." },
      { problem: "Claude Code keeps adding features I didn't ask for", fix: "Add to your prompt: 'Only add what I explicitly ask for. Do not add features I haven't requested.'" },
      { problem: "The chart doesn't look right", fix: "Describe what's wrong specifically: 'The bars are too thin, the Y-axis starts at 50 not 0, the labels overlap.' One issue at a time." },
    ],
    homeworkBrief: [
      "Week 3 deliverable due tonight:",
      "1. Your dashboard is built, opens in Chrome, shows real (or realistic) data.",
      "2. Post a screenshot in #cohort-1. Caption: '[Dashboard name] — tracks [what it tracks].'",
      "3. Before Thursday: think about how your 3 Claude Projects + AI employee + dashboard work together. We're wiring it all up in W4.",
    ],
    talkingPoints: [
      "A dashboard is just data + a view. The data is yours. Claude Code writes the view.",
      "Done means: it opens, it shows data, it doesn't crash. It does not mean it's beautiful.",
      "Most business owners need 3-5 numbers at a glance. That's the bar. Not a full analytics suite.",
      "This is Week 3 deliverable. By the end of this session, every person in this room has shipped software.",
    ],
  },
  {
    num: "W4·S7",
    date: "Thu, Jun 26",
    title: "Your Full Claude Stack Working Together",
    teachMin: 30,
    buildMin: 150,
    roles: {
      abie: "Demo the 3-moments-a-day routine with live stack walkthrough",
      mary: "Gather screenshots of student AI employees from #cohort-1 — build a quick gallery for the graduation slide.",
    },
    opening:
      "\"Week 4. Last sprint. Today we wire it all together — your Projects, your AI employee, your dashboard, your daily routine. You're not using tools anymore. You're running a Claude stack. Let's show it.\"",
    demo: [
      "Morning moment (2 min): Open Operations Hub Project → 'What are the 3 most important things I need to handle today based on my notes?'",
      "Midday moment (5 min): Open Cowork, ask AI employee to triage anything that came in",
      "End of day (3 min): Open dashboard, check your 3 key metrics, add one row to your data CSV",
      "Wire the full workflow for one real business scenario: client follow-up chain — Projects draft, employee triages, dashboard tracks",
      "Show the before (doing it manually) vs. after (Claude stack) in terms of minutes per day",
    ],
    blocks: [
      { problem: "I'm using too many tools and losing track", fix: "Pick your 3 moments a day. Stick to them for 2 weeks. Add more only after the routine is automatic." },
      { problem: "My AI employee and Projects overlap — they both draft emails", fix: "Employee for routing and triage. Projects for drafting. Different jobs, different tools." },
      { problem: "I still don't have a daily routine that sticks", fix: "Attach it to existing habits: morning coffee = Claude check-in. End of last meeting = dashboard glance." },
      { problem: "My stack feels fragile / I'm scared it'll break", fix: "Everything is reversible. Claude Code tools can be rebuilt. Projects can be updated. The system is yours to change." },
    ],
    homeworkBrief: [
      "Before Tuesday (W4·S8 graduation):",
      "1. Run your 3-moments-a-day routine for 3 consecutive days.",
      "2. Write one paragraph: what changed? What surprised you? What broke?",
      "3. Prepare a 2-minute showcase: what you built, what it does, one thing you'd do differently.",
    ],
    talkingPoints: [
      "A stack is a system. Systems don't require willpower — they just run.",
      "3 moments a day is the habit target. Under 10 minutes total. If it's taking longer, the stack needs simplifying.",
      "You don't need to use every tool every day. Use what the situation calls for.",
      "The goal isn't to be impressive — it's to save 5-10 hours a week, compounding.",
    ],
  },
  {
    num: "W4·S8",
    date: "Tue, Jul 1",
    title: "Showcases & Graduation",
    teachMin: 60,
    buildMin: 120,
    roles: {
      abie: "Host showcases, give feedback, write each student's daily routine with them live",
      mary: "Manage showcase order, handle Zoom/Skool recording, send the graduation form in chat",
    },
    opening:
      "\"Last session. Today you show each other what you built. Two minutes each — no deck, no polish. Just show the thing and tell us one thing you'd do differently. Then we write your daily routine together, and you leave with a real Claude stack that's yours.\"",
    demo: [
      "Showcase format: screen share, 2 minutes max. 'Here's what I built. Here's what it does. Here's one thing I'd change.'",
      "After showcases: open a doc together. 'Moment 1 — morning: [specific prompt]. Moment 2 — midday: [specific task]. Moment 3 — end of day: [specific check].'",
      "Make it concrete: not 'open Claude' but 'Open Client Hub Project → paste this prompt → read the output.'",
      "Final frame: 'You came in as a business owner who'd heard of AI. You leave as an operator who runs it.'",
    ],
    blocks: [
      { problem: "Student is nervous to showcase", fix: "Mary: 'Just show the window, you don't need to explain anything. We'll ask questions after.' Lower the bar verbally." },
      { problem: "Student didn't complete all 4 deliverables", fix: "Acknowledge what they built. Ask: what would completing it take? Set a 2-week target with them publicly." },
      { problem: "Student wants to keep building after graduation", fix: "Skool vault has the advanced prompt library. Cohort 2 is the next step for formal learning." },
    ],
    homeworkBrief: [
      "Your graduation homework — no deadline, just a commitment:",
      "1. Run your daily Claude routine for 30 days. Screenshot your wins. Post in #wins on Skool.",
      "2. Teach one person in your life one thing Claude can do. Just one.",
      "3. When you're ready for more: Cohort 2 opens in [date TBC]. You'll get first notice in Skool.",
    ],
    talkingPoints: [
      "The certificate isn't the goal. The habit is. 30 days of the routine will change how you work.",
      "Don't stop updating your Projects. They should reflect your business 6 months from now too.",
      "You're ahead of 99% of small business owners. Use that advantage.",
      "Cohort 2 will have your testimonials, your screenshots, your wins. Help us recruit them.",
    ],
  },
];
