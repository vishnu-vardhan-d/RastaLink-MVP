import { Clock, Package, Truck, MapPin, AlertCircle } from 'lucide-react'

export default function LiveFeedTicker() {
  // TODO: Remove mock data when implementing real backend
  const liveUpdates = [
    { id: 1, type: 'new_order', text: 'New Order: Mumbai → Delhi (12T)', time: '2 min ago', icon: Package },
    { id: 2, type: 'truck_movement', text: 'RLK-105-KA reached Bangalore checkpoint', time: '3 min ago', icon: MapPin },
    { id: 3, type: 'new_order', text: 'Urgent Load: Chennai → Hyderabad (8T)', time: '5 min ago', icon: AlertCircle },
    { id: 4, type: 'truck_status', text: 'RLK-203-GJ completed delivery in Ahmedabad', time: '7 min ago', icon: Truck },
    { id: 5, type: 'new_order', text: 'Express Order: Kolkata → Bhubaneswar (15T)', time: '8 min ago', icon: Package },
    { id: 6, type: 'truck_movement', text: 'RLK-401-TN loading at Chennai port', time: '12 min ago', icon: MapPin },
    { id: 7, type: 'new_order', text: 'Heavy Load: Pune → Goa (20T)', time: '15 min ago', icon: Package },
    { id: 8, type: 'truck_status', text: 'RLK-678-RJ driver break completed', time: '18 min ago', icon: Truck }
  ]

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'new_order': return 'text-neon-yellow'
      case 'truck_movement': return 'text-blue-400'
      case 'truck_status': return 'text-green-400'
      default: return 'text-orange-400'
    }
  }

  return (
    <div className="bg-black/60 border border-gray-600/30 rounded-lg p-3 mb-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse"></div>
        <span className="text-xs font-medium text-gray-300">LIVE NETWORK UPDATES</span>
        <Clock className="h-3 w-3 text-gray-400" />
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
                <span className="text-white font-medium">{update.text}</span>
                <span className="text-gray-400 text-xs">({update.time})</span>
                <span className="text-gray-600 mx-2">•</span>
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
                <span className="text-white font-medium">{update.text}</span>
                <span className="text-gray-400 text-xs">({update.time})</span>
                <span className="text-gray-600 mx-2">•</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}