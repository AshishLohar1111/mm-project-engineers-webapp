const services = [
  {
    title: "Structural Steel Fabrication & Erection",
    key: "Structural Fabrication",
    description:
      "Fabrication and erection of MS/SS structures including platforms, pipe racks, sheds, and support structures for industrial and infrastructure projects.",
    bullets: [
      "Fabrication of mild steel and stainless steel structural members",
      "Heavy and light structural works for plants and utilities",
      "Pipe racks, galleries, mezzanines, and maintenance platforms",
      "Industrial shed and PEB structure erection with alignment and grouting"
    ]
  },
  {
    title: "Mechanical Equipment Erection",
    key: "Equipment Erection",
    description:
      "End-to-end mechanical erection services for heavy equipment in sugar, ethanol, distillery, and utility plants.",
    bullets: [
      "Boilers, dryers, reactors, columns, and storage tanks",
      "Heavy equipment shifting, alignment, and leveling",
      "Support structures, access platforms, and connected piping",
      "Coordination with OEMs and commissioning teams"
    ]
  },
  {
    title: "Piping Fabrication & Installation",
    key: "Piping",
    description:
      "Shop and site fabrication, erection, and testing of process and utility piping networks.",
    bullets: [
      "MS, SS, and alloy steel piping for process and utility services",
      "Steam, condensate, water, oil, and process lines",
      "Fabrication of pipe supports, hangers, and racks",
      "Hydro testing, pneumatic testing, and commissioning support"
    ]
  },
  {
    title: "Shutdown & Maintenance Services",
    key: "Shutdowns & Maintenance",
    description:
      "Planned shutdowns, revamping, and emergency maintenance support with strict adherence to safety and timelines.",
    bullets: [
      "Annual maintenance shutdown planning and execution",
      "Plant modifications, capacity enhancement, and revamping",
      "Breakdown and emergency repair works on critical equipment",
      "Multi-disciplinary teams for mechanical, structural, and piping jobs"
    ]
  },
  {
    title: "Skilled Manpower Supply",
    key: "Manpower Supply",
    description:
      "Deployment of trained and certified manpower for fabrication, erection, and maintenance activities.",
    bullets: [
      "Engineers and site supervisors for project coordination",
      "Qualified welders, fitters, riggers, and fabricators",
      "Flexible deployment models: short-term, shutdown-based, and long-term",
      "Safety-oriented workforce with proper PPE and toolbox training"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col items-center text-center p-8 mt-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6">
          Core Services
        </h1>
        <p className="text-slate-300 text-sm sm:text-base w-full max-w-4xl">
          We offer end-to-end erection and fabrication services for industrial, infrastructure,
          and process plants, ensuring safe execution, high quality, and timely completion.
          Our teams combine on-site experience with strong planning and supervision.
        </p>
      </section>


      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.key} className="card-surface p-5 flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">{service.title}</h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mt-1">
                {service.key}
              </p>
            </div>
            <p className="text-sm text-slate-300">{service.description}</p>
            <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

