import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-0 -mt-10 lg:-mt-12">
      {/* Intro Splash Animation */}
      {showSplash && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center mm-splash-backdrop mm-splash-fade">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/40">
              <span className="text-slate-950 font-extrabold text-xl">MM</span>
            </div>
            <div className="mm-splash-logo">
              <div className="text-xs tracking-[0.35em] text-slate-400 uppercase">
                Project Engineers
              </div>
              <div className="text-[11px] tracking-[0.4em] text-slate-500 uppercase">
                Engineering • Fabrication • Erection
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-slate-900/80 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/mm-team-hero.png')"
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-cyan-500/30">
                  ⚡ Engineering Excellence Since 2024
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Build The
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Structural steel fabrication, mechanical erection, and industrial installation
                for sugar, ethanol, distillery, boiler, and process plants – executed with a
                relentless focus on quality, safety, and on-time delivery.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 font-semibold text-base"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-slate-600 text-white px-8 py-3.5 rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300 font-semibold text-base"
                >
                  View Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-slate-400 text-sm">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <div className="text-slate-400 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Simple animated gradient cards */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm animate-pulse"></div>
                  <div className="h-56 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm"></div>
                  <div className="h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm animate-pulse delay-700"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Structural Design",
                description: "Advanced structural engineering for buildings and infrastructure that stand the test of time.",
                color: "cyan"
              },
              {
                icon: "⚙️",
                title: "Mechanical Systems",
                description: "Innovative mechanical solutions optimized for efficiency and performance.",
                color: "blue"
              },
              {
                icon: "💡",
                title: "Electrical Engineering",
                description: "Smart electrical designs that power your projects with reliability and sustainability.",
                color: "cyan"
              },
              {
                icon: "🔧",
                title: "Project Management",
                description: "End-to-end project coordination ensuring on-time and on-budget delivery.",
                color: "blue"
              },
              {
                icon: "📊",
                title: "Consulting",
                description: "Expert consultation to guide your projects from concept to completion.",
                color: "cyan"
              },
              {
                icon: "🌱",
                title: "Sustainable Design",
                description: "Eco-friendly engineering solutions that minimize environmental impact.",
                color: "blue"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="relative py-16 sm:py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Selected fabrication and erection projects delivered across sugar, ethanol,
                distillery, boiler, and process plants.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-600 text-slate-100 text-sm hover:border-cyan-400/80 hover:text-cyan-100 transition-colors"
            >
              View all projects
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "sugar-boiler",
                title: "Sugar Mill Boiler House",
                location: "Western India",
                sector: "Sugar Industry",
                scope: "Structural fabrication and boiler structure erection."
              },
              {
                id: "ethanol-distillation",
                title: "Ethanol Distillation Unit",
                location: "Maharashtra",
                sector: "Ethanol Plant",
                scope: "Column erection, platforms, and process piping."
              },
              {
                id: "distillery-dryer",
                title: "Spent Wash Dryer System",
                location: "Distillery Complex",
                sector: "Distillery & Dryer",
                scope: "Dryer installation with ducting and support structures."
              },
              {
                id: "process-piping",
                title: "Process & Utility Piping",
                location: "Process Plant",
                sector: "Process & Utilities",
                scope: "MS/SS piping, supports, and testing."
              },
              {
                id: "industrial-shed",
                title: "Industrial Shed & PEB",
                location: "Industrial Estate",
                sector: "Infrastructure",
                scope: "PEB shed erection, crane beams, and platforms."
              },
              {
                id: "shutdown-maintenance",
                title: "Annual Shutdown Execution",
                location: "Multiple Sites",
                sector: "Shutdown & Maintenance",
                scope: "Mechanical revamp and emergency repair works."
              }
            ].map((project) => (
              <article
                key={project.id}
                className="group bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="pill text-[10px] text-cyan-200 border-cyan-500/60">
                      {project.sector}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{project.location}</p>
                  <p className="text-sm text-slate-300">{project.scope}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/projects#${project.id}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-200"
                  >
                    More details
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MM Engineers?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                We combine technical expertise with creative innovation to deliver exceptional results that drive your success.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Expert Team", desc: "Certified professionals with decades of combined experience" },
                  { title: "Cutting-Edge Technology", desc: "Latest tools and methodologies for optimal solutions" },
                  { title: "Client-Focused", desc: "Your vision is our priority, every step of the way" },
                  { title: "Proven Track Record", desc: "Hundreds of successful projects across industries" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
                      <div className="flex-1 h-3 bg-slate-600 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-600 rounded w-full"></div>
                      <div className="h-2 bg-slate-600 rounded w-4/5"></div>
                      <div className="h-2 bg-slate-600 rounded w-3/5"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                      <div className="text-3xl font-bold text-cyan-400">100%</div>
                      <div className="text-slate-400 text-sm">Quality</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <div className="text-3xl font-bold text-blue-400">24/7</div>
                      <div className="text-slate-400 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's turn your vision into reality. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 font-semibold text-base"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/client/dashboard"
              className="border-2 border-slate-600 text-white px-8 py-3.5 rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300 font-semibold text-base"
            >
              View Client Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}