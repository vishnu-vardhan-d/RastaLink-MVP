import { Truck, MapPin, Users } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-600/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 border-2 border-neon-yellow rounded-lg bg-gray-900 flex items-center justify-center">
              <Truck className="h-5 w-5 text-neon-yellow" />
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