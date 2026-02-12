import { useRouter } from "next/router";
import Link from "next/link";

export default function ContactThankYouPage() {
  const router = useRouter();
  const name = (router.query.name as string) || "Client";

  return (
    <div className="max-w-xl mx-auto card-surface p-6 text-sm text-slate-200">
      <h1 className="text-2xl font-semibold text-slate-50 mb-3">Thank You</h1>
      <p className="mb-3 text-slate-300">
        Thank you, {name}, for reaching out to MM Project Engineers. Your inquiry has been
        received. Our team will review your requirements and get in touch with you shortly.
      </p>
      <p className="mb-4 text-slate-300">
        If your requirement is urgent, you can also contact us directly on the phone numbers
        mentioned below.
      </p>
      <div className="mb-4">
        <div className="text-xs font-semibold text-slate-200 tracking-[0.18em] uppercase mb-1">
          Phone
        </div>
        <p className="text-slate-300 space-y-0.5">
          <span className="block">+91 96044 90274</span>
          <span className="block">+91 70835 31790</span>
          <span className="block">+91 96040 40399</span>
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-500 text-slate-950 font-semibold text-xs hover:bg-accent-500/90"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-600 text-slate-100 text-xs hover:border-accent-400/80"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

