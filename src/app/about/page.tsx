export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Sobre mí</h1>
          <p className="max-w-3xl text-white/70">
            Soy desarrollador backend enfocado en convertir procesos reales de negocio en
            sistemas claros, mantenibles y medibles. Me importa más el impacto y la lógica
            que la moda tecnológica.
          </p>
        </header>

        <section className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Cómo trabajo</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Primero entiendo el problema y las reglas del negocio.</li>
              <li>• Después diseño una solución simple, modular y escalable.</li>
              <li>• Priorizo mantenibilidad: nombres, estructura, y decisiones justificables.</li>
              <li>• Me gusta medir: métricas, tableros y feedback del uso real.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Stack principal</h2>
            <p className="mt-3 text-sm text-white/75">
              TypeScript · Node.js · NestJS · SQL · PostgreSQL
            </p>
            <p className="mt-2 text-sm text-white/60">
              También trabajé con PHP, Vue y automatizaciones. Uso IA como apoyo, pero cuido
              fundamentos y calidad del código.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">Qué estoy buscando</h2>
            <p className="mt-3 text-sm text-white/75">
              Roles backend (remoto o híbrido) donde la comunicación, el pensamiento lógico
              y la mejora continua del producto sean tan importantes como el código.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
          >
            Volver al inicio <span className="opacity-60">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
