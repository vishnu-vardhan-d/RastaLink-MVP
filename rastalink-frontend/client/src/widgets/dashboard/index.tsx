import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/ui/card";
import { Badge } from "@/shared/ui/ui/badge";
import { TruckIcon, PackageIcon, MapPinIcon, DollarSignIcon } from "lucide-react";

interface DashboardStats {
  activeTrucks: number;
  loadsInTransit: number;
  deliveriesCompleted: number;
  totalRevenue: number;
}

const mockStats: DashboardStats = {
  activeTrucks: 245,
  loadsInTransit: 127,
  deliveriesCompleted: 1834,
  totalRevenue: 2489750
};

export function DashboardWidget() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="industrial-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trucks</CardTitle>
            <TruckIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{mockStats.activeTrucks}</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="success" className="text-xs">+12%</Badge> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="industrial-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Loads in Transit</CardTitle>
            <PackageIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{mockStats.loadsInTransit}</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-xs">Live tracking</Badge>
            </p>
          </CardContent>
        </Card>

        <Card className="industrial-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deliveries Completed</CardTitle>
            <MapPinIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{mockStats.deliveriesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="success" className="text-xs">+8%</Badge> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="industrial-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">
              ₹{(mockStats.totalRevenue / 100000).toFixed(1)}L
            </div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="success" className="text-xs">+15%</Badge> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="industrial-border">
        <CardHeader>
          <CardTitle className="font-mono">Network Operations</CardTitle>
          <CardDescription>
            Real-time overview of RastaLink trucking network
          </CardDescription>
        </CardHeader>
        <CardContent className="grid-pattern p-6">
          <div className="text-center text-muted-foreground">
            <div className="text-primary font-mono text-lg mb-2">
              System Status: <Badge variant="success">OPERATIONAL</Badge>
            </div>
            <p className="text-sm">
              All systems running normally. Network latency: 45ms
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}