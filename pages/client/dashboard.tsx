import { useMemo, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../components/providers/AuthContext";
import {
  EquipmentItem,
  ManpowerSlot,
  ShutdownEvent,
  useRealtime
} from "../../components/providers/RealtimeContext";

type TabKey = "overview" | "manpower" | "maintenance" | "equipment" | "notifications";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
      <div
        className="h-full bg-emerald-500 transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export default function ClientDashboardPage() {
  const { isAuthenticated } = useAuth();
  const {
    milestones,
    manpower,
    shutdowns,
    equipment,
    notifications,
    markNotificationRead,
    addShutdownEvent
  } = useRealtime();

  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const [manpowerState, setManpowerState] = useState<ManpowerSlot[]>(manpower);

  const [newShutdown, setNewShutdown] = useState<Pick<
    ShutdownEvent,
    "title" | "type" | "date"
  >>({
    title: "",
    type: "Planned",
    date: ""
  });
  const [shutdownError, setShutdownError] = useState<string | null>(null);

  const [equipmentFilter, setEquipmentFilter] =
    useState<EquipmentItem["category"] | "All">("All");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredEquipment = useMemo(
    () =>
      equipmentFilter === "All"
        ? equipment
        : equipment.filter((e) => e.category === equipmentFilter),
    [equipment, equipmentFilter]
  );

  const totalProgress = useMemo(() => {
    if (!milestones.length) return 0;
    const sum = milestones.reduce((acc, m) => acc + m.progress, 0);
    return Math.round(sum / milestones.length);
  }, [milestones]);

  const handleAdjustManpower = (id: string, delta: number) => {
    setManpowerState((prev) =>
      prev.map((slot) => {
        if (slot.id !== id) return slot;
        const nextAssigned = Math.min(
          slot.countAvailable,
          Math.max(0, slot.countAssigned + delta)
        );
        return { ...slot, countAssigned: nextAssigned };
      })
    );
  };

  const handleCreateShutdown = () => {
    if (!newShutdown.title.trim() || !newShutdown.date) {
      setShutdownError("Enter a title and date for the shutdown or repair.");
      return;
    }
    setShutdownError(null);
    addShutdownEvent({
      title: newShutdown.title.trim(),
      type: newShutdown.type,
      date: newShutdown.date
    });
    setNewShutdown({ title: "", type: newShutdown.type, date: "" });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-xl mx-auto card-surface p-6 text-sm text-slate-200">
        <h1 className="text-2xl font-semibold text-slate-50 mb-2">Client Dashboard</h1>
        <p className="mb-3 text-slate-300">
          This area is restricted to MM Project Engineers clients. Please sign in to view
          real-time project updates, manpower status, maintenance calendar, and equipment
          progress.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-500 text-slate-950 font-semibold text-xs hover:bg-accent-500/90"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-sm text-slate-200">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-50 mb-1">
            Client Project Dashboard
          </h1>
          <p className="text-slate-300">
            Real-time view of project milestones, manpower deployment, shutdown planning, and
            equipment erection progress.
          </p>
        </div>
        <div className="card-surface px-4 py-2 flex items-center gap-4 text-xs">
          <div>
            <div className="text-slate-400">Overall Progress</div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-emerald-400">
                {totalProgress}%
              </span>
            </div>
          </div>
          <div className="w-32">
            <ProgressBar value={totalProgress} />
          </div>
        </div>
      </header>

      <nav className="flex flex-wrap gap-2 text-xs">
        {[
          { key: "overview", label: "Project Overview" },
          { key: "manpower", label: "Manpower Scheduling" },
          { key: "maintenance", label: "Maintenance & Shutdowns" },
          { key: "equipment", label: "Equipment Monitoring" },
          {
            key: "notifications",
            label: unreadCount ? `Notifications (${unreadCount})` : "Notifications"
          }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as TabKey)}
            className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
              activeTab === tab.key
                ? "bg-accent-500 text-slate-950 border-accent-500"
                : "border-slate-700 text-slate-300 hover:border-accent-500/70 hover:text-accent-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === "overview" && (
        <section className="grid gap-5 lg:grid-cols-[3fr,2fr] items-start">
          <div className="card-surface p-5 space-y-4">
            <h2 className="text-base font-semibold text-slate-50 mb-1">
              Project Milestones
            </h2>
            <div className="space-y-3">
              {milestones.map((m) => (
                <div key={m.id} className="border border-slate-800 rounded-md p-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-slate-100 text-sm font-semibold">{m.name}</div>
                    <span className="pill text-xs">
                      {m.status === "completed"
                        ? "Completed"
                        : m.status === "in_progress"
                        ? "In Progress"
                        : "Not Started"}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Planned: {m.plannedDate}</span>
                    {m.actualDate && <span>Actual: {m.actualDate}</span>}
                  </div>
                  <ProgressBar value={m.progress} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-surface p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                Manpower Snapshot
              </h3>
              <div className="space-y-2 text-xs">
                {manpowerState.map((slot) => {
                  const utilisation =
                    slot.countAvailable === 0
                      ? 0
                      : Math.round((slot.countAssigned / slot.countAvailable) * 100);
                  return (
                    <div key={slot.id} className="border border-slate-800 rounded-md p-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-100">{slot.trade}</span>
                        <span className="text-slate-300">
                          {slot.countAssigned}/{slot.countAvailable} assigned
                        </span>
                      </div>
                      <ProgressBar value={utilisation} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "manpower" && (
        <section className="card-surface p-5 space-y-4">
          <h2 className="text-base font-semibold text-slate-50">
            Manpower Scheduling & Availability
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl">
            Adjust on-site deployment for welders, fitters, riggers, and supervisors based on
            current project priorities. Counts below update in real time for this session.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {manpowerState.map((slot) => {
              const utilisation =
                slot.countAvailable === 0
                  ? 0
                  : Math.round((slot.countAssigned / slot.countAvailable) * 100);
              return (
                <div key={slot.id} className="border border-slate-800 rounded-md p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-100">{slot.trade}</span>
                    <span className="text-xs text-slate-400">
                      {slot.countAssigned}/{slot.countAvailable} assigned
                    </span>
                  </div>
                  <ProgressBar value={utilisation} />
                  <div className="flex gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => handleAdjustManpower(slot.id, -1)}
                      className="px-2 py-1 rounded-md border border-slate-700 text-slate-200 hover:border-accent-500/70"
                    >
                      - Remove
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAdjustManpower(slot.id, 1)}
                      className="px-2 py-1 rounded-md border border-slate-700 text-slate-200 hover:border-emerald-500/70"
                    >
                      + Assign
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {activeTab === "maintenance" && (
        <section className="grid gap-5 lg:grid-cols-[2fr,3fr] items-start">
          <div className="card-surface p-5 space-y-3">
            <h2 className="text-base font-semibold text-slate-50">
              Maintenance & Shutdown Scheduler
            </h2>
            <p className="text-xs text-slate-300">
              Plan annual shutdowns and log emergency repair events. Entries appear immediately
              in the shutdown list and trigger notifications.
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] mb-1 text-slate-300">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-500"
                  value={newShutdown.title}
                  onChange={(e) =>
                    setNewShutdown((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="e.g. Annual Maintenance – Boiler #2"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] mb-1 text-slate-300">
                    Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-500"
                    value={newShutdown.date}
                    onChange={(e) =>
                      setNewShutdown((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-[11px] mb-1 text-slate-300">Type</label>
                  <select
                    className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-500"
                    value={newShutdown.type}
                    onChange={(e) =>
                      setNewShutdown((prev) => ({
                        ...prev,
                        type: e.target.value as ShutdownEvent["type"]
                      }))
                    }
                  >
                    <option value="Planned">Planned</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
              </div>
              {shutdownError && (
                <p className="text-[11px] text-red-400">{shutdownError}</p>
              )}
              <button
                type="button"
                onClick={handleCreateShutdown}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-500 text-slate-950 font-semibold text-xs hover:bg-accent-500/90"
              >
                Add to Calendar
              </button>
            </div>
          </div>

          <div className="card-surface p-5 space-y-3">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Shutdown & Repair Calendar
            </h3>
            <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-1">
              {shutdowns.map((sd) => (
                <div
                  key={sd.id}
                  className="border border-slate-800 rounded-md p-3 flex flex-col gap-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-100">{sd.title}</span>
                    <span
                      className={`pill text-[10px] ${
                        sd.type === "Emergency"
                          ? "border-red-500/70 text-red-300"
                          : "border-amber-400/70 text-amber-200"
                      }`}
                    >
                      {sd.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>{sd.date}</span>
                    <span>{sd.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "equipment" && (
        <section className="card-surface p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-slate-50">
                Equipment Monitoring
              </h2>
              <p className="text-xs text-slate-300 max-w-xl">
                Track fabrication and erection progress for boilers, dryers, tanks, and heavy
                structures across your project.
              </p>
            </div>
            <div className="text-xs">
              <label className="mr-2 text-slate-300">Filter by category</label>
              <select
                className="rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-accent-500"
                value={equipmentFilter}
                onChange={(e) =>
                  setEquipmentFilter(
                    e.target.value === "All"
                      ? "All"
                      : (e.target.value as EquipmentItem["category"])
                  )
                }
              >
                <option value="All">All</option>
                <option value="Boiler">Boiler</option>
                <option value="Dryer">Dryer</option>
                <option value="Tank">Tank</option>
                <option value="Structure">Structure</option>
              </select>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {filteredEquipment.map((eq) => (
              <div
                key={eq.id}
                className="border border-slate-800 rounded-md p-3 text-xs space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-slate-100 font-semibold">{eq.name}</div>
                    <div className="text-slate-400">{eq.location}</div>
                  </div>
                  <span className="pill text-[10px]">{eq.category}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Status: {eq.status}</span>
                  <span>{eq.progress}%</span>
                </div>
                <ProgressBar value={eq.progress} />
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "notifications" && (
        <section className="card-surface p-5 space-y-3">
          <h2 className="text-base font-semibold text-slate-50">Notifications</h2>
          <p className="text-xs text-slate-300">
            Real-time alerts for project updates, inquiries, maintenance events, and system
            status.
          </p>
          <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-1">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`border rounded-md p-3 flex justify-between items-start gap-3 ${
                  n.read ? "border-slate-800 bg-slate-950/70" : "border-accent-500/50"
                }`}
              >
                <div>
                  <div className="mb-1 text-slate-100">{n.message}</div>
                  <div className="text-[11px] text-slate-500">{n.timestamp}</div>
                </div>
                {!n.read && (
                  <button
                    type="button"
                    onClick={() => markNotificationRead(n.id)}
                    className="text-[11px] text-accent-300 hover:text-accent-100"
                  >
                    Mark read
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

