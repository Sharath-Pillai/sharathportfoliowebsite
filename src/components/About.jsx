import { stats, profile, education } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
      
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">{profile.bio}</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 text-center hover:border-indigo-500/30 transition-colors">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {education.map((item) => (
              <div key={item.degree} className="glass rounded-xl p-5 border-l-2 border-indigo-500">
                <span className="text-xs text-indigo-400 font-medium">{item.period}</span>
                <h4 className="font-semibold mt-1">{item.degree}</h4>
                <p className="text-sm text-slate-400 mt-1">{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
