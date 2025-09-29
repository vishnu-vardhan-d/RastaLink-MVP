import { TrendingUp, Users, Package, MapPin } from 'lucide-react'

interface QuickStatsWidgetProps {
  position: 'left' | 'right'
}

export default function QuickStatsWidget({ position }: QuickStatsWidgetProps) {
  // TODO: Remove mock data when implementing real backend
  const leftStats = [
    { label: 'Orders Today', value: '2,347', icon: Package, color: 'text-neon-yellow' },
    { label: 'Active Routes', value: '89', icon: MapPin, color: 'text-blue-400' }
  ]

  const rightStats = [
    { label: 'Online Drivers', value: '1,456', icon: Users, color: 'text-green-400' },
    { label: 'Revenue ₹', value: '4.2L', icon: TrendingUp, color: 'text-orange-400' }
  ]

  const stats = position === 'left' ? leftStats : rightStats

  return (
    <div className="space-y-3">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <div
            key={index}
            className="bg-black/40 border border-gray-600/20 rounded-md p-3 backdrop-blur-sm hover-elevate transition-all"
            data-testid={`quick-stat-${position}-${index}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <IconComponent className={`h-3 w-3 ${stat.color}`} />
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
            <div className={`text-lg font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        )
      })}
      
      {/* Live indicator */}
      <div className="flex items-center justify-center gap-1 text-xs">
        <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${
          position === 'left' ? 'bg-neon-yellow' : 'bg-green-400'
        }`}></div>
        <span className="text-gray-500">LIVE</span>
      </div>
    </div>
  )
}