import { useState, useEffect } from 'react'

export default function LiveStatsDisplay() {
  const [shipmentValue, setShipmentValue] = useState(82456789.42)
  const [totalLoads, setTotalLoads] = useState(15678234)
  const [loadsPerMinute, setLoadsPerMinute] = useState(143)
  const [trucksActive, setTrucksActive] = useState(8924)

  useEffect(() => {
    const interval = setInterval(() => {
      setShipmentValue(prev => prev + Math.random() * 15000)
      setTotalLoads(prev => prev + Math.floor(Math.random() * 3))
      setLoadsPerMinute(prev => Math.max(120, Math.min(180, prev + Math.floor(Math.random() * 10) - 5)))
      setTrucksActive(prev => Math.max(8500, Math.min(9500, prev + Math.floor(Math.random() * 20) - 10)))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { label: 'TOTAL SHIPMENT VALUE', value: `₹${shipmentValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}` },
    { label: 'TOTAL LOADS SHIPPED', value: totalLoads.toLocaleString('en-IN') },
    { label: 'LOADS PER MINUTE', value: loadsPerMinute.toLocaleString('en-IN') },
    { label: 'TRUCKS — RECORD LOADS TODAY', value: trucksActive.toLocaleString('en-IN') },
  ]

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-black text-green-500 font-mono px-4 py-3">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-black pointer-events-none" />
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-[11px] text-muted-foreground tracking-wider mb-1">{s.label}</div>
            <div className="text-lg md:text-2xl font-bold tracking-tight tabular-nums whitespace-nowrap">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
