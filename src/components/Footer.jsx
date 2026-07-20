import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {year} {profile.name}. Built with React.
        </p>
        <p>
          Available for full-time & freelance opportunities
        </p>
      </div>
    </footer>
  );
}
