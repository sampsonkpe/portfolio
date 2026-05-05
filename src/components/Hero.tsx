export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-16 pb-10 px-6">
      
      {/* NAME */}
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
        Sampson Kojo Kpe
      </h1>

      {/* ROLE */}
      <p className="mt-8 text-lg md:text-xl font-medium text-primary">
        Backend Developer | Systems & IT Support
      </p>

      {/* TAGLINE */}
      <p className="mt-3 max-w-lg text-muted-foreground text-base">
        Turning complex problems into simple, scalable backend systems and reliable IT solutions.
      </p>

      {/* CTA */}
      <a
        href="https://github.com/sampsonkpe"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub profile"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-80 hover:scale-[1.02]"
      >
        {/* Light mode icon */}
        <img
          src="/icons/github-dark.png"
          className="h-6 w-6 dark:hidden"
        />

        {/* Dark mode icon */}
        <img
          src="/icons/github-light.png"
          className="h-6 w-6 hidden dark:block"
        />

        GitHub
      </a>

    </section>
  );
}