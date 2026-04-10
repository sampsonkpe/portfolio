const ongoing = [
  {
    title: "LightPath",
    description: "Public transport scheduling and tracking system",
    image: "/project-1.jpg",
  },
];

const completed = [
  {
    title: "AI Job Aggregator",
    description: "AI-powered job discovery across sources",
    image: "/project-2.jpg",
  },
  {
    title: "Transport API",
    description: "Weather-aware routing backend",
    image: "/project-3.jpg",
  },
];

export default function Projects() {
  return (
    <main className="pt-24 px-6 pb-24">
      <div className="mx-auto max-w-5xl">

        {/* Ongoing */}
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Ongoing
          </h2>

          <div className="grid gap-6">
            {ongoing.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completed */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Completed
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {completed.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}