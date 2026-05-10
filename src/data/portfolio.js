export const profile = {
  name: "Tanush Tyagi",
  role: "Builder · Problem Solver · CS Engineer",
  headline: "I build software that solves real problems —",
  highlight: "from AI assistants to crisis-grade networks.",
  tagline:
    "Computer Science engineer focused on shipping production-ready tools across AI, cybersecurity and resilience tech. I turn fuzzy problems into clean, fast, useful software.",
  email: "sat.tyagi0707@gmail.com",
  github: "https://github.com/Tanush19-space/",
  linkedin: "https://www.linkedin.com/in/tanush-tyagi-93487b365/",
  resume: "/resume.pdf",
  location: "India · Open to Remote",
};

export const stats = [
  { value: "3+", label: "Shipped Projects" },
  { value: "5+", label: "Tech Stacks" },
  { value: "2", label: "Hackathons" },
  { value: "100%", label: "Self-driven" },
];

export const skills = [
  { name: "HTML", icon: "</>" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛" },
  { name: "JAVA", icon: "☕" },
  { name: "Python", icon: "🐍" },
];

export const projects = [
  {
    title: "Multilingual Chatbot",
    tag: "AI · LLM",
    problem:
      "Most AI assistants assume English-first users, leaving non-English speakers with a worse, slower experience.",
    solution:
      "A general-purpose AI assistant powered by the Groq API that understands and replies in multiple languages with sub-second latency. Deployed on Streamlit for instant access — no install required.",
    impact: [
      "Real-time responses with Groq's ultra-low latency inference",
      "Supports multilingual conversations out of the box",
      "Deployed end-to-end with zero-config Streamlit UI",
    ],
    stack: ["Python", "Groq API", "Streamlit", "LLM"],
    github: "https://github.com/Tanush19-space/",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "PhishGuard Lab",
    tag: "Cybersecurity · EdTech",
    problem:
      "Phishing causes 90%+ of breaches, yet most users have never been trained to spot a malicious email in the wild.",
    solution:
      "An interactive cybersecurity awareness app that puts users in front of realistic phishing emails. They classify each as phishing or legit, get scored, and receive instant explanations of the red flags they missed.",
    impact: [
      "Gamified learning loop with instant scored feedback",
      "Realistic email scenarios modeled on real attacker tactics",
      "Builds practical detection skills, not just theory",
    ],
    stack: ["JavaScript", "React", "HTML", "CSS"],
    github: "https://github.com/Tanush19-space/",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "ResQNet",
    tag: "Resilience Tech · Networking",
    problem:
      "When disasters knock out cell towers and Wi-Fi, the people who need to coordinate help the most are the ones who go silent.",
    solution:
      "An offline-first emergency communication network. Devices form a local mesh over Bluetooth / Wi-Fi Direct so users can fire off SOS alerts, share GPS, and coordinate with nearby responders — no internet required.",
    impact: [
      "Works in zero-connectivity disaster zones",
      "Device-to-device mesh — no central server, no single point of failure",
      "SOS + live location relay for first responders",
    ],
    stack: ["Java", "Android", "Bluetooth", "Wi-Fi Direct"],
    github: "https://github.com/Tanush19-space/",
    accent: "from-emerald-500 to-teal-500",
  },
];

/*
  TODO: Replace with your actual LinkedIn certificates.
  Go to your LinkedIn profile → Licenses & Certifications → copy each name.
  Example format:
  {
    title: "Certificate Name",
    org: "Issuing Organization",
    year: "2024",
    icon: "award",
  }
*/
export const achievements = [
  {
    title: "Your Certificate 1",
    org: "Issuing Org",
    year: "2024",
    icon: "award",
  },
  {
    title: "Your Certificate 2",
    org: "Issuing Org",
    year: "2024",
    icon: "award",
  },
  {
    title: "Your Certificate 3",
    org: "Issuing Org",
    year: "2023",
    icon: "award",
  },
];

export const experience = [
  {
    year: "2025",
    title: "Hackathon — ResQNet",
    org: "Built offline-first crisis comms network",
    type: "Hackathon",
  },
  {
    year: "2024",
    title: "PhishGuard Lab — Independent Project",
    org: "Cybersecurity awareness training tool",
    type: "Project",
  },
  {
    year: "2024",
    title: "Multilingual Chatbot",
    org: "AI assistant on Groq + Streamlit",
    type: "Project",
  },
  {
    year: "2023",
    title: "B.Tech Computer Science",
    org: "Currently pursuing — focus on AI & systems",
    type: "Education",
  },
];












