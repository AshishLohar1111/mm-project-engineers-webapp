import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../components/providers/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Enter email and password.");
      return;
    }
    setSubmitting(true);
    const ok = await login(email, password);
    setSubmitting(false);
    if (!ok) {
      setError("Invalid credentials. Please try again.");
      return;
    }
    router.replace("/client/dashboard");
  };

  return (
    <div className="max-w-md mx-auto card-surface p-6 text-sm text-slate-200">
      <h1 className="text-2xl font-semibold text-slate-50 mb-2">Client Login</h1>
      <p className="text-slate-300 mb-4">
        Secure access for MM Project Engineers clients to monitor project progress, manpower,
        shutdowns, and equipment status in real time.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>
        <div>
          <label className="block text-xs mb-1 text-slate-300">
            Password <span className="text-red-400">*</span>
          </label>
          <input
            type="password"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-accent-500 text-slate-950 font-semibold text-sm shadow-lg shadow-orange-900/40 hover:bg-accent-500/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? "Signing in..." : "Sign In"}
        </button>
        <p className="text-xs text-slate-400">
          Demo mode: use any email and password to sign in. Production should be integrated
          with a secure backend authentication service.
        </p>
      </form>
    </div>
  );
}

