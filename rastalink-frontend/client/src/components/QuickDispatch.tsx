import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Send, MapPin, Truck, Clock, Search } from 'lucide-react'

interface QuickMatch {
  truckCode: string
  driver: string
  location: string
  capacity: string
  distance: string
  eta: string
  status: 'AVAILABLE' | 'NEARBY' | 'EN_ROUTE'
}

export default function QuickDispatch() {
  const [searchLocation, setSearchLocation] = useState('')
  const [availableTrucks, setAvailableTrucks] = useState<QuickMatch[]>([
    {
      truckCode: 'RLK-501-MH',
      driver: 'Ramesh Sharma',
      location: 'Pune, MH',
      capacity: '12T',
      distance: '2.3 km',
      eta: '8 mins',
      status: 'AVAILABLE'
    },
    {
      truckCode: 'RLK-502-KA',
      driver: 'Suresh Kumar',
      location: 'Whitefield, KA',
      capacity: '8T',
      distance: '5.1 km',
      eta: '15 mins',
      status: 'NEARBY'
    },
    {
      truckCode: 'RLK-503-TN',
      driver: 'Karthik Raja',
      location: 'T.Nagar, TN',
      capacity: '15T',
      distance: '12.7 km',
      eta: '25 mins',
      status: 'EN_ROUTE'
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE': return 'text-green-400 border-green-400/30 bg-green-400/10'
      case 'NEARBY': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
      case 'EN_ROUTE': return 'text-blue-400 border-blue-400/30 bg-blue-400/10'
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10'
    }
  }

  const handleQuickSearch = () => {
    console.log(`Quick search for trucks near: ${searchLocation}`)
    // TODO: Implement actual search logic
  }

  const handleDispatch = (truckCode: string) => {
    console.log(`Dispatching truck: ${truckCode}`)
    // TODO: Implement actual dispatch logic
  }

  return (
    <Card className="border-2 border-orange-500/30 bg-black/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-orange-300 flex items-center gap-2 font-bold">
          <Send className="h-5 w-5" />
          QUICK DISPATCH TERMINAL
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter pickup location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="bg-gray-900/60 border-gray-600/30 text-white placeholder-gray-400"
              data-testid="input-dispatch-location"
            />
            <Button 
              size="sm"
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handleQuickSearch}
              data-testid="button-quick-search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-3 max-h-72 overflow-y-auto">
          {availableTrucks.map((truck) => (
            <div 
              key={truck.truckCode}
              className="p-3 bg-gray-900/60 border border-gray-600/30 rounded-md hover-elevate transition-all"
              data-testid={`dispatch-truck-${truck.truckCode}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-orange-400" />
                  <div className="font-mono font-bold text-orange-300">{truck.truckCode}</div>
                </div>
                <Badge className={`text-xs font-mono ${getStatusColor(truck.status)}`}>
                  {truck.status}
                </Badge>
              </div>

              <div className="mb-2">
                <div className="text-sm font-medium text-white">{truck.driver}</div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin className="h-3 w-3" />
                  {truck.location}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                <div>
                  <div className="text-gray-400">CAPACITY</div>
                  <div className="text-neon-yellow font-bold">{truck.capacity}</div>
                </div>
                <div>
                  <div className="text-gray-400">DISTANCE</div>
                  <div className="text-white font-mono">{truck.distance}</div>
                </div>
                <div>
                  <div className="text-gray-400">ETA</div>
                  <div className="text-blue-400 font-mono flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {truck.eta}
                  </div>
                </div>
              </div>

              <Button 
                size="sm"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold"
                onClick={() => handleDispatch(truck.truckCode)}
                disabled={truck.status === 'EN_ROUTE'}
                data-testid={`button-dispatch-${truck.truckCode}`}
              >
                {truck.status === 'EN_ROUTE' ? 'DISPATCHED' : 'DISPATCH NOW'}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}