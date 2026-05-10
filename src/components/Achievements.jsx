import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="Certifications"
        title={
          <>
            Credentials that back{" "}
            <span className="text-gradient">my skills.</span>
          </>
        }
      />

      <motion.a
        href="https://www.linkedin.com/in/tanush-tyagi-93487b365/details/certifications/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="block glass rounded-2xl p-8 hover:-translate-y-1 transition group relative overflow-hidden max-w-xl mx-auto"
      >
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition blur-3xl" />
        <div className="relative flex items-center gap-5">
          <div className="w-14 h-14 shrink-0 rounded-xl grid place-items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg">
            <Award size={24} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-base sm:text-lg">
              View All Certifications
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              See my verified certificates on LinkedIn — including course completions, skill assessments, and professional credentials.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400">
              Open on LinkedIn <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </motion.a>
    </Section>
  );
}






