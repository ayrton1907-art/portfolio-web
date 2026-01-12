export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Ayrton López
          </h1>
          <p className="mt-2 text-white/70">
            Desarrollador Backend — TypeScript · Node.js · NestJS · SQL
          </p>
        </header>

        {/* Projects */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Proyectos
            </h2>
            <span className="text-sm text-white/50">
              (Versión estática — API en desarrollo)
            </span>
          </div>

          <div className="space-y-8">
            {/* Proyecto Spartan */}
            <article className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Spartan</h3>
              <p className="mt-1 text-sm text-white/60">
                Plataforma de gestión y organización (WIP)
              </p>

              <p className="mt-4 text-white/80">
                Proyecto personal orientado a la gestión clara de procesos,
                estructura de negocio y visualización simple de información.
                Pensado para crecer de forma modular y mantenible.
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
                <li>Diseño enfocado en claridad y orden</li>
                <li>Estructura escalable desde el inicio</li>
                <li>Pensado como producto, no solo como app</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  Next.js
                </span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  TypeScript
                </span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  React
                </span>
              </div>

              <div className="mt-6">
                <a
                  href="https://github.com/ayrton1907-art/spartan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Ver repositorio
                </a>
              </div>
            </article>

            {/* Proyecto Sigma */}
            <article className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Proyecto Sigma</h3>
              <p className="mt-1 text-sm text-white/60">
                Sistema interno de seguimiento y análisis
              </p>

              <p className="mt-4 text-white/80">
                Sistema desarrollado íntegramente por mí para un entorno real
                de trabajo. Permite el seguimiento de presupuestos, clientes,
                fases de obra y métricas operativas para mejorar la toma de
                decisiones.
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
                <li>Lógica de negocio real llevada a código</li>
                <li>Automatización de seguimiento comercial</li>
                <li>Dashboards y métricas operativas</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  NestJS
                </span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  PostgreSQL
                </span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  React
                </span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">
                  TypeScript
                </span>
              </div>

              <div className="mt-6 text-sm text-white/50">
                Repositorio privado
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">
          Portfolio personal desarrollado con Next.js y TypeScript. Desplegado en Vercel.
        </footer>
      </div>
    </main>
  );
}
