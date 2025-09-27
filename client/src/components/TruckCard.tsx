import { MapPin, Navigation, Phone, User } from 'lucide-react'
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
    <Card className="hover-elevate transition-all duration-200 border-card-border" data-testid={`card-truck-${truckCode}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <h3 className="font-mono text-lg font-bold" data-testid={`text-truck-code-${truckCode}`}>
              {truckCode}
            </h3>
            <p className="text-sm text-muted-foreground">{type} • {capacity}</p>
          </div>
          <StatusIndicator status={status} size="md" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium" data-testid={`text-location-${truckCode}`}>
                {currentLocation}
              </p>
              {destination && (
                <p className="text-xs text-muted-foreground">→ {destination}</p>
              )}
            </div>
            <span className="text-sm font-semibold text-primary" data-testid={`text-distance-${truckCode}`}>
              {distance}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium" data-testid={`text-driver-${truckCode}`}>
              {driverName}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Updated {lastUpdated}
            </p>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleContact}
                data-testid={`button-contact-${truckCode}`}
              >
                <Phone className="h-3 w-3 mr-1" />
                Contact
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