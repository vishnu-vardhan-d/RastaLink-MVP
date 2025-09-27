import { MapPin, Navigation, Phone, User, Activity } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import StatusIndicator, { type TruckStatus } from './StatusIndicator'

interface TruckCardProps {
  truckCode: string
  status: TruckStatus
  driverName: string
  driverPhone: string
  currentLocation: string
  destination?: string
  distance: string
  capacity: string
  type: string
  lastUpdated: string
}

export default function TruckCard({
  truckCode,
  status,
  driverName,
  driverPhone,
  currentLocation,
  destination,
  distance,
  capacity,
  type,
  lastUpdated
}: TruckCardProps) {
  const handleContact = () => {
    console.log(`Contacting driver: ${driverPhone}`)
  }

  const handleTrack = () => {
    console.log(`Tracking truck: ${truckCode}`)
  }

  return (
    <Card className="hover-elevate transition-all duration-200 border-2 border-gray-600/40 bg-black/70 backdrop-blur-sm" data-testid={`card-truck-${truckCode}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white tracking-wide" data-testid={`text-truck-code-${truckCode}`}>
              {truckCode}
            </h3>
            <p className="text-sm text-gray-300 font-medium">{type} • {capacity}</p>
          </div>
          <StatusIndicator status={status} size="md" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-blue-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-300" data-testid={`text-location-${truckCode}`}>
                {currentLocation}
              </p>
              {destination && (
                <p className="text-xs text-orange-400">→ {destination}</p>
              )}
            </div>
            <span className="font-mono text-sm font-bold text-green-400" data-testid={`text-distance-${truckCode}`}>
              {distance}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-3 w-3 text-gray-400" />
            <p className="text-sm text-gray-300" data-testid={`text-driver-${truckCode}`}>
              {driverName}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-600/30">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-green-400" />
              <p className="text-xs text-gray-400">
                {lastUpdated}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="outline"
                className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10 font-mono text-xs h-7"
                onClick={handleContact}
                data-testid={`button-contact-${truckCode}`}
              >
                <Phone className="h-3 w-3 mr-1" />
                CALL
              </Button>
              <Button
                size="sm"
                className="bg-neon-yellow hover:bg-neon-yellow/80 text-black font-bold text-xs h-7"
                onClick={handleTrack}
                data-testid={`button-track-${truckCode}`}
              >
                <Navigation className="h-3 w-3 mr-1" />
                TRACK
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}