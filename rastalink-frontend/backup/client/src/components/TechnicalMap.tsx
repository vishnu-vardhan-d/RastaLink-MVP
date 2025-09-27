import { MapPin, Navigation, Zap, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TechnicalMap() {
  // TODO: Remove mock data when implementing real backend
  const livePositions = [
    { id: 'RLK-001', x: 15, y: 25, status: 'moving', route: 'NH-1' },
    { id: 'RLK-002', x: 45, y: 35, status: 'halted', route: 'NH-8' },
    { id: 'RLK-003', x: 75, y: 55, status: 'breakdown', route: 'NH-48' },
    { id: 'RLK-004', x: 35, y: 65, status: 'moving', route: 'NH-44' },
    { id: 'RLK-005', x: 85, y: 15, status: 'loading', route: 'NH-27' }
  ]

  return (
    <Card className="border-2 border-blue-500/30 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-mono text-blue-300 flex items-center gap-2">
          <Navigation className="h-5 w-5" />
          FLEET TRACKING [LIVE]
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="relative h-80 bg-slate-800/50 border border-blue-400/20 rounded-md overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          data-testid="map-container"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-10 grid-rows-8 h-full">
              {Array.from({ length: 80 }).map((_, i) => (
                <div key={i} className="border border-blue-400/10"></div>
              ))}
            </div>
          </div>

          {/* Route lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="dashes" patternUnits="userSpaceOnUse" width="8" height="2">
                <rect width="4" height="2" fill="rgb(59 130 246 / 0.6)" />
              </pattern>
            </defs>
            <path 
              d="M 50 50 Q 200 100 350 150" 
              stroke="url(#dashes)" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M 100 200 L 250 100 L 400 50" 
              stroke="url(#dashes)" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>

          {/* Live truck positions */}
          {livePositions.map((truck) => (
            <div
              key={truck.id}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ 
                left: `${truck.x}%`, 
                top: `${truck.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              data-testid={`truck-position-${truck.id}`}
            >
              <div className={`
                w-3 h-3 rounded-full border-2 animate-pulse
                ${truck.status === 'moving' ? 'bg-green-400 border-green-300' : ''}
                ${truck.status === 'halted' ? 'bg-yellow-400 border-yellow-300' : ''}
                ${truck.status === 'breakdown' ? 'bg-red-400 border-red-300' : ''}
                ${truck.status === 'loading' ? 'bg-blue-400 border-blue-300' : ''}
              `}></div>
              
              <div className="hidden group-hover:block absolute top-4 bg-slate-800 border border-blue-400/30 rounded px-2 py-1 text-xs font-mono text-blue-100 whitespace-nowrap z-10">
                <div>{truck.id}</div>
                <div className="text-blue-300">{truck.route}</div>
                <div className="text-gray-400">{truck.status.toUpperCase()}</div>
              </div>
            </div>
          ))}

          {/* Technical overlays */}
          <div className="absolute top-2 left-2 font-mono text-xs text-blue-300 space-y-1">
            <div>COORD: 28.6139° N, 77.2090° E</div>
            <div>SCALE: 1:250000</div>
            <div>UPDATE: {new Date().toLocaleTimeString()}</div>
          </div>

          <div className="absolute bottom-2 right-2 font-mono text-xs text-blue-300 space-y-1 text-right">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              MOVING: 3
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              HALTED: 1
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              ALERT: 1
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4 text-center">
          <div className="p-2 bg-slate-800/30 rounded border border-blue-400/20">
            <div className="font-mono text-green-400 text-lg font-bold">156</div>
            <div className="text-xs text-gray-400">ACTIVE</div>
          </div>
          <div className="p-2 bg-slate-800/30 rounded border border-blue-400/20">
            <div className="font-mono text-yellow-400 text-lg font-bold">23</div>
            <div className="text-xs text-gray-400">EN ROUTE</div>
          </div>
          <div className="p-2 bg-slate-800/30 rounded border border-blue-400/20">
            <div className="font-mono text-blue-400 text-lg font-bold">8</div>
            <div className="text-xs text-gray-400">LOADING</div>
          </div>
          <div className="p-2 bg-slate-800/30 rounded border border-blue-400/20">
            <div className="font-mono text-red-400 text-lg font-bold">2</div>
            <div className="text-xs text-gray-400">ALERTS</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}