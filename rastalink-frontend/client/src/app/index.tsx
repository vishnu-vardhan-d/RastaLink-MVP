import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/query-client";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { Router } from "./router";
import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { Toaster } from "@/shared/ui/toaster";
import "@/shared/styles/globals.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

const root = createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="rastalink-ui-theme">
          <Router />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);