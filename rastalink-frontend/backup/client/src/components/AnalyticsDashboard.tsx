import { TrendingUp, DollarSign, Clock, Fuel } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AnalyticsDashboard() {
  // TODO: Remove mock data when implementing real backend
  const metrics = [
    { label: 'REVENUE', value: '₹24.8L', change: '+12.5%', trend: 'up' },
    { label: 'EFFICIENCY', value: '94.2%', change: '+3.1%', trend: 'up' },
    { label: 'FUEL COST', value: '₹8.9L', change: '-5.2%', trend: 'down' },
    { label: 'UPTIME', value: '98.7%', change: '+0.8%', trend: 'up' }
  ]

  const routes = [
    { name: 'Mumbai-Delhi', volume: '85%', revenue: '₹4.2L', trips: 23 },
    { name: 'Chennai-Bangalore', volume: '72%', revenue: '₹2.8L', trips: 18 },
    { name: 'Kolkata-Hyderabad', volume: '64%', revenue: '₹3.1L', trips: 15 }
  ]

  return (
    <Card className="border-2 border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-mono text-cyan-300 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          ANALYTICS COMMAND CENTER [REAL-TIME]
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className="p-3 bg-slate-800/40 border border-cyan-400/20 rounded-md"
              data-testid={`metric-${metric.label.toLowerCase()}`}
            >
              <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
              <div className="text-lg font-bold font-mono text-cyan-300">{metric.value}</div>
              <div className={`text-xs font-mono flex items-center gap-1 ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <span>{metric.change}</span>
                <div className={`w-0 h-0 ${
                  metric.trend === 'up' 
                    ? 'border-l-2 border-r-2 border-b-2 border-transparent border-b-green-400'
                    : 'border-l-2 border-r-2 border-t-2 border-transparent border-t-red-400'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart Simulation */}
        <div className="mb-6 p-4 bg-slate-800/30 border border-cyan-400/20 rounded-md">
          <div className="text-sm font-mono text-cyan-300 mb-3">FLEET PERFORMANCE [24H]</div>
          <div className="h-24 relative">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="performance" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path 
                d="M 0 60 Q 50 40 100 45 T 200 35 T 300 40 T 400 30" 
                stroke="rgb(34 197 94)" 
                strokeWidth="2" 
                fill="url(#performance)"
                className="opacity-80"
              />
              <path 
                d="M 0 60 Q 50 40 100 45 T 200 35 T 300 40 T 400 30" 
                stroke="rgb(34 197 94)" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
            <div className="absolute bottom-0 left-0 text-xs font-mono text-gray-400">00:00</div>
            <div className="absolute bottom-0 right-0 text-xs font-mono text-gray-400">24:00</div>
          </div>
        </div>

        {/* Top Routes */}
        <div>
          <div className="text-sm font-mono text-cyan-300 mb-3">TOP PERFORMING ROUTES</div>
          <div className="space-y-2">
            {routes.map((route, index) => (
              <div 
                key={route.name}
                className="p-3 bg-slate-800/30 border border-cyan-400/10 rounded-md"
                data-testid={`route-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-gray-300">{route.name}</div>
                  <div className="font-mono text-green-400">{route.revenue}</div>
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400">VOLUME:</div>
                    <div className="text-cyan-300">{route.volume}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400">TRIPS:</div>
                    <div className="text-cyan-300">{route.trips}</div>
                  </div>
                </div>
                <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                  <div 
                    className="bg-cyan-400 h-1 rounded-full transition-all"
                    style={{ width: route.volume }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}