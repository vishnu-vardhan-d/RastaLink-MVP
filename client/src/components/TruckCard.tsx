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
    <Card className="classic-card bg-card hover-elevate" data-testid={`card-truck-${truckCode}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground heading-font" data-testid={`text-truck-code-${truckCode}`}>
              {truckCode}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{type} • {capacity}</p>
          </div>
          <StatusIndicator status={status} size="md" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div className="flex-1">
              <p className="text-sm text-foreground" data-testid={`text-location-${truckCode}`}>
                {currentLocation}
              </p>
              {destination && (
                <p className="text-xs text-orange-500">→ {destination}</p>
              )}
            </div>
            <span className="text-sm font-bold text-primary heading-font" data-testid={`text-distance-${truckCode}`}>
              {distance}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-foreground" data-testid={`text-driver-${truckCode}`}>
              {driverName}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <p className="text-xs text-muted-foreground">
                {lastUpdated}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={handleContact}
                data-testid={`button-contact-${truckCode}`}
              >
                <Phone className="h-3 w-3 mr-1" />
                Call
              </Button>
              <Button
                size="sm"
                onClick={handleTrack}
                data-testid={`button-track-${truckCode}`}
              >
                <Navigation className="h-3 w-3 mr-1" />
                Track
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}