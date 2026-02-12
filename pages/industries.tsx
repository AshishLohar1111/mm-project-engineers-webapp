const industries = [
  {
    name: "Sugar Industry",
    description:
      "Structural and mechanical works for sugar mills, crushing plants, and associated process units.",
    bullets: [
      "Mill house structures, cane carrier, and conveyors",
      "Juice heaters, evaporators, pans, and piping",
      "Boiler structures, chimneys, and bagasse handling",
      "Equipment erection and interconnecting piping"
    ]
  },
  {
    name: "Ethanol Plants",
    description:
      "Fabrication and erection for ethanol production units including fermentation, distillation, and storage.",
    bullets: [
      "Fermentation tanks, distillation columns, and platforms",
      "Process and utility piping for ethanol and condensate",
      "Structural works for pipe racks and service platforms",
      "Integration with existing sugar/distillery infrastructure"
    ]
  },
  {
    name: "Distillery Industry",
    description:
      "Molasses and grain-based distillery projects with complete mechanical, structural, and piping scope.",
    bullets: [
      "Reactors, columns, tanks, and accessories",
      "Spent wash handling systems and dryer integration",
      "Piping networks for process fluids and utilities",
      "Equipment alignment, grouting, and commissioning support"
    ]
  },
  {
    name: "Dryer Systems",
    description:
      "Installation of rotary, flash, and spent wash dryers with supporting structures and ducting.",
    bullets: [
      "Rotary dryers, flash dryers, and grain dryers",
      "Ducting, cyclones, and structural supports",
      "Associated platforms, ladders, and walkways",
      "Integration with boiler and process systems"
    ]
  },
  {
    name: "Boiler Systems",
    description:
      "Boiler erection and associated structural and piping works for power and process applications.",
    bullets: [
      "Bagasse-fired and power boilers with auxiliaries",
      "Pressure parts erection and header routing",
      "Ducting, chimneys, and air/flue gas systems",
      "Boiler structural steel and access platforms"
    ]
  },
  {
    name: "Process & Utility Plants",
    description:
      "General process and utility systems for industrial plants, ensuring reliable and safe operation.",
    bullets: [
      "Storage tanks, utility piping, and manifolds",
      "Cooling water, compressed air, and service pipelines",
      "Equipment supports, platforms, and industrial structures",
      "Revamping and capacity enhancement works"
    ]
  }
];

export default function IndustriesPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col items-center justify-center text-center p-8 mt-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6">
          Industries Served
        </h1>
        <p className="text-slate-300 text-sm sm:text-base w-full max-w-4xl">
          We specialize in erection and fabrication services for process-based industrial plants,
          with strong expertise in the sugar, ethanol, and distillery sectors, along with boiler
          and dryer systems. Our teams are experienced in working under live plant conditions
          while maintaining safety and minimizing downtime.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry.name} className="card-surface p-5 flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">{industry.name}</h2>
            </div>
            <p className="text-sm text-slate-300">{industry.description}</p>
            <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
              {industry.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

