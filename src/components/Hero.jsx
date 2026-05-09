import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg" />
      <div className="noise" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Summer 2026 internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 font-display font-bold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl"
            >
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-gradient">{profile.name.split(" ")[1]}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-7 max-w-xl text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              {profile.headline}{" "}
              <span className="text-zinc-950 dark:text-white font-medium">
                {profile.highlight}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold text-sm hover:-translate-y-0.5 transition"
              >
                <Sparkles size={15} className="text-violet-500" />
                Contact Me
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 grid place-items-center rounded-xl glass hover:-translate-y-0.5 transition"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 grid place-items-center rounded-xl glass hover:-translate-y-0.5 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500"
            >
              <MapPin size={13} /> {profile.location}
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-2xl scale-110" />
              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl shadow-violet-500/10">
                <img
                  src="/images/my.jpg"
                  alt="Tanush Tyagi"
                  className="w-64 sm:w-72 lg:w-80 h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 glass rounded-xl px-4 py-2.5 shadow-lg"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Role</div>
                <div className="text-sm font-semibold">CS Engineer</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -top-3 -right-3 sm:-right-6 glass rounded-xl px-4 py-2.5 shadow-lg"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Focus</div>
                <div className="text-sm font-semibold">AI & Systems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-4 sm:p-5"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
