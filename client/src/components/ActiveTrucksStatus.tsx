import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Truck, Activity, Navigation, Zap } from 'lucide-react'

interface TruckStatusCount {
  status: string
  count: number
  accent: string
  icon: any
  label: string
}

export default function ActiveTrucksStatus() {
  const [statusCounts, setStatusCounts] = useState<TruckStatusCount[]>([
    { status: 'ACTIVE', count: 847, accent: 'text-primary', icon: Activity, label: 'Online Active' },
    { status: 'READY', count: 234, accent: 'text-foreground', icon: Truck, label: 'Ready for Order' },
    { status: 'MOVING', count: 567, accent: 'text-orange-400', icon: Navigation, label: 'In Transit' },
    { status: 'IDLE', count: 156, accent: 'text-muted-foreground', icon: Truck, label: 'Idle Parked' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusCounts(prev => prev.map(s => ({
        ...s,
        count: Math.max(s.count + Math.floor((Math.random() - 0.5) * 10), 0),
      })))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const totalTrucks = statusCounts.reduce((sum, s) => sum + s.count, 0)

  return (
    <Card className="classic-card bg-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground heading-font">Fleet Status Monitor</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {totalTrucks.toLocaleString()} units · <span className="text-primary">Real-time</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statusCounts.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.status} className="bg-muted/30 rounded-lg p-3" data-testid={`status-${s.status.toLowerCase()}`}>
                <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                  <Icon className="h-3.5 w-3.5" />
                  <span className="text-[11px] leading-tight">{s.label}</span>
                </div>
                <div className={`text-xl font-bold tabular-nums ${s.accent}`}>{s.count.toLocaleString()}</div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
