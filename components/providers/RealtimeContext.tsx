import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export interface ProjectMilestone {
  id: string;
  name: string;
  status: "not_started" | "in_progress" | "completed";
  progress: number;
  plannedDate: string;
  actualDate?: string;
}

export interface ManpowerSlot {
  id: string;
  trade: "Welder" | "Fitter" | "Rigger" | "Supervisor";
  countAvailable: number;
  countAssigned: number;
}

export interface ShutdownEvent {
  id: string;
  type: "Planned" | "Emergency";
  title: string;
  date: string;
  status: "Scheduled" | "Ongoing" | "Completed";
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: "Boiler" | "Dryer" | "Tank" | "Structure";
  location: string;
  progress: number;
  status: "Fabrication" | "Erection" | "Testing" | "Commissioned";
}

export interface NotificationItem {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "alert";
  timestamp: string;
  read: boolean;
}

interface RealtimeContextValue {
  milestones: ProjectMilestone[];
  manpower: ManpowerSlot[];
  shutdowns: ShutdownEvent[];
  equipment: EquipmentItem[];
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  pushNotification: (message: string, type?: NotificationItem["type"]) => void;
  addShutdownEvent: (event: Omit<ShutdownEvent, "id" | "status"> & { status?: ShutdownEvent["status"] }) => void;
}

const RealtimeContext = createContext<RealtimeContextValue | undefined>(undefined);

interface RealtimeProviderProps {
  children: ReactNode;
}

export function RealtimeProvider({ children }: RealtimeProviderProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => [
    {
      id: "n1",
      message: "Boiler structure erection for Sugar Plant Phase II reached 75% completion.",
      type: "success",
      timestamp: new Date().toISOString(),
      read: false
    },
    {
      id: "n2",
      message: "Planned shutdown confirmed for Ethanol Unit on 28 Feb.",
      type: "info",
      timestamp: new Date().toISOString(),
      read: false
    }
  ]);

  // Static demo data for now; in production this would be fetched via APIs and updated via websockets/SSE
  const milestones = useMemo<ProjectMilestone[]>(
    () => [
      {
        id: "m1",
        name: "Structural Fabrication – Boiler House",
        status: "in_progress",
        progress: 65,
        plannedDate: "2026-03-15"
      },
      {
        id: "m2",
        name: "Piping Installation – Condensate Line",
        status: "not_started",
        progress: 0,
        plannedDate: "2026-04-01"
      },
      {
        id: "m3",
        name: "Mechanical Erection – Dryer System",
        status: "completed",
        progress: 100,
        plannedDate: "2026-02-01",
        actualDate: "2026-01-28"
      }
    ],
    []
  );

  const manpower = useMemo<ManpowerSlot[]>(
    () => [
      { id: "mp1", trade: "Welder", countAvailable: 18, countAssigned: 14 },
      { id: "mp2", trade: "Fitter", countAvailable: 22, countAssigned: 19 },
      { id: "mp3", trade: "Rigger", countAvailable: 10, countAssigned: 8 },
      { id: "mp4", trade: "Supervisor", countAvailable: 6, countAssigned: 5 }
    ],
    []
  );

  const [shutdowns, setShutdowns] = useState<ShutdownEvent[]>([
    {
      id: "sd1",
      type: "Planned",
      title: "Annual Maintenance – Sugar Mill",
      date: "2026-03-01",
      status: "Scheduled"
    },
    {
      id: "sd2",
      type: "Emergency",
      title: "Boiler Leak Repair – Distillery Unit",
      date: "2026-02-10",
      status: "Ongoing"
    }
  ]);

  const equipment = useMemo<EquipmentItem[]>(
    () => [
      {
        id: "eq1",
        name: "Bagasse-fired Boiler #2",
        category: "Boiler",
        location: "Sugar Plant – Boiler House",
        progress: 72,
        status: "Erection"
      },
      {
        id: "eq2",
        name: "Spent Wash Dryer",
        category: "Dryer",
        location: "Distillery – Dryer Block",
        progress: 100,
        status: "Commissioned"
      },
      {
        id: "eq3",
        name: "Fermentation Tank T-104",
        category: "Tank",
        location: "Ethanol Unit – Fermentation",
        progress: 40,
        status: "Fabrication"
      },
      {
        id: "eq4",
        name: "Main Mill Structure",
        category: "Structure",
        location: "Sugar Plant – Mill House",
        progress: 55,
        status: "Erection"
      }
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulated periodic notification
      setNotifications((prev) => {
        if (prev.length > 6) return prev;
        const now = new Date().toISOString();
        return [
          {
            id: `n-${now}`,
            message: "Live status heartbeat: project telemetry is online.",
            type: "info",
            timestamp: now,
            read: false
          },
          ...prev
        ];
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const pushNotification = (
    message: string,
    type: NotificationItem["type"] = "info"
  ) => {
    const now = new Date().toISOString();
    setNotifications((prev) => [
      {
        id: `u-${now}`,
        message,
        type,
        timestamp: now,
        read: false
      },
      ...prev
    ]);
  };

  const addShutdownEvent: RealtimeContextValue["addShutdownEvent"] = (event) => {
    const now = new Date().toISOString();
    const id = `sd-${now}`;
    setShutdowns((prev) => [
      {
        id,
        status: event.status ?? "Scheduled",
        ...event
      },
      ...prev
    ]);
    pushNotification(
      `Shutdown event created: ${event.title} on ${event.date}`,
      event.type === "Emergency" ? "alert" : "warning"
    );
  };

  return (
    <RealtimeContext.Provider
      value={{
        milestones,
        manpower,
        shutdowns,
        equipment,
        notifications,
        markNotificationRead,
        pushNotification,
        addShutdownEvent
      }}
    >
      {children}
    </RealtimeContext.Provider>
  );
}

export function useRealtime(): RealtimeContextValue {
  const ctx = useContext(RealtimeContext);
  if (!ctx) {
    throw new Error("useRealtime must be used within a RealtimeProvider");
  }
  return ctx;
}

