import { Home, LayoutDashboard } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/98 backdrop-blur-sm sticky top-0 z-50 classic-shadow">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo — tricolor mark (Indian flag) + wordmark */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-green-500 leading-none tracking-tighter" aria-hidden="true">»</span>
            <h1 className="text-xl font-bold tracking-tight heading-font" data-testid="text-brand-name">
              <span className="text-foreground">RastaLink</span><span className="text-orange-500">.In</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-muted-foreground tracking-wide">Real-time trucking · Kashmir to Kanyakumari</span>
            <span className="text-[9px] font-semibold tracking-wide px-1.5 py-[1px] rounded border border-green-600/40 bg-green-600/10 text-green-500 whitespace-nowrap">MADE IN INDIA</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Track Load
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Find Trucks
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Fleet Dashboard
          </a>
        </nav>
      </div>
    </header>
  )
}
