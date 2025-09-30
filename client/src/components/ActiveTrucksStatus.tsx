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
      color: 'text-green-400 border-green-400/30 bg-green-400/10',
      icon: Activity,
      label: 'ONLINE_ACTIVE'
    },
    {
      status: 'READY',
      count: 234,
      color: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
      icon: Truck,
      label: 'READY_FOR_ORDER'
    },
    {
      status: 'MOVING',
      count: 567,
      color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
      icon: Navigation,
      label: 'IN_TRANSIT'
    },
    {
      status: 'IDLE',
      count: 156,
      color: 'text-gray-400 border-gray-400/30 bg-gray-400/10',
      icon: Truck,
      label: 'IDLE_PARKED'
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
              <Badge className={`text-xs font-mono ${status.color}`}>
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