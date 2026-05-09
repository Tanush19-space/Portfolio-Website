import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-12 sm:mb-16"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400">
        <span className="w-1 h-1 rounded-full bg-violet-500" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
