import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { projects } from "../data/portfolio";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title={
          <>
            Projects that solved{" "}
            <span className="text-gradient">real problems.</span>
          </>
        }
        description="Each one started as a question I couldn't stop thinking about. Click through for code and demos."
      />

      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
            />
            <div
              className={`absolute -left-32 -top-32 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl pointer-events-none`}
            />

            <div className="relative grid lg:grid-cols-12 gap-6 p-6 sm:p-8">
              {/* Left: meta */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-zinc-500">
                    0{i + 1} /
                  </span>
                  <span
                    className={`text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${p.accent} bg-clip-text text-transparent font-semibold`}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  {p.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:opacity-90 transition"
                    >
                      <GithubIcon size={13} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-semibold hover:-translate-y-0.5 transition"
                    >
                      Live Demo <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right: content */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-500 mb-2">
                    Problem
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {p.problem}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">
                    Solution
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {p.solution}
                  </p>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-black/5 dark:border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-violet-500 mb-3">
                    Impact
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {p.impact.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 text-emerald-500 shrink-0"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}









