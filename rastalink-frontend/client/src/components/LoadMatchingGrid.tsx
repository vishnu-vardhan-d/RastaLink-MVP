import { Package, Truck, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function LoadMatchingGrid() {
  // TODO: Remove mock data when implementing real backend
  const availableLoads = [
    {
      id: 'LD-2401',
      origin: 'Mumbai, MH',
      destination: 'Delhi, DL', 
      weight: '12.5T',
      type: 'Electronics',
      rate: '₹85,000',
      pickup: '2024-01-15',
      priority: 'HIGH'
    },
    {
      id: 'LD-2402',
      origin: 'Chennai, TN',
      destination: 'Bangalore, KA',
      weight: '8.2T', 
      type: 'Textiles',
      rate: '₹42,000',
      pickup: '2024-01-16',
      priority: 'MEDIUM'
    },
    {
      id: 'LD-2403',
      origin: 'Kolkata, WB',
      destination: 'Hyderabad, TS',
      weight: '15.8T',
      type: 'Steel',
      rate: '₹95,000',
      pickup: '2024-01-14',
      priority: 'URGENT'
    }
  ]

  const handleBidLoad = (loadId: string) => {
    console.log(`Bidding on load: ${loadId}`)
  }

  return (
    <Card className="border-2 border-neon-yellow/30 bg-black/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-neon-yellow flex items-center gap-2 font-bold">
          <Package className="h-5 w-5" />
          LOAD MATCHING GRID [ACTIVE]
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {availableLoads.map((load) => (
            <div 
              key={load.id}
              className="p-4 bg-gray-900/60 border border-gray-600/30 rounded-md hover-elevate transition-all"
              data-testid={`load-${load.id}`}
            >
              <div className="grid grid-cols-12 gap-4 items-center text-sm">
                {/* Load ID & Priority */}
                <div className="col-span-2">
                  <div className="font-bold text-white text-lg">{load.id}</div>
                  <div className={`text-xs font-mono ${
                    load.priority === 'URGENT' ? 'text-red-400' :
                    load.priority === 'HIGH' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {load.priority}
                  </div>
                </div>

                {/* Route */}
                <div className="col-span-4">
                  <div className="flex items-center gap-2 font-mono">
                    <MapPin className="h-3 w-3 text-green-400" />
                    <span className="text-gray-300">{load.origin}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-3 w-3 flex items-center justify-center">
                      <div className="h-px w-2 bg-neon-yellow"></div>
                    </div>
                    <span className="text-white font-medium">{load.destination}</span>
                  </div>
                </div>

                {/* Specifications */}
                <div className="col-span-3">
                  <div className="font-mono text-blue-300">{load.weight}</div>
                  <div className="text-xs text-gray-400">{load.type}</div>
                </div>

                {/* Rate & Timing */}
                <div className="col-span-2">
                  <div className="font-mono font-bold text-green-400">{load.rate}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {load.pickup}
                  </div>
                </div>

                {/* Action */}
                <div className="col-span-1">
                  <Button 
                    size="sm" 
                    className="bg-neon-yellow hover:bg-neon-yellow/80 text-black font-bold text-xs"
                    onClick={() => handleBidLoad(load.id)}
                    data-testid={`button-bid-${load.id}`}
                  >
                    BID
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid summary */}
        <div className="mt-6 pt-4 border-t border-orange-400/20">
          <div className="grid grid-cols-4 gap-4 text-center font-mono text-xs">
            <div>
              <div className="text-orange-400 text-lg font-bold">47</div>
              <div className="text-gray-400">AVAILABLE</div>
            </div>
            <div>
              <div className="text-yellow-400 text-lg font-bold">12</div>
              <div className="text-gray-400">BIDDING</div>
            </div>
            <div>
              <div className="text-green-400 text-lg font-bold">8</div>
              <div className="text-gray-400">MATCHED</div>
            </div>
            <div>
              <div className="text-blue-400 text-lg font-bold">₹2.4L</div>
              <div className="text-gray-400">AVG RATE</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}