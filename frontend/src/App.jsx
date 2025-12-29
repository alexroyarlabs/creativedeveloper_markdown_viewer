import { Route, Routes } from "react-router-dom";
import ProjectPage from "./features/project/ProjectPage";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,_var(--primary),_transparent_70%)] opacity-30 blur-3xl float-slow"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_var(--secondary),_transparent_70%)] opacity-25 blur-3xl float-slow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grid"
          aria-hidden="true"
        />
        <header className="relative z-10 px-6 pt-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                CD
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  Creative Developer
                </p>
                <p className="text-lg font-semibold">Project Briefing</p>
              </div>
            </div>
            <div className="hidden text-sm text-[var(--ink-muted)] md:block">
              Markdown Tabs
            </div>
          </div>
        </header>
        <main className="relative z-10 px-6 pb-20 pt-10">
          <Routes>
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/" element={<ProjectPage />} />
            <Route path="*" element={<ProjectPage />} />
          </Routes>
        </main>
        <footer className="relative z-10 px-6 pb-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6 text-sm text-[var(--ink-muted)] shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
            <p>Built for fast creative collaboration.</p>
            <div className="flex gap-4">
              <a className="hover:text-[var(--ink)]" href="#">
                Privacy
              </a>
              <a className="hover:text-[var(--ink)]" href="#">
                Terms
              </a>
              <a className="hover:text-[var(--ink)]" href="#">
                Status
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
