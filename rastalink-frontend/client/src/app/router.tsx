import { Router as WouterRouter, Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "@/shared/ui/loading-spinner";

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import("@/pages/home"));
const DriverPortal = lazy(() => import("@/pages/driver-portal"));
const FleetDashboard = lazy(() => import("@/pages/fleet-dashboard"));
const LoadManagement = lazy(() => import("@/pages/load-management"));
const NotFound = lazy(() => import("@/pages/not-found"));

export function Router() {
  return (
    <WouterRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/driver" component={DriverPortal} />
          <Route path="/fleet" component={FleetDashboard} />
          <Route path="/loads" component={LoadManagement} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </WouterRouter>
  );
}