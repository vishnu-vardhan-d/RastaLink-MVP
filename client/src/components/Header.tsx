import { Activity, MapPin, Zap } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-blue-400/20 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 border-2 border-cyan-400 rounded bg-slate-700 flex items-center justify-center">
              <span className="font-mono text-cyan-400 font-bold text-sm">RL</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-mono text-lg font-bold text-cyan-300" data-testid="text-brand-name">
                RASTALINK_OS
              </h1>
              <p className="font-mono text-xs text-blue-300 hidden sm:block" data-testid="text-tagline">
                v2.4.1_INDUSTRIAL
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 ml-8">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Activity className="h-3 w-3 text-green-400" />
              <span className="text-green-400">SYS_ONLINE</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <MapPin className="h-3 w-3 text-blue-400" />
              <span className="text-blue-300">156_NODES</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-gray-400">LAT:</span>
              <span className="text-orange-400">12ms</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-gray-400 hidden md:block" data-testid="text-coverage">
            RANGE: KASHMIR_TO_KANYAKUMARI
          </span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" data-testid="indicator-live"></div>
            <span className="font-mono text-sm text-green-400" data-testid="text-live-status">
              LIVE_TRACKING
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs">
            <Zap className="h-3 w-3 text-yellow-400" />
            <span className="text-yellow-400">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </header>
  )
}