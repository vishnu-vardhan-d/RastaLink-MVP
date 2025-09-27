import { Suspense } from "react";
import { LoadingSpinner } from "@/shared/ui/loading-spinner";
import { DashboardWidget } from "@/widgets/dashboard";
import { LiveFeedWidget } from "@/widgets/live-feed";
import { StatusPanelWidget } from "@/widgets/status-panel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background blueprint-lines">
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-mono font-bold text-primary">
            RastaLink Enterprise Platform
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            AI-Powered Trucking Network • Real-time Operations Dashboard
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Suspense fallback={<LoadingSpinner />}>
              <DashboardWidget />
            </Suspense>
          </div>
          
          <div className="space-y-6">
            <Suspense fallback={<LoadingSpinner />}>
              <StatusPanelWidget />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <LiveFeedWidget />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}