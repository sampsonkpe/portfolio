import { useState } from "react";

const ongoing = [
  {
    title: "LightPath",
    description: "Public transport scheduling and tracking system",
    image: "/project-1.png",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/sampsonkpe/capstone-lightpath-lite",
    demo: "",
  },
  {
    title: "Ride-Compare",
    description: "Real-time ride-sharing price comparison tool",
    image: "/project-2.png",
    stack: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/sampsonkpe/ride-compare",
    demo: "https://ridecompare-co.lovable.app/",
  }
];

const completed = [
  {
    title: "Wedding RSVP Website",
    description: "Custom RSVP site for wedding guests",
    image: "/project-3.png",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/sampsonkpe/priven",
    demo: "https://priven.vercel.app/",
  },
  {
    title: "AI Job Aggregator",
    description: "AI-powered job discovery across sources",
    image: "/project-4.png",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "",
    demo: "https://jradar.lovable.app//",
  },
];

export default function Projects() {
  return (
    <main className="pt-24 px-6 pb-24">
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="text-2xl font-semibold text-foreground mb-10">
          Projects
        </h1>

        {/* Ongoing */}
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Ongoing
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {ongoing.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-card-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
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
                className="group rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-card-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
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