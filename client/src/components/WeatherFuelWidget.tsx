import { Cloud, Fuel, Thermometer, Wind, Droplets } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WeatherFuelWidget() {
  // TODO: Remove mock data when implementing real backend
  const weatherData = [
    { city: 'Mumbai', temp: '32°C', condition: 'Sunny', wind: '12 km/h', humidity: '68%' },
    { city: 'Delhi', temp: '28°C', condition: 'Cloudy', wind: '8 km/h', humidity: '45%' },
    { city: 'Chennai', temp: '35°C', condition: 'Hot', wind: '15 km/h', humidity: '72%' },
    { city: 'Kolkata', temp: '30°C', condition: 'Rain', wind: '18 km/h', humidity: '85%' }
  ]

  const fuelPrices = [
    { region: 'North', diesel: '₹89.2/L', petrol: '₹108.5/L', change: '+₹2.1' },
    { region: 'West', diesel: '₹91.8/L', petrol: '₹111.2/L', change: '+₹1.8' },
    { region: 'South', diesel: '₹88.6/L', petrol: '₹106.9/L', change: '+₹2.3' },
    { region: 'East', diesel: '₹90.1/L', petrol: '₹109.7/L', change: '+₹1.9' }
  ]

  return (
    <div className="space-y-4">
      {/* Weather Widget */}
      <Card className="border-2 border-sky-500/30 bg-slate-900/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-mono text-sky-300 flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            WEATHER CONDITIONS [LIVE]
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {weatherData.map((weather) => (
              <div 
                key={weather.city}
                className="p-3 bg-slate-800/40 border border-sky-400/20 rounded-md"
                data-testid={`weather-${weather.city.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-sky-300">{weather.city}</span>
                  <span className="font-mono text-lg text-gray-300">{weather.temp}</span>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <Cloud className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-300">{weather.condition}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-300">{weather.wind}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-300">{weather.humidity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fuel Prices Widget */}
      <Card className="border-2 border-amber-500/30 bg-slate-900/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-mono text-amber-300 flex items-center gap-2">
            <Fuel className="h-5 w-5" />
            FUEL RATES [TODAY]
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {fuelPrices.map((fuel) => (
              <div 
                key={fuel.region}
                className="p-3 bg-slate-800/40 border border-amber-400/20 rounded-md"
                data-testid={`fuel-${fuel.region.toLowerCase()}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-amber-300">{fuel.region}</span>
                  <span className="text-xs text-red-400 font-mono">{fuel.change}</span>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Fuel className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-400">Diesel:</span>
                    <span className="font-mono text-amber-300">{fuel.diesel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-400">Petrol:</span>
                    <span className="font-mono text-amber-300">{fuel.petrol}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-amber-400/20">
            <div className="text-center font-mono text-xs">
              <div className="text-amber-400 text-lg font-bold">₹89.7</div>
              <div className="text-gray-400">NATIONAL AVG</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}