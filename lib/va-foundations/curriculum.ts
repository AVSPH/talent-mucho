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
          "A Virtual Assistant isn't a generic 'do anything remotely' job ~ it's a business that sells a specific outcome. The most common myth is that VA work means answering emails and booking flights all day. In reality, the VAs who get hired (and stay hired) are the ones who frame themselves around a result: 'I keep your inbox at zero and your calendar conflict-free' is a sellable outcome. 'I do admin' is not.",
          "Clients hiring a VA usually fall into three buckets: solo founders drowning in operational tasks, small agencies that need a reliable second pair of hands without the overhead of a full-time hire, and coaches/creators who need someone to run the back-end of their business (scheduling, client communication, content logistics) so they can stay in their zone of genius.",
          "What clients are actually buying is trust and time back. They don't want to manage you ~ they want to hand you a problem and stop thinking about it. That means communication style, reliability, and follow-through often matter more than any specific software skill. Skills can be taught in a week; trustworthiness is what gets you retained for a year.",
          "Exercise: Write one sentence answering 'Who do I help, and what do they get to stop worrying about because of me?' You'll refine this sentence across the next three hours ~ it's the seed of your niche, your profile headline, and your pitch.",
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
          "A niche isn't a cage ~ it's a megaphone. 'VA for busy people' gets ignored. 'VA for online coaches who need their inbox, calendar, and client onboarding handled' gets remembered, because the right client immediately recognizes themselves in it. Pick a niche based on an industry you understand, tools you already know, or a problem you've personally solved (even informally, even unpaid).",
          "Build your starter service menu around 3-5 concrete deliverables, not vague categories. Instead of 'admin support,' list things like: inbox management (zero-inbox daily), calendar coordination across time zones, client onboarding sequences, light bookkeeping in Wave or QuickBooks, or social media scheduling. Concrete services are easier to price, easier to pitch, and easier for a client to say yes to.",
          "On rates: new VAs consistently undercharge out of fear, then burn out servicing too many clients to make ends meet. A simple starting framework: pick an hourly equivalent you'd be glad to work at (even if you're billing a flat retainer), multiply by realistic hours per client per week, and that's your retainer floor. Raise it every 2-3 clients as your proof (testimonials, results) accumulates.",
          "Package your offer two ways: an hourly/retainer option for ongoing support, and a project-based option (e.g. 'inbox + calendar cleanup sprint') for a lower-commitment first yes. Project packages are often the easiest way to land your very first paying client, because the risk to them is small and bounded.",
          "Exercise: Draft your starter offer using this template ~ 'I help [niche] with [3 services] so they can [outcome]. Starting at [rate].' Write it down before Hour 3; you'll be turning it directly into your profile copy.",
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
          "Each platform has a different job to do. LinkedIn is where you build authority and get warm introductions ~ treat your headline and About section like a mini case for why someone should trust you, not a resume. Upwork is a cold marketplace where clients are scanning fast ~ your title and first two lines of your overview need to pass the 3-second test. Talent Mucho is closer to a curated network, so specificity and proof of skill matter more than volume of applications.",
          "The biggest profile mistake new VAs make is writing like they're applying for a job ('Detail-oriented professional seeking opportunities...'). Clients don't hire resumes, they hire a sense of relief. Write in first person, lead with the outcome you deliver, and use plain language a stressed founder would actually use when describing their problem.",
          "A strong profile follows a simple shape: who you help → what you take off their plate → proof or example (even a personal project counts if you're new) → a clear next step ('Message me and tell me what's eating your time ~ I'll tell you how I'd fix it in the first week.'). Avoid burying your value under generic adjectives like 'hardworking' or 'reliable' ~ show it through specifics instead.",
          "If you have zero paid client history yet, that's fine ~ borrow credibility from adjacent experience: a messy inbox you organized for a friend's business, a content calendar you built for your own side project, a course you completed. Frame it as evidence of the skill, not as 'I have no experience.'",
          "Exercise: Using your Hour 2 offer line, draft your profile headline and a 3-sentence About section for one platform of your choice. We'll workshop a few live before moving to Hour 4.",
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
          "Cold outreach fails when it's about you ('I'm a VA looking for clients') and works when it's about them ('I noticed X about your business, and here's a specific way I could help'). The shift from 'please hire me' to 'I already understand your problem' is the entire game.",
          "A reliable outreach structure: (1) one sentence showing you actually looked at their business ~ a recent post, a gap on their site, a launch they're running; (2) one sentence naming the specific pain that creates for them; (3) one sentence offering a small, low-risk way you could help; (4) a soft, easy close ~ a question, not a demand. Example: 'Saw you just launched your group program ~ onboarding new members by hand at this volume has to be eating your week. I help coaches automate that exact handoff with Notion + email sequences. Want me to sketch what that'd look like for you, no charge, just to show you the idea?'",
          "Where to send it: don't wait for job posts. DM founders/creators directly on Instagram or LinkedIn, reply thoughtfully in communities where your niche hangs out, or offer a free 'audit' (e.g. 'I'll review your inbox setup and send you 3 quick wins') as a foot-in-the-door. The free audit converts surprisingly well because it removes all risk from the client's side.",
          "Handle the inevitable silence: most outreach gets no reply, and that's normal, not a signal you're bad at this. Send 10-15 messages a week rather than agonizing over 2 perfect ones. Volume plus specificity beats perfection plus paralysis.",
          "Homework before Day 2: send 3 real outreach messages using this structure, to 3 real businesses you'd actually want as clients. Bring whatever responses (or silence) you get ~ we'll troubleshoot live on Claude Day.",
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
          "The fear that AI replaces VAs misunderstands what clients are actually paying for: judgment, taste, and accountability for an outcome. AI doesn't have a relationship with the client, doesn't know which version of a draft the client will actually like, and can't be held responsible when something slips. A VA who uses AI well becomes the person who delivers 3x the output in the same hours ~ which makes you more valuable, not less.",
          "Think of Claude as a very capable, very fast junior assistant who needs clear direction. Your job shifts from 'doing every task by hand' to 'directing, reviewing, and finishing' ~ which is a higher-value skill that clients will pay more for once they see it in action.",
          "Live demo walkthrough: drafting a week's worth of client email replies from a few bullet points, turning a messy voice note into a clean meeting summary and action list, and restructuring a disorganized task list into a prioritized plan ~ all in minutes, with the VA reviewing and adjusting tone before anything goes to the client.",
          "The non-negotiable rule: AI drafts, you decide. Never send a client-facing message straight from Claude without reading it for accuracy and tone first ~ that review step is exactly the value you're being paid for.",
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
          "Your portfolio landing page is the single asset that makes outreach easier ~ instead of explaining what you do in a DM, you send one link that shows it. We'll build this live, end to end, in this session.",
          "Step 1 (15 min): Feed Claude your Hour 2/Hour 3 offer line and profile draft from Day 1, and ask it to turn that into landing page copy ~ a headline, a short 'who I help' section, your service list with outcomes (not just task names), and a closing call-to-action pointing to your email or booking link.",
          "Step 2 (45 min): Ask Claude to generate the actual page ~ a single clean HTML/CSS page (or a simple framework like Carrd/Notion if you prefer no-code) using the copy from Step 1. We'll go section by section live: hero, services, a short 'about me' with your niche story, and a contact CTA. Keep it to one page ~ a focused single-page site converts better than a sprawling multi-tab site for a new VA.",
          "Step 3 (20 min): Refine. Ask Claude to tighten any section that feels generic, swap out placeholder language for your real specifics, and check that every sentence answers 'what does this person actually do for me.'",
          "Step 4 (10 min): Publish it live and free using a static host (e.g. GitHub Pages, Netlify drop, or Vercel) or a no-code builder if you went that route. By the end of this hour you should have a real, working URL you can put directly into your outreach messages.",
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
          "A dashboard is what separates a VA who 'does tasks' from one who 'runs a system.' It's the single place you (and eventually your client) can see active clients, tasks in flight, and what's overdue ~ and it's a strong proof point to show prospective clients during a pitch.",
          "In this hour we scope a realistic starter version rather than a fully custom build (that's a multi-hour project on its own). You'll come away with a working template, not a finished custom system ~ the customization and hosting happens as take-home work after the session.",
          "Live build: ask Claude to generate a dashboard template covering three core views ~ Clients (name, services, status, next action), Tasks (by client, due date, status), and Invoices/Payments (client, amount, status, due date). We'll do this as a Notion template (fastest, no hosting needed) and show the equivalent as a simple spreadsheet for anyone who prefers that.",
          "Ask Claude to also generate the formulas/views you'd want ~ e.g. a filtered view showing only overdue tasks, or a rollup showing total outstanding invoices ~ so the dashboard does some of the thinking for you instead of just storing data.",
          "Take-home: customize the template with your real (or first prospective) clients, decide where you'll host it long-term (Notion workspace, Airtable, or a simple Google Sheet are all fine starting points), and bring questions about it to the certification Q&A in Hour 4.",
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
          "Completing both sessions and submitting your two deliverables (portfolio landing page link + dashboard template) qualifies you for Talent Mucho VA Foundations certification ~ a credential you can list on your profile and portfolio page as proof you've completed structured training, not just self-taught skills.",
          "The Talent Mucho VA network connects certified VAs with vetted client opportunities as they come in. Being listed isn't automatic employment ~ it's a warm introduction channel. What's expected from certified VAs: responsiveness within a reasonable window, the same outcome-first communication style covered on Day 1, and honesty about your current capacity (it's better to say 'I'm full right now' than to overcommit and underdeliver).",
          "Next steps after today: finish customizing your dashboard, send the outreach messages from your Day 1 homework if you haven't yet, and keep your portfolio landing page updated as you land real client wins ~ swap placeholder proof for real testimonials as soon as you get them.",
          "Final Q&A: bring any open questions about your offer, your profile, your build, or the certification process ~ this is the last live chance to get unstuck before you're working solo.",
        ],
        recordingUrl: null,
        resources: [],
      },
    ],
  },
];
