import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Minus, IndianRupee } from 'lucide-react'

interface RouteRate {
  id: string
  route: string
  currentRate: number
  previousRate: number
  change: number
  changeType: 'up' | 'down' | 'stable'
  truckType: string
  lastUpdated: string
}

export default function RateTicker() {
  const [rates, setRates] = useState<RouteRate[]>([
    {
      id: 'RT-001',
      route: 'Mumbai → Delhi',
      currentRate: 95000,
      previousRate: 92000,
      change: 3000,
      changeType: 'up',
      truckType: '16T',
      lastUpdated: '2 mins ago'
    },
    {
      id: 'RT-002',
      route: 'Chennai → Bangalore',
      currentRate: 45000,
      previousRate: 47000,
      change: -2000,
      changeType: 'down',
      truckType: '10T',
      lastUpdated: '5 mins ago'
    },
    {
      id: 'RT-003',
      route: 'Kolkata → Hyderabad',
      currentRate: 78000,
      previousRate: 78000,
      change: 0,
      changeType: 'stable',
      truckType: '14T',
      lastUpdated: '3 mins ago'
    },
    {
      id: 'RT-004',
      route: 'Pune → Ahmedabad',
      currentRate: 38500,
      previousRate: 36000,
      change: 2500,
      changeType: 'up',
      truckType: '8T',
      lastUpdated: '1 min ago'
    }
  ])

  const getTrendIcon = (type: string) => {
    switch (type) {
      case 'up': return TrendingUp
      case 'down': return TrendingDown
      default: return Minus
    }
  }

  const getTrendColor = (type: string) => {
    switch (type) {
      case 'up': return 'text-green-400'
      case 'down': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  // Simulate live rate updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => prev.map(rate => {
        if (Math.random() > 0.85) {
          const change = (Math.random() - 0.5) * 5000
          const newRate = Math.max(rate.currentRate + change, 10000)
          return {
            ...rate,
            previousRate: rate.currentRate,
            currentRate: Math.round(newRate),
            change: Math.round(change),
            changeType: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
            lastUpdated: 'Just now'
          }
        }
        return rate
      }))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-2 border-blue-500/30 bg-slate-900/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-blue-300 flex items-center gap-2 font-bold">
          <IndianRupee className="h-5 w-5" />
          LIVE RATE TICKER
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono">LIVE RATES</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {rates.map((rate) => {
            const TrendIcon = getTrendIcon(rate.changeType)
            const trendColor = getTrendColor(rate.changeType)
            
            return (
              <div 
                key={rate.id}
                className="p-3 bg-slate-800/40 border border-blue-400/20 rounded-md hover-elevate transition-all"
                data-testid={`rate-${rate.id}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono font-bold text-blue-300">{rate.route}</div>
                  <Badge className="text-xs bg-blue-600/20 text-blue-300 border-blue-400/30">
                    {rate.truckType}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold text-white">
                      ₹{rate.currentRate.toLocaleString()}
                    </div>
                    <div className={`flex items-center gap-1 ${trendColor}`}>
                      <TrendIcon className="h-4 w-4" />
                      <span className="text-sm font-mono">
                        {rate.change > 0 ? '+' : ''}{rate.change.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    {rate.lastUpdated}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}