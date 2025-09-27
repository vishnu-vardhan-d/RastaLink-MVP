import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { Clock, TruckIcon, AlertTriangle, CheckCircle } from "lucide-react";

interface FeedItem {
  id: string;
  type: "delivery" | "breakdown" | "dispatch" | "milestone";
  message: string;
  timestamp: string;
  location?: string;
  status: "success" | "warning" | "error" | "info";
}

const mockFeedItems: FeedItem[] = [
  {
    id: "1",
    type: "delivery",
    message: "Truck RJ14-AB-1234 completed delivery in Jaipur",
    timestamp: "2 minutes ago",
    location: "Jaipur, RJ",
    status: "success"
  },
  {
    id: "2",
    type: "dispatch",
    message: "New load dispatched to truck MH12-CD-5678",
    timestamp: "5 minutes ago",
    location: "Mumbai, MH",
    status: "info"
  },
  {
    id: "3",
    type: "breakdown",
    message: "Truck KA05-EF-9012 reported mechanical issue",
    timestamp: "12 minutes ago",
    location: "Bangalore, KA",
    status: "warning"
  },
  {
    id: "4",
    type: "milestone",
    message: "Delhi-Kolkata route achieved 95% on-time delivery",
    timestamp: "1 hour ago",
    location: "Multi-state",
    status: "success"
  }
];

const getIcon = (type: FeedItem["type"]) => {
  switch (type) {
    case "delivery":
      return <CheckCircle className="h-4 w-4" />;
    case "breakdown":
      return <AlertTriangle className="h-4 w-4" />;
    case "dispatch":
      return <TruckIcon className="h-4 w-4" />;
    case "milestone":
      return <CheckCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getStatusVariant = (status: FeedItem["status"]) => {
  switch (status) {
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "error":
      return "destructive";
    default:
      return "secondary";
  }
};

export function LiveFeedWidget() {
  return (
    <Card className="industrial-border">
      <CardHeader>
        <CardTitle className="font-mono flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Live Feed
        </CardTitle>
        <CardDescription>
          Real-time network activity and alerts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-3">
            {mockFeedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
              >
                <div className="mt-0.5 text-primary">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-tight">
                    {item.message}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{item.timestamp}</span>
                    {item.location && (
                      <>
                        <span>•</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <Badge 
                  variant={getStatusVariant(item.status)}
                  className="text-xs"
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}