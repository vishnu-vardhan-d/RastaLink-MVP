import logoUrl from '@assets/generated_images/RastaLink_logo_design_1a682886.png'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt="RastaLink Logo" 
            className="h-8 w-auto"
            data-testid="img-logo"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight" data-testid="text-brand-name">
              RastaLink
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block" data-testid="text-tagline">
              AI-Powered Transport Solutions
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:block" data-testid="text-coverage">
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