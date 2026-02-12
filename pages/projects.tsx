import Link from "next/link";

const projects = [
  {
    id: "sugar-boiler",
    title: "Sugar Mill Boiler House",
    sector: "Sugar Industry",
    location: "Western India",
    scope: [
      "Fabrication and erection of boiler house structural steel",
      "Access platforms, staircases, and maintenance walkways",
      "Coordination of lifting, alignment, and grouting activities"
    ]
  },
  {
    id: "ethanol-distillation",
    title: "Ethanol Distillation Unit",
    sector: "Ethanol Plant",
    location: "Maharashtra",
    scope: [
      "Erection of distillation columns and associated structures",
      "Fermentation tank supports and pipe racks",
      "Process and utility piping with insulation-ready routing"
    ]
  },
  {
    id: "distillery-dryer",
    title: "Spent Wash Dryer System",
    sector: "Distillery & Dryer",
    location: "Distillery Complex",
    scope: [
      "Installation of spent wash dryer including shell and internals",
      "Ducting, cyclones, and support structures",
      "Integration with boiler and process systems"
    ]
  },
  {
    id: "process-piping",
    title: "Process & Utility Piping Network",
    sector: "Process & Utilities",
    location: "Process Plant",
    scope: [
      "MS/SS and alloy steel process piping",
      "Pipe supports, racks, and spring hangers",
      "Hydro testing, flushing, and commissioning assistance"
    ]
  },
  {
    id: "industrial-shed",
    title: "Industrial Shed & PEB Structure",
    sector: "Infrastructure",
    location: "Industrial Estate",
    scope: [
      "PEB shed erection with crane beams",
      "Sheeting, trims, and skylights",
      "Peripheral structures and platforms"
    ]
  },
  {
    id: "shutdown-maintenance",
    title: "Annual Shutdown & Revamp",
    sector: "Shutdown & Maintenance",
    location: "Multiple Sites",
    scope: [
      "Planned shutdown execution for mechanical and piping systems",
      "Critical equipment replacement and revamping",
      "Emergency breakdown repair teams"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50 mb-2">
            Featured Projects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            A snapshot of representative fabrication, erection, and maintenance works delivered
            by MM Project Engineers across sugar, ethanol, distillery, boiler, and process
            sectors.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent-500 text-slate-950 font-semibold text-sm shadow-lg shadow-orange-900/40 hover:bg-accent-500/90 transition-colors"
        >
          Discuss your project
        </Link>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="card-surface p-6 space-y-3 scroll-mt-24"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-50">{project.title}</h2>
              <span className="pill text-[10px] text-accent-300 border-accent-500/60">
                {project.sector}
              </span>
            </div>
            <p className="text-xs text-slate-400">{project.location}</p>
            <ul className="text-sm text-slate-300 list-disc list-inside space-y-1.5">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/client/dashboard"
                className="text-xs text-cyan-300 hover:text-cyan-100 font-medium"
              >
                Track similar projects in the client dashboard →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

