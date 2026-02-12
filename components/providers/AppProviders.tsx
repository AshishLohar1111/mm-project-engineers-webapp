import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { RealtimeProvider } from "./RealtimeContext";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <AuthProvider>
      <RealtimeProvider>{children}</RealtimeProvider>
    </AuthProvider>
  );
}

