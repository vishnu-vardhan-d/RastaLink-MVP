import { Truck, MapPin, Users } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b technical-border bg-background/95 backdrop-blur-md sticky top-0 z-50 technical-grid">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Road divider arrows - chevron style */}
                <path 
                  d="M8 12 L20 20 L8 28" 
                  stroke="white" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M20 12 L32 20 L20 28" 
                  stroke="white" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight technical-text" data-testid="text-brand-name">
                <span className="text-foreground">RastaLink</span><span className="status-warning">.In</span>
              </h1>
              <p className="text-xs status-active hidden sm:block technical-text" data-testid="text-tagline">
                AI-POWERED TRUCKING NETWORK • TIER_2/3_MARKETS
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 ml-8 technical-text">
            <div className="flex items-center gap-2 text-sm data-display">
              <Users className="h-4 w-4 status-active" />
              <span className="text-foreground font-medium">2,500+ TRUCKS</span>
            </div>
            <div className="flex items-center gap-2 text-sm data-display">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">ALL_INDIA</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:block technical-text" data-testid="text-coverage">
            KASHMIR_TO_KANYAKUMARI
          </span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full pulse-glow" data-testid="indicator-live"></div>
            <span className="text-sm font-medium status-active data-display" data-testid="text-live-status">
              LIVE_TRACKING
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}