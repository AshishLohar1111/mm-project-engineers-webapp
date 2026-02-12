export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-3 text-center">
          About MM Project Engineers
        </h1>

        <p className="text-slate-300 text-sm sm:text-base w-full">
          We are a professionally managed erection and fabrication contracting company
          specializing in the execution of structural steel fabrication, mechanical erection,
          piping installation, and industrial maintenance works. With a strong focus on{" "}
          <span className="font-semibold text-slate-100">quality</span>,{" "}
          <span className="font-semibold text-slate-100">safety</span>, and{" "}
          <span className="font-semibold text-slate-100">timely delivery</span>, we support
          industrial and commercial projects across diverse sectors including sugar, ethanol,
          distillery, dryer systems, boiler systems, and process plants.
        </p>

      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-5">
          <h2 className="text-lg font-semibold text-slate-50 mb-2">Mission</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            <li>Deliver quality workmanship on every project.</li>
            <li>Maintain the highest safety standards at all sites.</li>
            <li>Ensure timely project completion without compromising quality.</li>
          </ul>
        </div>
        <div className="card-surface p-5">
          <h2 className="text-lg font-semibold text-slate-50 mb-2">Vision</h2>
          <p className="text-sm text-slate-300">
            To be the trusted partner in industrial fabrication and erection services, known
            for reliability, technical expertise, and strong execution capabilities.
          </p>
        </div>
      </section>

      <section className="card-surface p-5 flex flex-col items-center">
  <h2 className="text-lg font-semibold text-slate-50 mb-6 text-center">
    Core Values
  </h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full text-sm text-slate-300">
    <div className="p-4 bg-slate-800 rounded-lg shadow">
      <h3 className="font-semibold text-slate-100 mb-2">Quality Excellence</h3>
      <p>
        We deliver superior workmanship by following approved drawings,
        specifications, and quality control procedures. Every project is
        executed with precision, durability, and attention to detail.
      </p>
    </div>
    <div className="p-4 bg-slate-800 rounded-lg shadow">
      <h3 className="font-semibold text-slate-100 mb-2">Customer Commitment</h3>
      <p>
        Client satisfaction drives everything we do. We work closely with
        customers to understand their requirements and deliver solutions that
        meet or exceed expectations.
      </p>
    </div>
    <div className="p-4 bg-slate-800 rounded-lg shadow">
      <h3 className="font-semibold text-slate-100 mb-2">Timely Execution</h3>
      <p>
        We understand the importance of deadlines. Through efficient planning,
        skilled manpower, and effective site management, we ensure projects are
        completed on time without compromising quality or safety.
      </p>
    </div>
    <div className="p-4 bg-slate-800 rounded-lg shadow">
      <h3 className="font-semibold text-slate-100 mb-2">Integrity & Transparency</h3>
      <p>
        We conduct our business with honesty, fairness, and transparency. Our
        clients trust us because we stand by our commitments and maintain
        ethical practices at all levels.
      </p>
    </div>
  </div>
</section>
</div>
  );
}

