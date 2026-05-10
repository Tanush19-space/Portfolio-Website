import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            Tools I use to <span className="text-gradient">ship things.</span>
          </>
        }
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="w-14 h-14 mx-auto rounded-xl grid place-items-center bg-gradient-to-br from-violet-500/10 to-cyan-500/10 text-violet-600 dark:text-violet-400 font-mono text-lg font-bold border border-violet-500/20 group-hover:scale-110 transition">
                {s.icon}
              </div>
              <div className="mt-4 font-semibold text-sm">{s.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}











