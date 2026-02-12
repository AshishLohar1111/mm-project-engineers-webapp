import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { AppProviders } from "../components/providers/AppProviders";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}

