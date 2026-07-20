import { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { featuredProjects, miniProjects } from '../data/portfolio';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend / Mini' },
];

function ProjectCard({ project, large = false }) {
  return (
    <article
      className={`group glass rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'h-56' : 'h-44'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60" />
        <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-600/90 capitalize">
          {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
        </span>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <GitHubIcon size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const allProjects = [...featuredProjects, ...miniProjects];
  const filtered =
    filter === 'all'
      ? allProjects
      : filter === 'fullstack'
        ? featuredProjects
        : miniProjects;

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Full-stack applications and learning projects that showcase my development skills.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id
                    ? 'bg-indigo-600 text-white'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filter !== 'frontend' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Layers size={18} className="text-indigo-400" />
              <h3 className="font-semibold text-lg">Main Projects</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(filter === 'all' ? featuredProjects : filtered).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'frontend') && (
          <div>
            <h3 className="font-semibold text-lg mb-6 text-slate-300">
              Mini & Learning Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
