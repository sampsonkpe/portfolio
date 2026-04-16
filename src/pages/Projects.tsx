import { useState, useEffect } from "react";

/* ================= DATA ================= */

const ongoing = [
  {
    title: "LightPath",
    description: "Public transport scheduling and tracking system",
    images: ["/project-1.png", "/project-1b.png", "/project-1c.png", "/project-1d.png"],
    features: [
      "Secure user authentication",
      "Passenger, conductor, and admin management",
      "Route and trip scheduling",
      "Weather-based trip simulation",
    ],
    stack: ["Python", "JavaScript", "HTML", "CSS", "PostgreSQL"],
    github: "https://github.com/sampsonkpe/capstone-lightpath-lite",
    demo: "",
  },
  {
    title: "Ride-Compare",
    description: "Real-time ride-hailing comparison tool",
    images: ["/project-2.png", "/project-2b.png", "/project-2c.png", "/project-2d.png"],
    features: [
      "Compare ride prices and ETA",
      "Deep links to ride providers",
      "Saved frequent routes",
      "Cross-device sync",
    ],
    stack: ["JavaScript", "Python", "React", "Django"],
    github: "https://github.com/sampsonkpe/ride-compare",
    demo: "https://ridecompare-co.lovable.app/",
  }
];

const completed = [
  {
    title: "Priven Wedding Website",
    description: "Premium wedding RSVP and event website",
    images: ["/project-3.png", "/project-3b.png", "/project-3c.png"],
    features: [
      "RSVP form with Google Sheets integration",
      "Maps and event details",
      "Add-to-calendar functionality",
      "Cinematic UI design",
    ],
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/sampsonkpe/priven",
    demo: "https://priven.vercel.app/",
  },
  {
    title: "Wistech Corporate Website",
    description: "A modern corporate website for a tech company",
    images: ["/project-5.png", "/project-5b.png", "/project-5c.png", "/project-5d.png", "/project-5e.png", "/project-5f.png", "/project-5g.png", "/project-5h.png"],
    features: [
      "Modern UI/UX design",
      "Responsive web layout",
      "Custom animations and interactions",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sampsonkpe/wistech",
    demo: "https://wistech.vercel.app/",
  },
  {
    title: "AI Job Aggregator",
    description: "AI-powered job discovery platform",
    images: ["/project-4.png", "/project-4b.png", "/project-4c.png"],
    features: [
      "Aggregated AI job listings",
      "Save and track opportunities",
    ],
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "",
    demo: "https://jradar.lovable.app/",
  },
];

/* ================= UTIL ================= */

function getColor(tech: string) {
  if (tech === "HTML") return "bg-orange-500";
  if (tech === "CSS") return "bg-blue-500";
  if (tech === "JavaScript") return "bg-yellow-400";
  if (tech === "TypeScript") return "bg-blue-300";
  if (tech === "Python") return "bg-green-700";
  if (tech === "React") return "bg-cyan-400";
  if (tech === "Django") return "bg-pink-500";
  if (tech === "PostgreSQL") return "bg-teal-200";
  return "bg-neutral-400";
}

/* ================= CARD ================= */

function Card({ project, onClick }: any) {
  return (
    <div className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition">

      {/* CLICKABLE IMAGE */}
      <div onClick={onClick} className="cursor-pointer">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">

        {/* TOP ROW */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{project.title}</h3>

          {project.demo && (
            <a href={project.demo} target="_blank" className="text-sm text-primary hover:underline">
              Live Demo
            </a>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-center">

          {/* STACK */}
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech: string) => (
              <div key={tech} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={`h-2 w-2 rounded-full ${getColor(tech)}`} />
                {tech}
              </div>
            ))}
          </div>

          {/* GITHUB */}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src="/icons/github-light.png" className="h-6 w-6 dark:hidden" />
              <img src="/icons/github-dark.png" className="h-6 w-6 hidden dark:block" />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */

function Modal({ project, onClose }: any) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!project || paused) return;

    const interval = setInterval(() => {
      setIndex((i: number) => (i + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, project?.images.length]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6 z-50"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <img
            src={project.images[index]}
            className="w-full aspect-video object-cover transition-opacity duration-700"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <h2 className="text-lg font-semibold">{project.title}</h2>

          <p className="text-sm text-muted-foreground mt-2">
            {project.description}
          </p>

          {/* FEATURES */}
          <ul className="mt-4 space-y-1 text-sm">
            {project.features.map((f: string) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>

          {/* STACK */}
          <div className="flex flex-wrap gap-3 mt-5">
            {project.stack.map((tech: string) => (
              <div key={tech} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={`h-2 w-2 rounded-full ${getColor(tech)}`} />
                {tech}
              </div>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex justify-between items-center mt-6">

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img src="/icons/github-light.png" className="h-6 w-6 dark:hidden" />
                <img src="/icons/github-dark.png" className="h-6 w-6 hidden dark:block" />
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" className="text-sm text-primary hover:underline">
                Live Demo
              </a>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="pt-24 px-6 pb-24">
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="text-2xl font-semibold mb-12">
          Projects
        </h1>

        {/* ONGOING */}
        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Ongoing
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {ongoing.map((p) => (
              <Card key={p.title} project={p} onClick={() => setSelected(p)} />
            ))}
          </div>
        </section>

        {/* COMPLETED */}
        <section>
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Completed
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {completed.map((p) => (
              <Card key={p.title} project={p} onClick={() => setSelected(p)} />
            ))}
          </div>
        </section>

      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}