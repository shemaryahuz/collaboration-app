export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Collaboration App
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Welcome to the Collaboration App
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">
          This is a Next.js application designed for real-time collaboration.
        </p>
      </section>
    </main>
  );
}
