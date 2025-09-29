import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CheckCircle, Clock, MapPin, Truck, Phone } from 'lucide-react'

interface OrderConfirmation {
  id: string
  orderId: string
  lorryOwner: string
  ownerPhone: string
  truckCode: string
  driver: string
  route: string
  rate: string
  status: 'CONFIRMING' | 'CONFIRMED' | 'ASSIGNED'
  timeRemaining: string
  estimatedPickup: string
}

export default function OrderConfirmations() {
  const [confirmations, setConfirmations] = useState<OrderConfirmation[]>([
    {
      id: 'CONF-001',
      orderId: 'ORD-3401',
      lorryOwner: 'Sharma Transport Co.',
      ownerPhone: '+91-9876501234',
      truckCode: 'RLK-101-GJ',
      driver: 'Ramesh Patel',
      route: 'Surat → Mumbai',
      rate: '₹45,000',
      status: 'CONFIRMING',
      timeRemaining: '5 mins',
      estimatedPickup: '2:30 PM'
    },
    {
      id: 'CONF-002',
      orderId: 'ORD-3399',
      lorryOwner: 'Punjab Logistics Ltd',
      ownerPhone: '+91-9876501235',
      truckCode: 'RLK-203-PB',
      driver: 'Jasbir Singh',
      route: 'Ludhiana → Delhi',
      rate: '₹32,500',
      status: 'CONFIRMED',
      timeRemaining: 'Confirmed',
      estimatedPickup: '4:00 PM'
    },
    {
      id: 'CONF-003',
      orderId: 'ORD-3395',
      lorryOwner: 'Deccan Movers Pvt Ltd',
      ownerPhone: '+91-9876501236',
      truckCode: 'RLK-305-KA',
      driver: 'Venkatesh Reddy',
      route: 'Bangalore → Chennai',
      rate: '₹58,000',
      status: 'ASSIGNED',
      timeRemaining: 'Live',
      estimatedPickup: 'In Transit'
    },
    {
      id: 'CONF-004',
      orderId: 'ORD-3402',
      lorryOwner: 'Maharashtra Freight',
      ownerPhone: '+91-9876501237',
      truckCode: 'RLK-407-MH',
      driver: 'Suresh Patil',
      route: 'Pune → Nashik',
      rate: '₹38,500',
      status: 'CONFIRMING',
      timeRemaining: '12 mins',
      estimatedPickup: '6:15 PM'
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMING': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
      case 'CONFIRMED': return 'text-green-400 border-green-400/30 bg-green-400/10'
      case 'ASSIGNED': return 'text-blue-400 border-blue-400/30 bg-blue-400/10'
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'CONFIRMING': return Clock
      case 'CONFIRMED': return CheckCircle
      case 'ASSIGNED': return Truck
      default: return Clock
    }
  }

  // Simulate live confirmations
  useEffect(() => {
    const interval = setInterval(() => {
      setConfirmations(prev => prev.map(conf => {
        if (conf.status === 'CONFIRMING' && Math.random() > 0.8) {
          return { ...conf, status: 'CONFIRMED' as any, timeRemaining: 'Confirmed' }
        }
        return conf
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleContact = (phone: string) => {
    console.log(`Contacting: ${phone}`)
  }

  const handleTrackOrder = (orderId: string) => {
    console.log(`Tracking order: ${orderId}`)
  }

  return (
    <Card className="border-2 border-green-500/30 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-300 flex items-center gap-2 font-bold">
          <CheckCircle className="h-5 w-5" />
          LORRY OWNER CONFIRMATIONS
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono">LIVE</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {confirmations.map((conf) => {
            const StatusIcon = getStatusIcon(conf.status)
            return (
              <div 
                key={conf.id}
                className="p-4 bg-slate-800/40 border border-green-400/20 rounded-md hover-elevate transition-all"
                data-testid={`confirmation-${conf.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-green-400/30">
                      <AvatarFallback className="bg-slate-700 text-green-300 font-mono text-xs">
                        {conf.lorryOwner.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-green-300 text-sm">{conf.lorryOwner}</div>
                      <div className="text-xs text-gray-400 font-mono">{conf.truckCode}</div>
                    </div>
                  </div>
                  <Badge className={`text-xs font-mono ${getStatusColor(conf.status)}`}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {conf.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-gray-400 text-xs">ORDER ID</div>
                    <div className="text-white font-mono">{conf.orderId}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">DRIVER</div>
                    <div className="text-white font-medium">{conf.driver}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3 w-3 text-blue-400" />
                    <span className="text-gray-400 text-xs">ROUTE</span>
                  </div>
                  <div className="text-white font-medium">{conf.route}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div>
                    <div className="text-gray-400 text-xs">RATE</div>
                    <div className="text-neon-green font-bold">{conf.rate}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">TIME LEFT</div>
                    <div className="text-yellow-400 font-mono">{conf.timeRemaining}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">PICKUP</div>
                    <div className="text-white font-medium">{conf.estimatedPickup}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-green-400 border-green-400/30 hover:bg-green-400/10"
                    onClick={() => handleContact(conf.ownerPhone)}
                    data-testid={`button-contact-${conf.id}`}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    CONTACT
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleTrackOrder(conf.orderId)}
                    data-testid={`button-track-${conf.id}`}
                  >
                    TRACK ORDER
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}