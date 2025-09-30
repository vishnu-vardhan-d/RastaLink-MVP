import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Truck, Activity, Navigation, Zap } from 'lucide-react'

interface TruckStatusCount {
  status: string
  count: number
  color: string
  icon: any
  label: string
}

export default function ActiveTrucksStatus() {
  const [statusCounts, setStatusCounts] = useState<TruckStatusCount[]>([
    {
      status: 'ACTIVE',
      count: 847,
      color: 'text-primary bg-primary/10',
      icon: Activity,
      label: 'Online Active'
    },
    {
      status: 'READY',
      count: 234,
      color: 'text-foreground bg-secondary',
      icon: Truck,
      label: 'Ready for Order'
    },
    {
      status: 'MOVING',
      count: 567,
      color: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-950/30',
      icon: Navigation,
      label: 'In Transit'
    },
    {
      status: 'IDLE',
      count: 156,
      color: 'text-muted-foreground bg-muted',
      icon: Truck,
      label: 'Idle Parked'
    }
  ])

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusCounts(prev => prev.map(status => ({
        ...status,
        count: Math.max(status.count + Math.floor((Math.random() - 0.5) * 10), 0)
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const totalTrucks = statusCounts.reduce((sum, status) => sum + status.count, 0)

  return (
    <Card className="classic-card bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-foreground flex items-center gap-2 text-lg heading-font">
          <Zap className="h-5 w-5 text-primary" />
          Fleet Status Monitor
          <div className="ml-auto">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-foreground heading-font">{totalTrucks.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Fleet Units</div>
        </div>

        {statusCounts.map((status) => {
          const IconComponent = status.icon
          return (
            <div 
              key={status.status}
              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              data-testid={`status-${status.status.toLowerCase()}`}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground font-medium">{status.label}</span>
              </div>
              <Badge className={`text-xs ${status.color}`}>
                {status.count}
              </Badge>
            </div>
          )
        })}

        <div className="pt-3 border-t border-border/30 mt-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">System Status:</span>
            <span className="text-primary font-medium">Real-time</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}