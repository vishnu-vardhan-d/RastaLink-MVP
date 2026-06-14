import { useState, useEffect } from 'react'
import { Cloud, Fuel } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WeatherFuelWidget() {
  const weatherData = [
    { city: 'Mumbai', temp: '32°C', condition: 'Sunny', wind: '12 km/h', humidity: '68%' },
    { city: 'Delhi', temp: '28°C', condition: 'Cloudy', wind: '8 km/h', humidity: '45%' },
    { city: 'Chennai', temp: '35°C', condition: 'Hot', wind: '15 km/h', humidity: '72%' },
    { city: 'Kolkata', temp: '30°C', condition: 'Rain', wind: '18 km/h', humidity: '85%' },
    { city: 'Bangalore', temp: '26°C', condition: 'Pleasant', wind: '10 km/h', humidity: '55%' },
    { city: 'Hyderabad', temp: '33°C', condition: 'Clear', wind: '14 km/h', humidity: '60%' },
    { city: 'Pune', temp: '31°C', condition: 'Cloudy', wind: '11 km/h', humidity: '58%' },
    { city: 'Ahmedabad', temp: '36°C', condition: 'Hot', wind: '16 km/h', humidity: '42%' },
  ]

  const fuelPrices = [
    { region: 'North', diesel: '₹89.2', petrol: '₹108.5', change: '+₹2.1' },
    { region: 'West', diesel: '₹91.8', petrol: '₹111.2', change: '+₹1.8' },
    { region: 'South', diesel: '₹88.6', petrol: '₹106.9', change: '+₹2.3' },
    { region: 'East', diesel: '₹90.1', petrol: '₹109.7', change: '+₹1.9' },
    { region: 'Central', diesel: '₹89.8', petrol: '₹107.9', change: '+₹2.0' },
    { region: 'North-East', diesel: '₹92.3', petrol: '₹112.5', change: '+₹2.4' },
  ]

  const VISIBLE = 4
  const [page, setPage] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPage(p => p + 1), 3800)
    return () => clearInterval(t)
  }, [])

  function slice<T>(arr: T[], n: number): T[] {
    const start = (page * n) % arr.length
    return Array.from({ length: n }, (_, i) => arr[(start + i) % arr.length])
  }

  const flip = {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    transition: { duration: 0.45, ease: 'easeOut' as const },
  }

  return (
    <div className="space-y-2 font-mono">
      {/* Weather board */}
      <div className="flex items-stretch rounded-lg border border-border bg-slate-900/60 overflow-hidden">
        <div className="flex items-center gap-2 px-4 bg-slate-900 border-r border-border shrink-0 text-sky-300">
          <Cloud className="h-3.5 w-3.5" /><span className="text-[11px] tracking-wider">WEATHER</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 py-2 px-4 flex-1" style={{ perspective: 700 }}>
          {slice(weatherData, VISIBLE).map((w) => (
            <motion.div key={`${w.city}-${page}`} {...flip} style={{ transformOrigin: 'top' }} className="min-w-0">
              <div className="text-sm truncate"><span className="font-bold text-sky-300">{w.city}</span> <span className="text-foreground">{w.temp}</span></div>
              <div className="text-[11px] text-muted-foreground truncate">{w.condition} · {w.wind} · {w.humidity}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fuel board */}
      <div className="flex items-stretch rounded-lg border border-border bg-slate-900/60 overflow-hidden">
        <div className="flex items-center gap-2 px-4 bg-slate-900 border-r border-border shrink-0 text-amber-300">
          <Fuel className="h-3.5 w-3.5" /><span className="text-[11px] tracking-wider">FUEL · AVG ₹89.7</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 py-2 px-4 flex-1" style={{ perspective: 700 }}>
          {slice(fuelPrices, VISIBLE).map((f) => (
            <motion.div key={`${f.region}-${page}`} {...flip} style={{ transformOrigin: 'top' }} className="min-w-0">
              <div className="text-sm truncate"><span className="font-bold text-amber-300">{f.region}</span> <span className="text-red-400 text-[11px]">{f.change}</span></div>
              <div className="text-[11px] text-muted-foreground truncate">D {f.diesel} · P {f.petrol}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
