import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Progress } from "@/shared/ui/progress";
import { ServerIcon, DatabaseIcon, CloudIcon, WifiIcon } from "lucide-react";

interface SystemStatus {
  name: string;
  status: "operational" | "degraded" | "outage";
  uptime: string;
  responseTime?: number;
  icon: React.ReactNode;
}

const systemStatuses: SystemStatus[] = [
  {
    name: "API Gateway",
    status: "operational",
    uptime: "99.98%",
    responseTime: 45,
    icon: <ServerIcon className="h-4 w-4" />
  },
  {
    name: "Database",
    status: "operational", 
    uptime: "99.95%",
    responseTime: 12,
    icon: <DatabaseIcon className="h-4 w-4" />
  },
  {
    name: "GPS Tracking",
    status: "operational",
    uptime: "99.92%",
    responseTime: 89,
    icon: <WifiIcon className="h-4 w-4" />
  },
  {
    name: "Cloud Services",
    status: "degraded",
    uptime: "99.87%",
    responseTime: 156,
    icon: <CloudIcon className="h-4 w-4" />
  }
];

const getStatusColor = (status: SystemStatus["status"]) => {
  switch (status) {
    case "operational":
      return "success";
    case "degraded":
      return "warning";
    case "outage":
      return "destructive";
    default:
      return "secondary";
  }
};

const getStatusText = (status: SystemStatus["status"]) => {
  switch (status) {
    case "operational":
      return "Operational";
    case "degraded":
      return "Degraded";
    case "outage":
      return "Outage";
    default:
      return "Unknown";
  }
};

export function StatusPanelWidget() {
  const overallHealth = systemStatuses.filter(s => s.status === "operational").length / systemStatuses.length * 100;

  return (
    <Card className="industrial-border">
      <CardHeader>
        <CardTitle className="font-mono">System Status</CardTitle>
        <CardDescription>
          Real-time monitoring of platform services
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Health</span>
            <span className="font-mono">{overallHealth.toFixed(1)}%</span>
          </div>
          <Progress value={overallHealth} className="h-2" />
        </div>

        <div className="space-y-3">
          {systemStatuses.map((system) => (
            <div
              key={system.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="text-primary">{system.icon}</div>
                <div>
                  <div className="font-medium text-sm">{system.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Uptime: {system.uptime}
                    {system.responseTime && (
                      <> • {system.responseTime}ms</>
                    )}
                  </div>
                </div>
              </div>
              <Badge variant={getStatusColor(system.status)} className="text-xs">
                {getStatusText(system.status)}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-xs text-center text-muted-foreground pt-2 border-t border-border/50">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
}