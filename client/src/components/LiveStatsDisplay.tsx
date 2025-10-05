import { useState, useEffect } from 'react'

export default function LiveStatsDisplay() {
  const [shipmentValue, setShipmentValue] = useState(82456789.42)
  const [totalLoads, setTotalLoads] = useState(15678234)
  const [loadsPerMinute, setLoadsPerMinute] = useState(143)
  const [trucksActive, setTrucksActive] = useState(8924)
  const [showLive, setShowLive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShipmentValue(prev => prev + Math.random() * 15000)
      setTotalLoads(prev => prev + Math.floor(Math.random() * 3))
      setLoadsPerMinute(prev => Math.max(120, Math.min(180, prev + Math.floor(Math.random() * 10) - 5)))
      setTrucksActive(prev => Math.max(8500, Math.min(9500, prev + Math.floor(Math.random() * 20) - 10)))
      setShowLive(prev => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const last24Hours = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    value: 85 + Math.random() * 15
  }))

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-black text-green-500 p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-black pointer-events-none" />
      
      <div className="relative space-y-8 font-mono">
        <div className="flex items-start justify-between">
          <div className="text-sm tracking-wider">RASTALINK.IN</div>
          <div className="text-sm tracking-wider">TRUCKING NETWORK INDIA</div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-sm mb-2">
            <span className="text-muted-foreground tracking-wider" data-testid="label-shipment-value">TOTAL SHIPMENT VALUE</span>
            <span className={`transition-opacity duration-300 ${showLive ? 'opacity-100' : 'opacity-40'}`} data-testid="indicator-live">
              LIVE ⬤
            </span>
          </div>
          <div className="text-6xl md:text-7xl font-bold tracking-tight tabular-nums" data-testid="value-shipment-total">
            ₹{shipmentValue.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-total-loads">TOTAL LOADS SHIPPED</div>
            <div className="text-4xl font-bold tabular-nums" data-testid="value-total-loads">{totalLoads.toLocaleString('en-IN')}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-api-uptime">TRACKING API UPTIME</div>
            <div className="text-4xl font-bold text-green-400" data-testid="value-api-uptime">&gt;99.999%</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-loads-per-minute">LOADS PER MINUTE</div>
            <div className="text-4xl font-bold tabular-nums" data-testid="value-loads-per-minute">{loadsPerMinute.toLocaleString('en-IN')}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-24-hours">LAST 24 HOURS</div>
            <div className="flex items-end gap-0.5 h-12" data-testid="chart-24-hours">
              {last24Hours.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 bg-green-500 rounded-sm transition-all duration-300"
                  style={{ height: `${bar.value}%` }}
                  data-testid={`bar-activity-${i}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-record-trucks">TRUCKS ACHIEVING RECORD LOADS TODAY ⬤</div>
            <div className="text-4xl font-bold tabular-nums" data-testid="value-record-trucks">{trucksActive.toLocaleString('en-IN')}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground tracking-wider mb-2" data-testid="label-fleet-utilization">FLEET CAPACITY UTILIZATION ⬤</div>
            <div className="text-4xl font-bold" data-testid="value-fleet-utilization">87%</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm pt-4 border-t border-green-900/30">
          <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="button-previous">
            PREVIOUS
          </button>
          <div className="text-muted-foreground" data-testid="status-slide-index">1 / 4</div>
          <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="button-next">
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
