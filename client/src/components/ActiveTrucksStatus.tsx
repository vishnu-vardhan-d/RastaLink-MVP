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
    <Card className="technical-border bg-card technical-glow backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="status-active flex items-center gap-2 text-sm technical-text">
          <Zap className="h-4 w-4" />
          [FLEET_STATUS_MONITOR]
          <div className="ml-auto">
            <div className="h-2 w-2 bg-green-400 rounded-full pulse-glow"></div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center mb-4">
          <div className="text-2xl font-bold text-foreground data-display">{totalTrucks.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground technical-text">TOTAL_FLEET_UNITS</div>
        </div>

        {statusCounts.map((status) => {
          const IconComponent = status.icon
          return (
            <div 
              key={status.status}
              className="flex items-center justify-between p-2 bg-card/40 rounded technical-border"
              data-testid={`status-${status.status.toLowerCase()}`}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 text-primary" />
                <span className="text-xs text-foreground technical-text">{status.label}</span>
              </div>
              <Badge className={`text-xs font-mono ${status.color}`}>
                {status.count}
              </Badge>
            </div>
          )
        })}

        <div className="pt-2 border-t border-border/30">
          <div className="flex items-center justify-between text-xs technical-text">
            <span className="text-muted-foreground">SYSTEM_SYNC:</span>
            <span className="status-active">REALTIME</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}