import { Clock, Package, Truck, MapPin, AlertCircle, TrendingUp, Users } from 'lucide-react'

export default function LiveFeedTicker() {
  // TODO: Remove mock data when implementing real backend
  const liveUpdates = [
    { id: 1, type: 'stat', text: 'Orders Today: 2,347', time: 'live', icon: Package },
    { id: 2, type: 'stat', text: 'Active Routes: 89', time: 'live', icon: MapPin },
    { id: 3, type: 'stat', text: 'Online Drivers: 1,456', time: 'live', icon: Users },
    { id: 4, type: 'stat', text: 'Revenue: ₹4.2L', time: 'live', icon: TrendingUp },
    { id: 5, type: 'new_order', text: 'New Order: Mumbai → Delhi (12T)', time: '2 min ago', icon: Package },
    { id: 6, type: 'truck_movement', text: 'RLK-105-KA reached Bangalore checkpoint', time: '3 min ago', icon: MapPin },
    { id: 7, type: 'new_order', text: 'Urgent Load: Chennai → Hyderabad (8T)', time: '5 min ago', icon: AlertCircle },
    { id: 8, type: 'truck_status', text: 'RLK-203-GJ completed delivery in Ahmedabad', time: '7 min ago', icon: Truck },
    { id: 9, type: 'new_order', text: 'Express Order: Kolkata → Bhubaneswar (15T)', time: '8 min ago', icon: Package },
    { id: 10, type: 'truck_movement', text: 'RLK-401-TN loading at Chennai port', time: '12 min ago', icon: MapPin },
    { id: 11, type: 'new_order', text: 'Heavy Load: Pune → Goa (20T)', time: '15 min ago', icon: Package },
    { id: 12, type: 'truck_status', text: 'RLK-678-RJ driver break completed', time: '18 min ago', icon: Truck }
  ]

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'stat': return 'text-neon-yellow'
      case 'new_order': return 'text-orange-400'
      case 'truck_movement': return 'text-blue-400'
      case 'truck_status': return 'text-green-400'
      default: return 'text-gray-300'
    }
  }

  return (
    <div className="bg-card technical-border technical-glow rounded-lg p-4 mb-8 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-foreground technical-text">LIVE_NETWORK_UPDATES</span>
        <Clock className="h-3 w-3 text-primary" />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-x space-x-8 whitespace-nowrap">
          {/* First set of updates */}
          {liveUpdates.map((update) => {
            const IconComponent = update.icon
            return (
              <div
                key={update.id}
                className="flex items-center gap-2 text-sm"
                data-testid={`live-update-${update.id}`}
              >
                <IconComponent className={`h-3 w-3 flex-shrink-0 ${getUpdateColor(update.type)}`} />
                <span className="text-foreground font-medium technical-text">{update.text}</span>
                <span className="text-muted-foreground text-xs technical-text">({update.time})</span>
                <span className="text-border mx-2">•</span>
              </div>
            )
          })}
          
          {/* Duplicate set for seamless loop */}
          {liveUpdates.map((update) => {
            const IconComponent = update.icon
            return (
              <div
                key={`dup-${update.id}`}
                className="flex items-center gap-2 text-sm"
              >
                <IconComponent className={`h-3 w-3 flex-shrink-0 ${getUpdateColor(update.type)}`} />
                <span className="text-foreground font-medium technical-text">{update.text}</span>
                <span className="text-muted-foreground text-xs technical-text">({update.time})</span>
                <span className="text-border mx-2">•</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}