import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Minus, IndianRupee } from 'lucide-react'

interface RouteRate {
  id: string
  route: string
  currentRate: number
  change: number
  changeType: 'up' | 'down' | 'stable'
  truckType: string
}

export default function RateTicker() {
  const [rates, setRates] = useState<RouteRate[]>([
    { id: 'RT-001', route: 'Mumbai → Delhi', currentRate: 95000, change: 3000, changeType: 'up', truckType: '16T' },
    { id: 'RT-002', route: 'Chennai → Bangalore', currentRate: 45000, change: -2000, changeType: 'down', truckType: '10T' },
    { id: 'RT-003', route: 'Kolkata → Hyderabad', currentRate: 78000, change: 0, changeType: 'stable', truckType: '14T' },
    { id: 'RT-004', route: 'Pune → Ahmedabad', currentRate: 38500, change: 2500, changeType: 'up', truckType: '8T' },
  ])

  const getTrendIcon = (type: string) => (type === 'up' ? TrendingUp : type === 'down' ? TrendingDown : Minus)
  const getTrendColor = (type: string) => (type === 'up' ? 'text-primary' : type === 'down' ? 'text-destructive' : 'text-muted-foreground')

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => prev.map(rate => {
        if (Math.random() > 0.85) {
          const change = Math.round((Math.random() - 0.5) * 5000)
          return {
            ...rate,
            currentRate: Math.max(rate.currentRate + change, 10000),
            change,
            changeType: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
          }
        }
        return rate
      }))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="classic-card bg-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground heading-font">Live Rate Ticker</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Live Rates
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {rates.map((rate) => {
            const TrendIcon = getTrendIcon(rate.changeType)
            const trendColor = getTrendColor(rate.changeType)
            return (
              <div key={rate.id} className="bg-muted/30 rounded-lg p-3" data-testid={`rate-${rate.id}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-foreground truncate">{rate.route}</span>
                  <span className="text-[10px] text-muted-foreground ml-1 shrink-0">{rate.truckType}</span>
                </div>
                <div className="text-base font-bold text-foreground tabular-nums">₹{rate.currentRate.toLocaleString()}</div>
                <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
                  <TrendIcon className="h-3 w-3" />
                  <span className="tabular-nums">{rate.change > 0 ? '+' : ''}{rate.change.toLocaleString()}</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
