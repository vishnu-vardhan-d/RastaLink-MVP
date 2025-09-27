import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Truck, MapPin, Clock, CheckCircle } from 'lucide-react'

interface ReadyTruck {
  id: string
  truckCode: string
  driver: string
  location: string
  capacity: string
  type: string
  readyTime: string
  distance: string
}

export default function TrucksReadyFeed() {
  const [readyTrucks, setReadyTrucks] = useState<ReadyTruck[]>([
    {
      id: 'RT-001',
      truckCode: 'RLK-101-DL',
      driver: 'Rajesh Kumar',
      location: 'Delhi, DL',
      capacity: '10T',
      type: 'MEDIUM',
      readyTime: '2 mins',
      distance: '1.2 km'
    },
    {
      id: 'RT-002',
      truckCode: 'RLK-205-MH',
      driver: 'Suresh Patil',
      location: 'Mumbai, MH',
      capacity: '16T',
      type: 'HEAVY',
      readyTime: '5 mins',
      distance: '3.7 km'
    },
    {
      id: 'RT-003',
      truckCode: 'RLK-308-KA',
      driver: 'Manjunath Reddy',
      location: 'Bangalore, KA',
      capacity: '8T',
      type: 'LIGHT',
      readyTime: '1 min',
      distance: '0.8 km'
    },
    {
      id: 'RT-004',
      truckCode: 'RLK-412-TN',
      driver: 'Karthik Murugan',
      location: 'Chennai, TN',
      capacity: '12T',
      type: 'MEDIUM',
      readyTime: '7 mins',
      distance: '5.2 km'
    }
  ])

  const handleAssignLoad = (truckCode: string) => {
    console.log(`Assigning load to ready truck: ${truckCode}`)
  }

  // Simulate trucks becoming ready
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newTruck: ReadyTruck = {
          id: `RT-${Math.floor(Math.random() * 9000) + 1000}`,
          truckCode: `RLK-${Math.floor(Math.random() * 900) + 100}-${['DL', 'MH', 'KA', 'TN', 'GJ', 'PB'][Math.floor(Math.random() * 6)]}`,
          driver: `${['Ramesh', 'Suresh', 'Karthik', 'Manjunath'][Math.floor(Math.random() * 4)]} ${['Kumar', 'Patil', 'Reddy', 'Singh'][Math.floor(Math.random() * 4)]}`,
          location: `${['Delhi', 'Mumbai', 'Chennai', 'Bangalore'][Math.floor(Math.random() * 4)]}, ${['DL', 'MH', 'TN', 'KA'][Math.floor(Math.random() * 4)]}`,
          capacity: `${[6, 8, 10, 12, 16][Math.floor(Math.random() * 5)]}T`,
          type: ['LIGHT', 'MEDIUM', 'HEAVY'][Math.floor(Math.random() * 3)],
          readyTime: 'Just now',
          distance: `${(Math.random() * 10 + 0.5).toFixed(1)} km`
        }
        setReadyTrucks(prev => [newTruck, ...prev.slice(0, 3)])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-2 border-blue-500/30 bg-black/70 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-blue-400 flex items-center gap-2 font-mono text-sm">
          <CheckCircle className="h-4 w-4" />
          [TRUCKS_READY_FOR_ORDER]
          <div className="ml-auto flex items-center gap-1">
            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs">READY</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 max-h-80 overflow-y-auto">
        {readyTrucks.map((truck) => (
          <div 
            key={truck.id}
            className="p-3 bg-gray-900/40 border border-blue-400/20 rounded hover-elevate transition-all"
            data-testid={`ready-truck-${truck.id}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-blue-400" />
                <div className="font-bold text-blue-300 text-sm">{truck.truckCode}</div>
              </div>
              <Badge className="text-xs bg-blue-600/20 text-blue-300 border-blue-400/30">
                {truck.type}
              </Badge>
            </div>

            <div className="text-sm mb-2">
              <div className="text-white font-medium">{truck.driver}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin className="h-3 w-3" />
                {truck.location}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div>
                <div className="text-gray-400">CAPACITY</div>
                <div className="text-yellow-400 font-mono font-bold">{truck.capacity}</div>
              </div>
              <div>
                <div className="text-gray-400">DISTANCE</div>
                <div className="text-white font-mono">{truck.distance}</div>
              </div>
              <div>
                <div className="text-gray-400">READY</div>
                <div className="text-green-400 font-mono flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {truck.readyTime}
                </div>
              </div>
            </div>

            <Button 
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs"
              onClick={() => handleAssignLoad(truck.truckCode)}
              data-testid={`button-assign-${truck.id}`}
            >
              ASSIGN_LOAD
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}