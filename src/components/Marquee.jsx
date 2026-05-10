const items = [
  "React",
  "TypeScript",
  "Python",
  "Java",
  "Groq API",
  "Streamlit",
  "Tailwind",
  "JavaScript",
  "HTML / CSS",
  "Cybersecurity",
  "AI / LLM",
  "Wi-Fi Direct",
];

export default function Marquee() {
  return (
    <div className="relative py-8 border-y border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#07070a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#07070a] to-transparent z-10" />
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-2xl sm:text-3xl font-display font-semibold text-zinc-400 dark:text-zinc-600"
          >
            {item}
            <span className="ml-12 text-violet-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}







