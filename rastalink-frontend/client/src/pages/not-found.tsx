import { Link } from "wouter";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background blueprint-lines">
      <Card className="w-full max-w-md industrial-border">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 text-warning">
            <AlertTriangle className="w-full h-full" />
          </div>
          <CardTitle className="text-2xl font-mono">Route Not Found</CardTitle>
          <CardDescription>
            The requested route does not exist in the RastaLink network.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            Error Code: <span className="font-mono text-primary">404</span>
          </div>
          <Link href="/">
            <Button className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}