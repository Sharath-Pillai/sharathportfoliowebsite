import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          My professional journey from frontend freelancer to full-stack developer.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={job.role + job.period} className="relative pl-12 md:pl-20">
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />

                <div className="glass rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{job.role}</h3>
                        <p className="text-indigo-400 text-sm">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
