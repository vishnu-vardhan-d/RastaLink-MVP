import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Package, Clock, IndianRupee, Zap } from 'lucide-react'

interface LiveOrder {
  id: string
  customer: string
  phone: string
  pickup: string
  delivery: string
  weight: string
  type: string
  rate: string
  urgency: 'URGENT' | 'HIGH' | 'NORMAL'
  timePosted: string
  bids: number
}

export default function LiveOrdersFeed() {
  const [orders, setOrders] = useState<LiveOrder[]>([
    {
      id: 'ORD-3401',
      customer: 'Gupta Textiles Pvt Ltd',
      phone: '+91-9876540001',
      pickup: 'Surat, GJ',
      delivery: 'Mumbai, MH', 
      weight: '8.5T',
      type: 'Cotton Bales',
      rate: '₹45,000',
      urgency: 'URGENT',
      timePosted: '2 mins ago',
      bids: 3
    },
    {
      id: 'ORD-3402',
      customer: 'Maharashtra Steel Corp',
      phone: '+91-9876540002',
      pickup: 'Pune, MH',
      delivery: 'Nashik, MH',
      weight: '12.8T',
      type: 'Steel Rods',
      rate: '₹38,500',
      urgency: 'HIGH',
      timePosted: '5 mins ago',
      bids: 7
    },
    {
      id: 'ORD-3403',
      customer: 'Kerala Spices Export',
      phone: '+91-9876540003',
      pickup: 'Kochi, KL',
      delivery: 'Chennai, TN',
      weight: '6.2T',
      type: 'Spices & Condiments',
      rate: '₹52,000',
      urgency: 'NORMAL',
      timePosted: '8 mins ago',
      bids: 12
    },
    {
      id: 'ORD-3404',
      customer: 'Punjab Agro Industries',
      phone: '+91-9876540004',
      pickup: 'Ludhiana, PB',
      delivery: 'Delhi, DL',
      weight: '15.0T',
      type: 'Wheat Grain',
      rate: '₹28,000',
      urgency: 'HIGH',
      timePosted: '12 mins ago',
      bids: 5
    }
  ])

  const handleQuickBid = (orderId: string) => {
    console.log(`Quick bid placed for order: ${orderId}`)
    // TODO: Implement actual bidding logic
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'URGENT': return 'text-red-400 border-red-400/30 bg-red-400/10'
      case 'HIGH': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
      default: return 'text-blue-400 border-blue-400/30 bg-blue-400/10'
    }
  }

  // Simulate live orders coming in
  useEffect(() => {
    const interval = setInterval(() => {
      // Add random new order occasionally
      if (Math.random() > 0.7) {
        const newOrder: LiveOrder = {
          id: `ORD-${Math.floor(Math.random() * 9000) + 1000}`,
          customer: `${['Rajesh', 'Priya', 'Suresh', 'Meera'][Math.floor(Math.random() * 4)]} ${['Industries', 'Exports', 'Trading', 'Corp'][Math.floor(Math.random() * 4)]}`,
          phone: `+91-98765${Math.floor(Math.random() * 90000) + 10000}`,
          pickup: `${['Delhi', 'Mumbai', 'Chennai', 'Kolkata'][Math.floor(Math.random() * 4)]}, ${['DL', 'MH', 'TN', 'WB'][Math.floor(Math.random() * 4)]}`,
          delivery: `${['Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad'][Math.floor(Math.random() * 4)]}, ${['KA', 'TS', 'MH', 'GJ'][Math.floor(Math.random() * 4)]}`,
          weight: `${(Math.random() * 15 + 5).toFixed(1)}T`,
          type: ['Electronics', 'Textiles', 'Steel', 'Food Grains'][Math.floor(Math.random() * 4)],
          rate: `₹${(Math.random() * 50000 + 25000).toFixed(0)}`,
          urgency: ['URGENT', 'HIGH', 'NORMAL'][Math.floor(Math.random() * 3)] as any,
          timePosted: 'Just now',
          bids: 0
        }
        setOrders(prev => [newOrder, ...prev.slice(0, 3)])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-2 border-neon-yellow/30 bg-black/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-neon-yellow flex items-center gap-2 font-bold">
          <Zap className="h-5 w-5" />
          LIVE CUSTOMER ORDERS
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-neon-yellow rounded-full animate-pulse"></div>
            <span className="text-xs font-mono">STREAMING</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="p-4 bg-gray-900/60 border border-gray-600/30 rounded-md hover-elevate transition-all"
              data-testid={`order-${order.id}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-white text-lg">{order.id}</div>
                  <div className="text-sm text-gray-300 font-medium">{order.customer}</div>
                  <div className="text-xs text-gray-400 font-mono">{order.phone}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs font-mono ${getUrgencyColor(order.urgency)}`}>
                    {order.urgency}
                  </Badge>
                  <div className="text-xs text-gray-400">{order.timePosted}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3 w-3 text-green-400" />
                    <span className="text-gray-300 font-mono">PICKUP</span>
                  </div>
                  <div className="text-white font-medium">{order.pickup}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3 w-3 text-red-400" />
                    <span className="text-gray-300 font-mono">DELIVERY</span>
                  </div>
                  <div className="text-white font-medium">{order.delivery}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-gray-400 text-xs">WEIGHT</div>
                  <div className="text-neon-yellow font-bold">{order.weight}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">TYPE</div>
                  <div className="text-white font-medium">{order.type}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">RATE</div>
                  <div className="text-neon-green font-bold">{order.rate}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Package className="h-3 w-3 text-blue-400" />
                  <span className="text-gray-400">{order.bids} bids received</span>
                </div>
                <Button 
                  size="sm" 
                  className="bg-neon-yellow text-black hover:bg-neon-yellow/80 font-bold"
                  onClick={() => handleQuickBid(order.id)}
                  data-testid={`button-bid-${order.id}`}
                >
                  QUICK BID
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}