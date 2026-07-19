import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Download, Loader2 } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './SocialIcons';
import toast, { Toaster } from 'react-hot-toast';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const apiBase = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong. Please email directly.');
      }
    } catch {
      toast.error(
        `Could not reach the server. Please email me at ${profile.email}`,
        { duration: 5000 }
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid rgba(148,163,184,0.2)',
          },
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Recruiters and hiring managers — reach out for opportunities, collaborations, or project
          discussions. I typically respond within 24 hours.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-indigo-500/30 transition-colors"
              >
                <LinkedInIcon size={22} className="text-indigo-400" />
                <span className="text-xs text-slate-400">LinkedIn</span>
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-indigo-500/30 transition-colors"
              >
                <GitHubIcon size={22} className="text-indigo-400" />
                <span className="text-xs text-slate-400">GitHub</span>
              </a>
              <a
                href={profile.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-indigo-500/30 transition-colors"
              >
                <LeetCodeIcon size={22} className="text-indigo-400" />
                <span className="text-xs text-slate-400">LeetCode</span>
              </a>
            </div>

            <a
              href={profile.cvPath}
              download="Sharath_Pillai_CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Download size={18} />
              Download Resume for Recruiters
            </a>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder:text-slate-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
            >
              {sending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
