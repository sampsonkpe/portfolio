export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-6">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
        Sampson Kojo Kpe
      </h1>

      <p className="mt-3 text-lg md:text-xl font-medium text-primary">
        Backend Developer • IT Support
      </p>

      <p className="mt-4 max-w-md text-muted-foreground text-base">
        Building clean, performant web experiences with modern tools.
      </p>

      <a
        href="https://github.com/sampsonkpe"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub profile"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:opacity-80 hover:scale-105 hover:shadow-lg active:scale-100"
      >
        GitHub
      </a>
    </section>
  );
}