import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { startMockServer } from "@mock";
import { MainLayout } from "@components";
import { RoutingProvider } from "@lib";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

startMockServer();

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEEEEE",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <RoutingProvider visit={(url) => (router ? router.push(url) : null)}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </Hydrate>
      </RoutingProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
