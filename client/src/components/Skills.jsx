import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Technologies I use to build full-stack, production-ready applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
