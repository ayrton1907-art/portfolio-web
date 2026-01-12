type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  visibility: 'public' | 'private';
  links?: { label: string; url: string }[];
};

async function getProjects(): Promise<Project[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) return [];

  const res = await fetch(`${baseUrl}/projects`, { cache: 'no-store' });
  if (!res.ok) return [];

  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Ayrton López</h1>
        <p className="text-base text-neutral-600">
          Backend Developer — TypeScript · Node.js · NestJS · SQL
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Projects</h2>

        <div className="mt-4 grid gap-4">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-600">
                  {p.visibility === 'private' ? 'Private' : 'Public'}
                </span>
              </div>

              <p className="mt-2 text-sm text-neutral-700">{p.description}</p>

              <p className="mt-3 text-sm text-neutral-700">
                <span className="font-semibold">Stack:</span>{' '}
                {p.stack.join(' · ')}
              </p>

              {p.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          {!projects.length ? (
            <p className="text-sm text-neutral-600">
              No projects loaded. Make sure the API is running on port 3001.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
