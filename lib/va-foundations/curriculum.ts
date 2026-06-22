export interface LessonResource {
  label: string;
  url: string;
}

export interface Lesson {
  id: string;
  hour: string;
  title: string;
  items: string[];
  content: string[];
  recordingUrl: string | null;
  resources: LessonResource[];
}

export interface Session {
  num: string;
  date: string;
  title: string;
  theme: string;
  lessons: Lesson[];
}

export const VA_FOUNDATIONS_CURRICULUM: Session[] = [
  {
    num: "01",
    date: "Fri, Jul 17",
    title: "The Foundation",
    theme: "Who a VA is and how to position yourself to get hired",
    lessons: [
      {
        id: "d1-h1",
        hour: "Hour 1",
        title: "What It Really Means to Be a VA",
        items: [
          "What a VA actually does vs. what most people think",
          "Who hires VAs and what they're really looking for",
        ],
        content: [
          "A VA isn't 'do anything remotely' ~ it's a business that sells a specific outcome. Lead with the result, not the task list.",
          "Example: say 'I keep your inbox at zero and your calendar conflict-free,' not 'I do admin.'",
          "Who actually hires VAs: solo founders drowning in ops, small agencies needing reliable extra hands, coaches/creators who need their back-end run so they can stay in their zone of genius.",
          "What clients are really buying: trust and time back. They want to hand you a problem and stop thinking about it ~ reliability and communication matter more than any single software skill.",
          "Exercise: Finish this sentence ~ 'I help [who], so they can stop worrying about [what].' Keep it; you'll reuse it in Hours 2-4.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d1-h2",
        hour: "Hour 2",
        title: "Your Offer: Niche, Services, and Rates",
        items: [
          "How to choose a niche and build a service menu",
          "Exercise: Draft your starter service offer and rates",
        ],
        content: [
          "Pick a niche from an industry you understand, a tool you already know, or a problem you've solved before (even unpaid). A specific niche gets remembered; 'VA for busy people' gets ignored.",
          "Example: 'VA for online coaches who need their inbox, calendar, and client onboarding handled.'",
          "List 3-5 concrete services, not vague categories. Example service menu: inbox management (zero-inbox daily), calendar coordination, client onboarding sequences, light bookkeeping (Wave/QuickBooks), social media scheduling.",
          "Pricing: pick an hourly rate you'd be glad to work at, multiply by realistic weekly hours per client ~ that's your retainer floor. Raise it every 2-3 clients as proof builds.",
          "Offer two formats: an ongoing retainer, and a low-commitment project package (e.g. 'inbox + calendar cleanup sprint') as an easy first yes.",
          "Exercise: Fill in the template ~ 'I help [niche] with [3 services] so they can [outcome]. Starting at [rate].' Write your version down before Hour 3.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d1-h3",
        hour: "Hour 3",
        title: "Your VA Profile and Online Presence",
        items: [
          "LinkedIn, Upwork, and Talent Mucho: how to show up on each",
          "Writing a profile that sounds human, not like a job application",
        ],
        content: [
          "Each platform has a different job: LinkedIn builds authority for warm intros, Upwork needs to pass a 3-second scan, Talent Mucho rewards specificity and proof over volume.",
          "Avoid resume language like 'Detail-oriented professional seeking opportunities.' Clients hire relief, not resumes ~ write in first person, plain language.",
          "Profile shape to follow: who you help → what you take off their plate → proof or example → a clear next step.",
          "Example closing line: 'Message me and tell me what's eating your time ~ I'll tell you how I'd fix it in the first week.'",
          "No paid clients yet? Borrow credibility from adjacent proof: a messy inbox you organized for a friend, a content calendar for your own project, a relevant course you finished.",
          "Exercise: Using your Hour 2 offer line, draft a headline + 3-sentence About section for one platform. We'll workshop a few live.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d1-h4",
        hour: "Hour 4",
        title: "Pitching and Getting Your First Client",
        items: [
          "The cold outreach method that actually works",
          "Homework: Send 3 outreach messages before Day 2",
        ],
        content: [
          "Outreach fails when it's about you ('I'm a VA looking for work') and works when it's about them ('I already understand your problem').",
          "4-line outreach structure: (1) show you looked at their business, (2) name the specific pain that creates, (3) offer a small low-risk way to help, (4) close with an easy question.",
          "Example message: 'Saw you just launched your group program ~ onboarding new members by hand at this volume has to be eating your week. I help coaches automate that exact handoff with Notion + email sequences. Want me to sketch what that'd look like for you, no charge, just to show you the idea?'",
          "Where to send it: DM founders/creators directly, reply thoughtfully in niche communities, or offer a free mini-audit (e.g. '3 quick wins for your inbox') as a no-risk foot-in-the-door.",
          "Silence is normal, not a verdict on you. Send 10-15 messages a week instead of agonizing over 2 perfect ones.",
          "Homework: Send 3 real outreach messages using this structure to 3 real businesses you'd actually want as clients. Bring whatever responses (or silence) you get to Day 2.",
        ],
        recordingUrl: null,
        resources: [],
      },
    ],
  },
  {
    num: "02",
    date: "Sat, Jul 18",
    title: "Claude Day",
    theme: "Build your VA business assets with AI, live",
    lessons: [
      {
        id: "d2-h1",
        hour: "Hour 1",
        title: "Working Smarter with Claude",
        items: [
          "Why AI makes VAs more valuable, not replaceable",
          "Live demo: Claude doing real VA work in real time",
        ],
        content: [
          "Clients pay for judgment, taste, and accountability ~ things AI doesn't have. A VA who uses AI well delivers 3x the output in the same hours, which makes you more valuable, not less.",
          "Think of Claude as a fast, capable junior assistant that needs clear direction. Your job becomes directing, reviewing, and finishing ~ a higher-value skill clients will pay more for.",
          "Live demo covers: turning bullet points into a week's worth of client email replies, turning a messy voice note into a clean meeting summary + action list, restructuring a disorganized task list into a prioritized plan.",
          "Golden rule: AI drafts, you decide. Never send a client-facing message straight from Claude without reading it for accuracy and tone first.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d2-h2",
        hour: "Hour 2 (90 min)",
        title: "Build Your Portfolio Landing Page with Claude",
        items: [
          "Hands-on: Claude writes your bio and builds your portfolio landing page",
          "How to publish it free before the session ends",
        ],
        content: [
          "Step 1 (15 min) ~ Copy: Feed Claude your Day 1 offer line + profile draft and ask for landing page copy: headline, 'who I help' section, service list framed as outcomes, closing call-to-action.",
          "Example prompt: 'Using this offer line and profile, write landing page copy with a headline, a 3-sentence intro, 3-5 services framed as client outcomes, and a closing CTA pointing to my email.'",
          "Step 2 (45 min) ~ Build: Ask Claude to generate the actual page (simple HTML/CSS, or Carrd/Notion if you prefer no-code) using that copy, built section by section: hero, services, short 'about me,' contact CTA. One focused page beats a sprawling multi-tab site.",
          "Step 3 (20 min) ~ Refine: Ask Claude to tighten any section that sounds generic and swap in your real specifics. Check every sentence answers 'what does this person actually do for me.'",
          "Step 4 (10 min) ~ Publish: Host it live and free (GitHub Pages, Netlify drop, Vercel, or your no-code builder's publish button). Leave with a real working URL to put in outreach messages.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d2-h3",
        hour: "Hour 3",
        title: "Build Your VA Dashboard with Claude",
        items: [
          "Hands-on: Claude generates your starter dashboard template",
          "Take-home: customize and host it after the session",
        ],
        content: [
          "A dashboard is what separates 'does tasks' from 'runs a system' ~ one place to see active clients, tasks in flight, and what's overdue. It's also a strong proof point in a pitch.",
          "This hour scopes a realistic starter template, not a finished custom build ~ customization/hosting happens as take-home work.",
          "Ask Claude to generate three core views: Clients (name, services, status, next action), Tasks (by client, due date, status), Invoices/Payments (client, amount, status, due date).",
          "Example prompt: 'Generate a Notion dashboard template for a VA with views for Clients, Tasks by due date, and Invoices, including a filtered view for overdue tasks and a rollup for total outstanding invoices.'",
          "Take-home: customize the template with your real (or first prospective) clients, pick where you'll host it long-term (Notion, Airtable, or a simple Google Sheet are all fine), and bring questions to Hour 4.",
        ],
        recordingUrl: null,
        resources: [],
      },
      {
        id: "d2-h4",
        hour: "Hour 4 (30 min)",
        title: "Certification + Next Steps",
        items: [
          "Talent Mucho VA network: how it works, what's expected",
          "Certification requirements + final Q&A",
        ],
        content: [
          "Certification requires completing both sessions and submitting your two deliverables: portfolio landing page link + dashboard template.",
          "The Talent Mucho VA network is a warm introduction channel to vetted client opportunities ~ not automatic placement.",
          "What's expected once certified: responsiveness within a reasonable window, outcome-first communication (see Hour 1, Day 1), and honesty about your current capacity ~ 'I'm full right now' beats overcommitting.",
          "Next steps: finish customizing your dashboard, send your Day 1 outreach homework if you haven't yet, and keep your portfolio landing page updated with real testimonials as you land wins.",
          "Final Q&A: bring open questions about your offer, profile, build, or certification ~ last live chance to get unstuck before working solo.",
        ],
        recordingUrl: null,
        resources: [],
      },
    ],
  },
];
