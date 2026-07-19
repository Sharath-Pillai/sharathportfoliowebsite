import { ArrowDown, Mail, Download } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './SocialIcons';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen hero-glow flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl reveal">
          {profile.openToWork && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Work
            </span>
          )}

          <p className="text-indigo-400 font-medium mb-3 tracking-wide uppercase text-sm">
            {profile.title}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
            {profile.tagline}
          </p>

          <p className="text-slate-500 flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {profile.location}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full glass hover:bg-white/5 font-medium transition-all"
            >
              View Projects
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-indigo-500 font-medium transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={profile.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-full glass hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white animate-bounce hidden md:block"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
