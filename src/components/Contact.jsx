import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Have a role, idea, or project?{" "}
            <span className="text-gradient">Let's talk.</span>
          </>
        }
        description="I read every message. Recruiters, founders, hackathon teams — all welcome."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=<sat.tyagi0707@gmail.com>`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 hover:-translate-y-1 transition group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-2xl group-hover:opacity-30 transition" />
          <div className="relative">
            <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Mail size={18} />
            </div>
            <div className="mt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">Email</div>
              <div className="mt-1 font-medium text-sm">{profile.email}</div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400">
              Send an email <ExternalLink size={12} />
            </div>
          </div>
        </motion.a>

        <motion.a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass rounded-2xl p-6 hover:-translate-y-1 transition group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 blur-2xl group-hover:opacity-30 transition" />
          <div className="relative">
            <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <LinkedinIcon size={18} />
            </div>
            <div className="mt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">LinkedIn</div>
              <div className="mt-1 font-medium text-sm">/in/tanush-tyagi-93487b365</div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              Connect on LinkedIn <ExternalLink size={12} />
            </div>
          </div>
        </motion.a>

        <motion.a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="glass rounded-2xl p-6 hover:-translate-y-1 transition group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-20 blur-2xl group-hover:opacity-30 transition" />
          <div className="relative">
            <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-zinc-700 to-zinc-900 text-white shadow-lg">
              <GithubIcon size={18} />
            </div>
            <div className="mt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">GitHub</div>
              <div className="mt-1 font-medium text-sm">@Tanush19-space</div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              View repositories <ExternalLink size={12} />
            </div>
          </div>
        </motion.a>
      </div>
    </Section>
  );
}
