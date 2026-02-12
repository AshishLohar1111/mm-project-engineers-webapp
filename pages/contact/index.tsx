import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useRealtime } from "../../components/providers/RealtimeContext";

export default function ContactPage() {
  const router = useRouter();
  const { pushNotification } = useRealtime();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!phone.trim()) next.phone = "Phone number is required.";
    if (!message.trim()) next.message = "Please describe your requirement.";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      // In a real app this would post to an API or CRM.
      console.log("Inquiry submitted", { name, company, email, phone, message });
      pushNotification(
        `New inquiry from ${name} (${company || "Client"}) – ${phone}`,
        "info"
      );
      router.push({
        pathname: "/contact/thank-you",
        query: { name }
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-2">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Share your project requirements for structural fabrication, mechanical erection,
            piping, or maintenance support. Our team will get back to you with a tailored
            solution.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-surface p-5 space-y-4 text-sm text-slate-200"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-xs mb-1 text-slate-300">Company</label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1 text-slate-300">
              Requirement / Message <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent-500 text-slate-950 font-semibold text-sm shadow-lg shadow-orange-900/40 hover:bg-accent-500/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Sending..." : "Submit Inquiry"}
          </button>

          <p className="text-xs text-slate-400">
            By submitting this form, you authorize us to contact you regarding your requirement.
          </p>
        </form>
      </section>

      <aside className="space-y-4">
        <div className="card-surface p-5 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-slate-50 mb-3">Office Address</h2>
          <p className="text-slate-300 mb-3">
            Rio Greens, Flat No. 1109, Sr. No. 34/8B, P, Hinjewadi, Mulashi, Kasarsai, Pune –
            410506, Maharashtra, India.
          </p>
          <h3 className="text-xs font-semibold text-slate-200 tracking-[0.18em] uppercase mb-2">
            Phone
          </h3>
          <p className="text-slate-300 space-y-0.5">
            <span className="block">+91 96044 90274</span>
            <span className="block">+91 70835 31790</span>
            <span className="block">+91 96040 40399</span>
          </p>
        </div>
        <div className="card-surface p-4 text-xs text-slate-300">
          <div className="flex flex-col items-center text-center p-8">
            <h3 className="text-slate-100 font-semibold mb-6">Industrial Focus</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Sugar</div>
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Ethanol</div>
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Distillery</div>
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Dryer Systems</div>
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Boiler Systems</div>
              <div className="p-4 bg-slate-800 rounded-lg shadow text-slate-300">Process & Utility Plants</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

