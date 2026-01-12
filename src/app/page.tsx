import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  status?: string;
  description: string[];
  bullets: string[];
  tags: string[];
  repoUrl?: string;
  privateNote?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Proyecto Sigma",
    subtitle: "Sistema de seguimiento y decisión para procesos de venta complejos",
    status: "Privado",
    description: [
      "El proceso existía, pero no había visibilidad real: presupuestos dispersos, seguimientos inconsistentes y decisiones reactivas.",
      "En lugar de sumar pantallas o métricas sueltas, diseñé un sistema central basado en fases, reglas y señales para transformar datos crudos en decisiones claras.",
      "La prioridad no fue “mostrar más”, sino entender mejor: reducir ruido y aumentar trazabilidad.",
    ],
    bullets: [
      "Eje por obra y fases para ordenar el flujo comercial",
      "Reglas de negocio claras y versionables (criterio antes que UI)",
      "Seguimiento operativo y señales accionables para pasar de reactivo a proactivo",
      "Dashboards y métricas orientadas a control y mejora continua",
    ],
    tags: ["NestJS", "PostgreSQL", "React", "TypeScript"],
    privateNote:
      "Repositorio privado por confidencialidad. Puedo explicar arquitectura y decisiones, y mostrar capturas o un demo acotado en entrevista.",
  },
  {
    title: "Spartan",
    subtitle: "Framework conceptual para ordenar operaciones y diseñar sistemas claros",
    status: "WIP (Privado)",
    description: [
      "Spartan es un proyecto personal: un laboratorio para transformar procesos desordenados en estructuras simples, comprensibles y escalables.",
      "Antes de escribir código, el foco está en entender el flujo completo: decisiones, fricción y qué información realmente importa.",
      "El sistema se diseña desde la lógica, no desde la interfaz.",
    ],
    bullets: [
      "Diseño de sistemas antes de implementación",
      "Reducción consciente de complejidad (menos ruido, más señal)",
      "Pensamiento estructural aplicado a problemas reales",
    ],
    tags: ["Next.js", "TypeScript", "React"],
    privateNote:
      "Repositorio privado por ahora. Puedo explicar el enfoque, decisiones técnicas y mostrar un demo acotado en entrevista.",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const common =
    "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition";
  return isExternal ? (
    <a className={common} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden className="opacity-60">
        →
      </span>
    </a>
  ) : (
    <Link className={common} href={href}>
      {children}
      <span aria-hidden className="opacity-60">
        →
      </span>
    </Link>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-white/65">{p.subtitle}</p>
        </div>

        {p.status ? (
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {p.status}
          </span>
        ) : null}
      </div>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
        {p.description.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {p.bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {p.privateNote ? (
        <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
          {p.privateNote}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-5">
        {p.repoUrl ? (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Ver repositorio →
          </a>
        ) : (
          <span className="text-sm text-white/50">Repositorio no público</span>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* fondo suave */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        {/* HERO */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ayrton López
            </h1>

            <p className="text-white/65">
              Desarrollador Backend — Sistemas, automatización y lógica de negocio
            </p>

            <p className="max-w-2xl text-sm text-white/70">
              Diseño sistemas que ordenan el caos y convierten datos en decisiones.
              Arquitectura de procesos, lógica de negocio y automatización para equipos
              que necesitan claridad, no más ruido.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="https://www.linkedin.com/in/ayrtonemiliolopez/">
              LinkedIn
            </ButtonLink>
            <ButtonLink href="https://github.com/ayrton1907-art">GitHub</ButtonLink>
            {/* Dejá tu CV en /public/cv.pdf */}
            <ButtonLink href="/cv.pdf">Descargar CV</ButtonLink>
            <ButtonLink href="/about">Sobre mí</ButtonLink>
          </div>
        </header>

        {/* PROYECTOS */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
            <span className="text-xs text-white/45">
              Algunos proyectos son privados por confidencialidad. El foco está en el
              enfoque y las decisiones.
            </span>
          </div>

          <div className="mt-6 grid gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 Ayrton López — Portfolio personal
        </footer>
      </div>
    </main>
  );
}
