import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </div>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 grid place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="w-9 h-9 grid place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}






