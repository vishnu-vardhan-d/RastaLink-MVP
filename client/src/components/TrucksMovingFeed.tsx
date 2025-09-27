import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navigation, MapPin, Clock, Route, Zap } from 'lucide-react'

interface MovingTruck {
  id: string
  truckCode: string
  driver: string
  currentLocation: string
  destination: string
  progress: number
  eta: string
  distance: string
  speed: string
}

export default function TrucksMovingFeed() {
  const [movingTrucks, setMovingTrucks] = useState<MovingTruck[]>([
    {
      id: 'MT-001',
      truckCode: 'RLK-601-MH',
      driver: 'Ramesh Sharma',
      currentLocation: 'Pune, MH',
      destination: 'Mumbai, MH',
      progress: 65,
      eta: '2h 30m',
      distance: '45 km',
      speed: '58 km/h'
    },
    {
      id: 'MT-002',
      truckCode: 'RLK-702-KA',
      driver: 'Suresh Kumar',
      currentLocation: 'Hosur, TN',
      destination: 'Chennai, TN',
      progress: 30,
      eta: '4h 15m',
      distance: '180 km',
      speed: '62 km/h'
    },
    {
      id: 'MT-003',
      truckCode: 'RLK-803-DL',
      driver: 'Karthik Singh',
      currentLocation: 'Gurgaon, HR',
      destination: 'Jaipur, RJ',
      progress: 85,
      eta: '45m',
      distance: '25 km',
      speed: '55 km/h'
    },
    {
      id: 'MT-004',
      truckCode: 'RLK-904-GJ',
      driver: 'Pankaj Shah',
      currentLocation: 'Vadodara, GJ',
      destination: 'Ahmedabad, GJ',
      progress: 50,
      eta: '1h 20m',
      distance: '65 km',
      speed: '60 km/h'
    }
  ])

  const handleTrackTruck = (truckCode: string) => {
    console.log(`Tracking moving truck: ${truckCode}`)
  }

  // Simulate progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingTrucks(prev => prev.map(truck => ({
        ...truck,
        progress: Math.min(truck.progress + Math.floor(Math.random() * 5), 100),
        speed: `${Math.floor(Math.random() * 20 + 50)} km/h`
      })))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-400'
    if (progress >= 50) return 'bg-yellow-400'
    return 'bg-blue-400'
  }

  return (
    <Card className="border-2 border-yellow-500/30 bg-black/70 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-yellow-400 flex items-center gap-2 font-mono text-sm">
          <Navigation className="h-4 w-4" />
          [TRUCKS_IN_TRANSIT]
          <div className="ml-auto flex items-center gap-1">
            <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-xs">MOVING</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 max-h-80 overflow-y-auto">
        {movingTrucks.map((truck) => (
          <div 
            key={truck.id}
            className="p-3 bg-gray-900/40 border border-yellow-400/20 rounded hover-elevate transition-all"
            data-testid={`moving-truck-${truck.id}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Navigation className="h-4 w-4 text-yellow-400" />
                <div className="font-mono font-bold text-yellow-300 text-sm">{truck.truckCode}</div>
              </div>
              <Badge className="text-xs bg-yellow-600/20 text-yellow-300 border-yellow-400/30">
                {truck.progress}%
              </Badge>
            </div>

            <div className="text-sm mb-2">
              <div className="text-white font-medium">{truck.driver}</div>
            </div>

            <div className="mb-3">
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                <MapPin className="h-3 w-3 text-green-400" />
                <span>FROM:</span>
                <span className="text-green-300">{truck.currentLocation}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Route className="h-3 w-3 text-red-400" />
                <span>TO:</span>
                <span className="text-red-300">{truck.destination}</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>PROGRESS</span>
                <span>{truck.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(truck.progress)}`}
                  style={{ width: `${truck.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div>
                <div className="text-gray-400">ETA</div>
                <div className="text-blue-400 font-mono flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {truck.eta}
                </div>
              </div>
              <div>
                <div className="text-gray-400">DISTANCE</div>
                <div className="text-white font-mono">{truck.distance}</div>
              </div>
              <div>
                <div className="text-gray-400">SPEED</div>
                <div className="text-green-400 font-mono flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  {truck.speed}
                </div>
              </div>
            </div>

            <Button 
              size="sm"
              variant="outline"
              className="w-full text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/10 font-mono text-xs"
              onClick={() => handleTrackTruck(truck.truckCode)}
              data-testid={`button-track-${truck.id}`}
            >
              TRACK_LIVE
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}