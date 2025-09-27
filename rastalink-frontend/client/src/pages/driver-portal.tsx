import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export default function DriverPortal() {
  return (
    <div className="min-h-screen bg-background blueprint-lines">
      <div className="container mx-auto px-4 py-6">
        <Card className="industrial-border">
          <CardHeader>
            <CardTitle className="font-mono">Driver Portal</CardTitle>
            <CardDescription>
              Mobile-optimized interface for drivers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}