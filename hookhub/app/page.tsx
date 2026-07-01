import { hooks, type Category } from "@/lib/hooks";

const categoryStyles: Record<Category, string> = {
  "Security & Guardrails":
    "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  "Git & Version Control":
    "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  "Testing & Quality Gates":
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  Notifications:
    "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  "Logging & Observability":
    "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
  "Formatting & Linting":
    "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  "Session Management":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-16 dark:bg-black sm:px-12">
      <div className="w-full max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            HookHub
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A browsable directory of cool, open-source Claude Code hooks.
          </p>
        </header>

        <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hooks.map((hook) => (
            <article
              key={hook.repoUrl}
              className="flex flex-col gap-3 rounded-xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  {hook.name}
                </h2>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${categoryStyles[hook.category]}`}
                >
                  {hook.category}
                </span>
              </div>
              <p className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {hook.description}
              </p>
              <a
                href={hook.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-950 underline underline-offset-4 hover:no-underline dark:text-zinc-50"
              >
                View repository →
              </a>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
