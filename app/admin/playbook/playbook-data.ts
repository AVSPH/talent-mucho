export interface AgendaBlock {
  time: string;
  label: string;
  duration: string;
  type: "build" | "sell" | "buffer" | "open";
}

export interface Objection {
  objection: string;
  response: string;
}

export interface SalesSession {
  title: string;
  date: string;
  totalMin: number;
  tagline: string;
  agenda: AgendaBlock[];
  roles: { abie: string; mary: string };
  preBuild: string[];
  buildSteps: { step: string; script: string; tip?: string }[];
  transitionScript: string;
  pitchPoints: string[];
  objections: Objection[];
  closingScript: string;
  urgencyMechanics: string[];
}

export const FREE_SESSION: SalesSession = {
  title: "Free Live Build: Make Claude Sound Exactly Like You",
  date: "Fri, May 9",
  totalMin: 120,
  tagline: "They came to learn AI. They leave having built the first piece of their AI self.",
  agenda: [
    { time: "0:00", label: "Welcome + frame the session", duration: "5 min", type: "buffer" },
    { time: "0:05", label: "Show the FINISHED thing first — in your voice", duration: "7 min", type: "build" },
    { time: "0:12", label: "Live build — Voice & Brand Project", duration: "33 min", type: "build" },
    { time: "0:45", label: "3 students share their voice output", duration: "15 min", type: "open" },
    { time: "1:00", label: "\"Here's what the bootcamp adds\" — the story", duration: "20 min", type: "sell" },
    { time: "1:20", label: "Objection Q&A", duration: "20 min", type: "open" },
    { time: "1:40", label: "Closing + link goes live", duration: "20 min", type: "sell" },
  ],
  roles: {
    abie: "Teach, demo, run the pitch and closing. Use your own brand voice as the live example throughout.",
    mary: "Chat wrangler — collect writing samples from people who have nothing ready, flag anyone stuck on custom instructions. Drop the Skool link at 1:00 and the Stripe link at 1:40.",
  },
  preBuild: [
    "Tell attendees to open claude.ai before the session — free account is fine",
    "Have your OWN Voice & Brand Project open as the 'finished' demo — use real outputs from it",
    "Prepare 3 sample outputs to show: one caption, one client email, one sales message — all from your project",
    "Tell attendees in advance: 'Bring 3 examples of your writing — a caption, an email, anything in your voice'",
    "Mary: have the Stripe bootcamp link ready to drop in chat at exactly 1:40",
    "Prepare a one-liner for the pitch moment: 'In 4 weeks you build the AI version of yourself — your voice, your ops, your clients, your dashboard. €247 founding price.'",
  ],
  buildSteps: [
    {
      step: "Show the finished thing FIRST — in your voice (7 min, before teaching anything)",
      script: "\"Before we start building, I want to show you something. This is my Claude Project — my Voice assistant. I trained it on how I write. Watch.\" [Send a live prompt: 'Write an Instagram caption about showing up for your business even when it's hard. My voice, 3 sentences, no hashtags.'] [Show output.] \"That's me. Not AI. My tone, my words, my rhythm. And I built this in 20 minutes. That's exactly what you're doing today. Let's go.\"",
      tip: "Pick output that genuinely sounds like you — something you'd actually post. The believability is the hook. If the room goes 'wait, that doesn't sound AI-ish' — you've won.",
    },
    {
      step: "Create the Voice & Brand Project (4 min)",
      script: "\"Open claude.ai. Go to Projects — top left, or in the menu. New Project. Name it 'My Brand Voice' or your business name. That's your base. You've just created the container.\" [Pause. Let them do it.] \"Drop a thumbs up in chat when you're there.\"",
      tip: "Wait for the thumbs-ups. Don't move on until at least 70% of the room is in. Mary: flag anyone who can't find Projects immediately.",
    },
    {
      step: "Write brand voice instructions — the core of the build (12 min)",
      script: "\"Now we teach it who you are. Click 'Set instructions'. This is the most important part — be specific. Here's the frame I use:\" [Type live, narrate each line:] 'You are [Name]'s brand voice. She runs [business]. Her audience is [describe]. Her tone is [3 adjectives — e.g. warm, direct, no-nonsense]. She never uses words like: [list 3–5 words they hate — corporate jargon, filler phrases]. She always writes in first person. Short sentences. She uses ~ instead of em-dashes.' [Pause.] \"Now write yours. Don't copy mine — this has to sound like you, not me. What 3 words describe how you write? What do you NEVER want Claude to say?\" [Give 3 min to write. Ask 3 people to read theirs out loud.]",
      tip: "The 'words I never use' section is gold — it's where people get specific and it's where the magic happens. Coach them toward concrete words, not vague ones ('no corporate speak' is weaker than 'never say synergy, leverage, or unlock your potential').",
    },
    {
      step: "Upload writing samples (8 min)",
      script: "\"Now feed it examples of how you actually write. Upload or paste any 3 of these: a recent caption or post, a client email you're proud of, a message to your community, your About page, a Skool or newsletter intro.\" [Pause 4 min.] \"The more real writing you give it, the more it sounds like you. One sample is ok. Three is better. Five is the sweet spot.\"",
      tip: "Many won't have files ready. Tell them: 'Paste it directly — copy your last 3 Instagram captions and paste them in as plain text. That's a writing sample.' Mary: prompt people in chat who go quiet here.",
    },
    {
      step: "Test 3 prompts live — the proof moment (9 min)",
      script: "\"Your voice assistant is ready. Let's test her.\" [Run each prompt, you do it live first, then they follow.] Prompt 1: 'Write a caption about [a universal small-business topic — e.g. working from home, client wins, a tough week]. My voice. 3 sentences, no hashtags.' [Read it out. Pause.] 'Does that sound like you, or does it sound like a robot?' Prompt 2: 'Draft a 3-sentence reply to a potential client asking about my prices. Warm but confident.' Prompt 3: 'Write the first paragraph of a newsletter about why I started this business. My voice, my story.' [Ask 3 people to paste their Prompt 3 output in chat.]",
      tip: "Prompt 3 is the money moment. Personal story + their voice = emotional reaction. When they read their output and think 'I would have written it exactly like that' — that's when they open their wallets. Don't skip it. Read one from chat out loud.",
    },
    {
      step: "Showcase — 3 people share their voice output (15 min)",
      script: "\"Before we talk about what's next — 3 of you, share your screen for 90 seconds. Show us your Project and read one output that surprised you.\" [After each share, say something specific: 'That second sentence is very you — it's direct without being cold.' 'That's not AI writing, that's your voice with better formatting.'\"",
      tip: "When you say something specific and accurate about their output, the room realises: this thing actually worked. That's the social proof you can't manufacture. The person who shares a mediocre result makes others want more coaching. The person who shares a great result makes others want what they have. Both convert.",
    },
  ],
  transitionScript: "\"What you just built — that's the first piece of the AI version of you. In 30 minutes, with a free account, you trained Claude to write like you. Not like AI. Like you. Here's what I want you to sit with: most business owners are the bottleneck in their own business. Everything needs their voice, their judgment, their time. What we're building in the bootcamp is the version of you that runs when you can't. Week 1: three Claude Projects — your voice, your operations, your clients. Week 2: your AI employee in Cowork — it has file access, it executes tasks, it works while you sleep. Week 3: Claude Code — you describe what you want in English, it writes the software, you leave with a dashboard you built. Week 4: the full stack, running together, in a 10-minute daily routine. €247. 9 live sessions starting June 2. 4 deliverables you keep. That's the AI version of yourself. Let me show you exactly what each session builds.\"",
  pitchPoints: [
    "\"What you built today is the first layer. The bootcamp has 4 layers — and each one makes the AI version of you more complete.\"",
    "\"Week 1: 3 Claude Projects — your voice (done today), your operations, your clients. Claude trained on your actual business.\"",
    "\"Week 2: your AI employee. Cowork gives it file access. It can open your folders, sort your inbox, execute tasks. It works when you don't.\"",
    "\"Week 3: Claude Code. You describe what you want in English. Claude writes the software. You leave with a dashboard you built yourself.\"",
    "\"Week 4: everything runs together. Morning check-in, midday triage, end-of-day dashboard — under 10 minutes. The system runs whether you show up or not.\"",
    "\"€247 founding price. The AI version of you — your voice, your ops, your employees, your dashboard. Cohort 2 is €397. This price does not come back.\"",
    "\"Small group. Live. Both Abie and I are in every session. You are not learning from a recording — you're building with us.\"",
  ],
  objections: [
    {
      objection: "I can figure this out myself",
      response: "\"You just spent 30 minutes building a voice project with two instructors in the room. Week 3 is Claude Code in a terminal. Week 2 is Cowork with file system permissions. You could figure all of it out — it'll take you 6 months of broken prompts and wrong turns. We compress it to 4 weeks, live, with people who do this daily.\"",
    },
    {
      objection: "€247 is a lot for me right now",
      response: "\"How many hours a week do you spend writing content, emails, and client communication? If this saves you 3 hours a week, it pays for itself in the first month. €247 is also less than one hour with most business coaches. And you get 27 hours of live instruction plus everything you build.\"",
    },
    {
      objection: "I need to think about it",
      response: "\"Totally fair. What I'll say is: founding price closes tonight. Cohort 2 is €397 with no added benefit — just a higher price. If you're a yes next week, you're a yes today at a better price. The link is in chat. Sleep on it — but the founding price doesn't.\"",
    },
    {
      objection: "I'm not technical enough",
      response: "\"You just built a brand voice AI in 30 minutes with no tech background. That IS technical. We go extremely slow in Week 3 — terminal step by step, Mary in the chat the entire time. If you can describe what you want in English, you can do this bootcamp.\"",
    },
    {
      objection: "Will it really sound like me or will it still sound like AI?",
      response: "\"You just saw it work — and that was 30 minutes with basic samples. In Week 1 of the bootcamp we spend a full session going deep on voice instructions: what makes them specific, how to test and iterate, how to handle edge cases. By end of Week 1, people who know you can't tell the difference.\"",
    },
    {
      objection: "I'm not sure I have time for 9 sessions",
      response: "\"Sessions are Tuesday and Thursday, 4–7 PM CEST. Recordings go up within 24 hours. Miss one, watch the replay, still complete the deliverable. Between sessions it's 15–30 minutes a day. Most students tell us they're saving time by Week 3 because their AI stack is handling the repetitive stuff.\"",
    },
    {
      objection: "Does this work if I'm not in Europe?",
      response: "\"4–7 PM CEST: that's 10 AM New York, 7 AM LA, 10 PM Manila, 11 PM Manila, midnight in Dubai. We have students joining from [PH/Africa/etc.]. Recordings are always there for anyone who can't make it live.\"",
    },
  ],
  closingScript: "\"The link is going live right now. Mary is dropping it in chat. €247 founding price — closes tonight at midnight. After that it's €397 for Cohort 2. [Pause 10 seconds.] You came today because you wanted to learn AI. You're leaving with Claude writing in your actual voice. That's layer one. The bootcamp builds the other three — your AI employee, your dashboard, your daily routine. The full AI version of you. 4 weeks. Live with us. We'd love to have you on June 2. Link is in chat.\"",
  urgencyMechanics: [
    "Mary drops the Stripe link in chat at exactly 1:40 — not before. Scarcity works better when the moment is earned.",
    "Say 'founding price closes tonight at midnight' at least 3 times in the last 20 minutes. Repetition isn't annoying — it's a reminder people need.",
    "After dropping the link, go silent for 10 full seconds. Don't fill it. Let people click.",
    "If someone says 'I'm in' in chat, say their name out loud: 'Welcome, [Name] — see you June 2.' Real-time social proof converts the fence-sitters.",
    "Reference the voice output they just built: 'You saw what 30 minutes built. Imagine 4 weeks.' Use their own work as the pitch.",
    "Last 5 minutes: 'For anyone still on the fence — stay in the room, I'll answer anything privately for the next 5 minutes.'",
    "After the session ends: Mary sends a follow-up in Skool/chat with the link, one screenshot from today's builds, and '24 hours left at founding price.'",
  ],
};

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
      "\"Welcome to Cohort 1. I'm Abie, this is Mary — we both run our businesses on Claude every day. Over the next 4 weeks, you're not learning AI tools. You're building the AI version of yourself — Claude trained on your voice, your business, your clients. By the end of this session you'll have your first Project loaded with your actual docs. That's layer one. Let's go.\"",
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
      "Pick one project for the whole month. The AI version of you should know one business deeply, not five businesses shallowly.",
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
      "Final frame: 'You came in as the bottleneck in your business. You leave with an AI version of yourself that handles the parts that used to require you in the room.'",
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
      "You didn't just learn AI. You built the AI version of yourself. That's a different thing entirely.",
      "Keep updating your Projects. The AI version of you should grow as your business grows.",
      "The bottleneck used to be you. Now you have a system that runs without you in the room.",
      "Cohort 2 will see your builds, your screenshots, your routine. You're the proof that this works.",
    ],
  },
];
