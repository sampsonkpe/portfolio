import Hero from "../components/Hero";

const preview = [
  {
    title: "LightPath",
    image: "/project-1.png",
    stack: ["Python", "JavaScript", "HTML", "CSS", "PostgreSQL", "Django"],
    github: "https://github.com/sampsonkpe/capstone-lightpath-lite",
    demo: "",
  },
  {
    title: "Ride-Compare",
    image: "/project-2.png",
    stack: ["JavaScript", "Python", "CSS", "HTML", "React"],
    github: "https://github.com/sampsonkpe/ride-compare",
    demo: "https://ridecompare-co.lovable.app/",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Projects preview */}
      <section className="px-6 mt-8 pb-16">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            Projects
          </p>

          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {preview.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col gap-4">

                  {/* TOP ROW */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="text-xs text-primary hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  {/* BOTTOM ROW */}
                  <div className="flex items-center justify-between">

                    {/* STACK */}
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              tech === "HTML"
                                ? "bg-orange-500"
                                : tech === "CSS"
                                ? "bg-blue-500"
                                : tech === "JavaScript"
                                ? "bg-yellow-400"
                                : tech === "TypeScript"
                                ? "bg-blue-300"
                                : tech === "Python"
                                ? "bg-green-700"
                                : tech === "React"
                                ? "bg-cyan-400"
                                : tech === "Django"
                                ? "bg-pink-600"
                                : tech === "PostgreSQL"
                                ? "bg-teal-600"
                                : "bg-neutral-400"
                            }`}
                          />
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* GITHUB ICON (LIGHT/DARK SWITCH) */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons/github-light.png"
                        className="h-6 w-6 dark:hidden"
                      />
                      <img
                        src="/icons/github-dark.png"
                        className="h-6 w-6 hidden dark:block"
                      />
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}