import { Truck, MapPin, Users } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-600/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 relative">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {/* Main truck front body */}
                <rect x="6" y="8" width="36" height="32" rx="2" fill="#1f2937" stroke="#facc15" strokeWidth="2"/>
                
                {/* Front grille pattern */}
                <rect x="10" y="12" width="28" height="4" fill="#facc15"/>
                <rect x="10" y="18" width="28" height="2" fill="#22c55e"/>
                <rect x="10" y="22" width="28" height="2" fill="#facc15"/>
                <rect x="10" y="26" width="28" height="2" fill="#22c55e"/>
                
                {/* Decorative side panels */}
                <rect x="6" y="8" width="4" height="32" fill="#dc2626" rx="1"/>
                <rect x="38" y="8" width="4" height="32" fill="#dc2626" rx="1"/>
                
                {/* Front bumper */}
                <rect x="4" y="36" width="40" height="4" fill="#374151" rx="2"/>
                
                {/* Decorative elements - traditional patterns */}
                <circle cx="16" cy="16" r="2" fill="#facc15"/>
                <circle cx="24" cy="16" r="2" fill="#22c55e"/>
                <circle cx="32" cy="16" r="2" fill="#facc15"/>
                
                {/* Horn/lights */}
                <circle cx="12" cy="32" r="2" fill="#fbbf24"/>
                <circle cx="36" cy="32" r="2" fill="#fbbf24"/>
                
                {/* Central emblem */}
                <rect x="20" y="30" width="8" height="6" fill="#facc15" rx="1"/>
                <text x="24" y="34" textAnchor="middle" fontSize="6" fill="#000" fontWeight="bold">RL</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-tight" data-testid="text-brand-name">
                RastaLink.in
              </h1>
              <p className="text-xs text-neon-yellow hidden sm:block" data-testid="text-tagline">
                India's Trucking Network
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 ml-8">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-neon-green" />
              <span className="text-white font-medium">2,500+ Trucks</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-white font-medium">All India</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300 hidden md:block" data-testid="text-coverage">
            Kashmir to Kanyakumari
          </span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-neon-green rounded-full animate-pulse" data-testid="indicator-live"></div>
            <span className="text-sm font-medium text-neon-green" data-testid="text-live-status">
              Live Tracking
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}