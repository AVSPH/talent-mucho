export interface LessonResource {
  label: string;
  url: string;
}

export interface Lesson {
  id: string;
  hour: string;
  title: string;
  items: string[];
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
        recordingUrl: null,
        resources: [],
      },
    ],
  },
];
