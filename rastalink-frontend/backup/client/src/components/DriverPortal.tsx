import { User, Phone, MapPin, Clock, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DriverPortal() {
  // TODO: Remove mock data when implementing real backend
  const onlineDrivers = [
    {
      id: 'DRV-001',
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      location: 'Mumbai, MH',
      status: 'AVAILABLE',
      rating: 4.8,
      experience: '12Y',
      truckCode: 'RLK-001-DL'
    },
    {
      id: 'DRV-002', 
      name: 'Suresh Patil',
      phone: '+91-9876543211',
      location: 'Pune, MH',
      status: 'EN_ROUTE',
      rating: 4.9,
      experience: '8Y',
      truckCode: 'RLK-002-MH'
    },
    {
      id: 'DRV-003',
      name: 'Karthik M',
      phone: '+91-9876543212', 
      location: 'Chennai, TN',
      status: 'BREAK',
      rating: 4.7,
      experience: '15Y',
      truckCode: 'RLK-003-TN'
    }
  ]

  const handleContact = (driverId: string, phone: string) => {
    console.log(`Contacting driver ${driverId}: ${phone}`)
  }

  const handleAssign = (driverId: string) => {
    console.log(`Assigning load to driver: ${driverId}`)
  }

  return (
    <Card className="border-2 border-green-500/30 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-mono text-green-300 flex items-center gap-2">
          <User className="h-5 w-5" />
          DRIVER DISPATCH TERMINAL [ONLINE]
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {onlineDrivers.map((driver) => (
            <div 
              key={driver.id}
              className="p-4 bg-slate-800/40 border border-green-400/20 rounded-md hover-elevate transition-all"
              data-testid={`driver-${driver.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-green-400/30">
                    <AvatarFallback className="bg-slate-700 text-green-300 font-mono">
                      {driver.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-bold text-green-300">{driver.name}</div>
                    <div className="font-mono text-xs text-gray-400">{driver.id}</div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <MapPin className="h-3 w-3 text-blue-400" />
                      <span className="text-gray-300">{driver.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`font-mono text-xs px-2 py-1 rounded border ${
                    driver.status === 'AVAILABLE' ? 'text-green-400 border-green-400/30 bg-green-400/10' :
                    driver.status === 'EN_ROUTE' ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' :
                    'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                  }`}>
                    {driver.status}
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{driver.rating}</span>
                    <span className="text-gray-500">({driver.experience})</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-green-400/20">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm">
                    <span className="text-gray-400">TRUCK: </span>
                    <span className="text-green-300">{driver.truckCode}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-green-400/30 text-green-300 hover:bg-green-400/10 font-mono text-xs"
                      onClick={() => handleContact(driver.id, driver.phone)}
                      data-testid={`button-contact-${driver.id}`}
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      CALL
                    </Button>
                    
                    {driver.status === 'AVAILABLE' && (
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600 text-white font-mono text-xs"
                        onClick={() => handleAssign(driver.id)}
                        data-testid={`button-assign-${driver.id}`}
                      >
                        ASSIGN
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Driver stats */}
        <div className="mt-6 pt-4 border-t border-green-400/20">
          <div className="grid grid-cols-4 gap-4 text-center font-mono text-xs">
            <div>
              <div className="text-green-400 text-lg font-bold">89</div>
              <div className="text-gray-400">ONLINE</div>
            </div>
            <div>
              <div className="text-blue-400 text-lg font-bold">34</div>
              <div className="text-gray-400">EN ROUTE</div>
            </div>
            <div>
              <div className="text-yellow-400 text-lg font-bold">12</div>
              <div className="text-gray-400">ON BREAK</div>
            </div>
            <div>
              <div className="text-gray-400 text-lg font-bold">156</div>
              <div className="text-gray-400">TOTAL</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}